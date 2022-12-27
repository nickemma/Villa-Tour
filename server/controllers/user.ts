import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user';

// Database name
const secret = process.env.JWT_SECRET || '';

export const register = async (req: any, res: any) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await User.create({
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
    });

    res.status(200).json({ 
      user: result,
      token: generateToken(result._id) 
    });
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

    res.status(200).json({ 
      user: userExists,
      token: generateToken(userExists._id) 
    });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong.' })
    console.log(err);
  }
}

const generateToken = (id: any) => {
  const token = jwt.sign({ id }, secret, {
    expiresIn: '30d'
  });
  return token;
}