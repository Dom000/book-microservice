import { Request, Response } from "express";
import Container from "typedi";
import { CreateUserDto } from "../Dto/auth.dto";
import AuthService from "../Service";
import { LoginDto } from "../Dto/login.dto";

export class AuthController {
  async createUser(req: Request, res: Response) {
    const authService = Container.get<AuthService>(AuthService);

    try {
      const data: CreateUserDto = req.body;
      const response = await authService.createUser(data);
      res.json(response);
    } catch (error) {}
  }
  async login(req: Request, res: Response) {
    const authService = Container.get<AuthService>(AuthService);

    try {
      const data: LoginDto = req.body;

      const response = await authService.login(data);
      res.json(response);
    } catch (error) {}
  }
}
