import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/user.js';

mongoose.set('strictQuery', false);

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/user', userRoutes);

const CONNECTION_URL =
  'mongodb+srv://codewithtechieemma:Nicktrent1@cluster0.vuiwyfj.mongodb.net/?retryWrites=true&w=majority';

const port = 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((error) => console.log(error.message));

app.get('/', (req, res) => {
  res.send('Hello to Memories API');
});
