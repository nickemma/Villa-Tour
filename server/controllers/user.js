import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const secret = 'test';
export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
 
