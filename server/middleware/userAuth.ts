import jwt from 'jsonwebtoken';

const secret = 'test';

const userAuth = (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const isCustomAuth = token.length < 500;
    let decodedData: any;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default userAuth;
