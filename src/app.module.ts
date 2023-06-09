import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { HorariosModule } from './horarios/horarios.module';
import { CanchasModule } from './canchas/canchas.module';
import { GptModule } from './gpt/gpt.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username:'root',
      password: '',
      database: 'pichangas',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuariosModule,
    CanchasModule,
    HorariosModule,
    GptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
