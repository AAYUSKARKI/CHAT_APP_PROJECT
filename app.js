import express, { urlencoded } from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import path from "path"
const app = express();

const __dirname = path.resolve();
//setup react

app.use(express.static(path.join(__dirname, 'client/chatApp/dist')));

// Define routes
// Example route for serving the React application
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/chatApp/dist', 'index.html'));
});
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(cors({
    origin: "*",
    credentials: true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users",userRouter)


// app.get('/register', (req, res) => {
//     res.render('register');
// });
export { app }
