import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}
//Mala practica, implementar bcrypt
    async signIn(emailUser: string, password: string):Promise<any>{
        const user = await this.userService.findOneByEmail(emailUser);
        if(user?.passwordHashUser !== password){
            throw new UnauthorizedException('Contraseña Incorrecta');
        }
        const {passwordHashUser, ...result } = user;
    }
}