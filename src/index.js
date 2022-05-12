import express from 'express';
import routes from './routes';
import cors from "cors";


const app = express();

app.use(cors())
app.use(express.json());

app.use('/api/v1/', routes);

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({ status: statusCode, error: err.message, stack: err.stack });
  next(err);
});

app.listen(3000,()=>{
  console.log("server is runnig on port 3000")
})
