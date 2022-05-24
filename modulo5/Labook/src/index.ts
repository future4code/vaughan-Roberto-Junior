import { app } from "./controller/app"
import { PostController } from "./controller/postController";
import { UserController } from "./controller/userController"


//criar usuario
app.post('/users/signup', UserController.signup);

//login
app.post('/users/login', UserController.login);

//criar post
app.post('/posts/create', PostController.create);

//retornar posts pelo id
app.get('/posts/:id', PostController.searchById);

//solicitar amizade
app.post('/friend/:id', UserController.friend);

//desfazer amizade
app.delete('/unfriend/:id', UserController.unfriend);


