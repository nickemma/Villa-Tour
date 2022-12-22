import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user';

// Database name
const secret = 'test'

export const register = async (req: any, res: any) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({
      id: result._id,
      email: result.email,
    }, secret, {
      expiresIn: '1h'
    });

    res.status(200).json({ result, token }) 
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong.' })
    console.log(err);
  };
}

export const signin = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (!userExists) 
      return res.status(404).json({ message: 'User does not exist' });

    const isPasswordCorrect = await bcrypt.compare(password, userExists.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid Credentials' });
    
    const token = jwt.sign({
      id: userExists._id,
      email: userExists.email,
    }, secret, {
      expiresIn: '1h'
    });

    res.status(200).json({ user: userExists, token });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong.' })
    console.log(err);
  }
}
