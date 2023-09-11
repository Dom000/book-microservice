import 'reflect-metadata';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN, CREDENTIALS, METHODS } from '../config';
import { Routes } from '../interface/routes.interface';
import { ErrorMiddleware } from '../../shared/middleware/error.middleware';

export class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 5000;

        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.info(`🚀 Api running on port ${this.port}`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS, methods: METHODS }));
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.disable
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/api/v1', route.router);
        });
    }

    private initializeErrorHandling() {
        this.app.use(ErrorMiddleware);
    }
}
