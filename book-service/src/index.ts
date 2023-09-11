import { App } from './app';
import { ValidateEnv } from '../../shared/utils/validateEnv';
import { BookRoute } from './modules/Bookservice/Routes';

ValidateEnv();

const app = new App([new BookRoute]);
app.listen();
