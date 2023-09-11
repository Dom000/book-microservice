import { App } from './app';
import { ValidateEnv } from '../../shared/utils/validateEnv';
import { UserRoute } from './modules/Userservice/Routes';

ValidateEnv();

const app = new App([new UserRoute]);
app.listen();
