import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || '';

const userAuth = (req: any, res: any, next: any) => {
  let token = '';

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      
      const decoded: any = jwt.verify(token, secret);
      req.user = decoded.id;

      next();
    } catch (err) {
      res.status(401).json({ message: 'Not authorized' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'No token, authorization denied' });
  }
};

export default userAuth;
