import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { env } from "process";

@Module({
    imports:[UsersModule, JwtModule.register({
        global: true,
        secret: env.JWT_SECRET,
        signOptions:{expiresIn: '600s'}
    })],
    providers:[AuthService],
    controllers:[AuthController],
    exports:[AuthService]
})
export class AuthModule {}
