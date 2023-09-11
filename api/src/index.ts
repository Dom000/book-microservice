import { App } from './app';
import { ValidateEnv } from '../../shared/utils/validateEnv';
import { AuthRoute } from './modules/Auth/Routes';
import { UserRoute } from './modules/User/Routes';
import { BookRoute } from './modules/Book/Routes';

ValidateEnv();

const app = new App([new UserRoute, new AuthRoute, new BookRoute]);
app.listen();
