import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,private jwtService: JwtService){}

    async signIn(emailUser: string, password: string):Promise<{access_token:string}>
    {
        const user = await this.userService.findOneByEmail(emailUser);
        if(user?.passwordHashUser !== password){
            throw new UnauthorizedException('Contraseña Incorrecta');
        }
        const passwordMatch = await bcrypt.compare(password,user.passwordHashUser);
        if(!passwordMatch){
            throw new UnauthorizedException('Contraseña Incorrecta');
        }
        const payload ={
            sub:user.idUser,
            emailUser:user.emailUser
        }
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}