import { app } from "./app";
import { Login } from "./Controller/Login";
import { SignUp } from "./Controller/SignUp";

const Sign = new SignUp();
const Logar = new Login();

app.post('/signup', Sign.signup);
app.post('/login', Logar.login);