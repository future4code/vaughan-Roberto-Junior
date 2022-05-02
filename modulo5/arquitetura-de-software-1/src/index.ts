import { app } from "./app";
import { SignUp } from "./Controller/SignUp";

const Logar = new SignUp()

app.post('/signup', Logar.signup)