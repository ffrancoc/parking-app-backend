import 'dotenv/config';
import express from 'express';
import { ServerController } from './controllers/ServerController';
import { UserController } from './controllers/UserController';


const app = express();
const port = process.env.APP_PORT;

app.get('/users', UserController.users);
app.get('/users/:id', UserController.user);
app.get('*', ServerController.NotFound);

app.listen(port, () => {
    console.log(`El servidor se ha iniciado en http://localhost:${port}`);
});