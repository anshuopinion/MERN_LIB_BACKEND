import express from "express";
import cors from "cors";
import booksRoute from './routes/booksRoutes.js'

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 9000;




app.use('/api/books',booksRoute)



app.listen(port, () => {
  `Listening On Port ${port}`;
});
