import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as colors from 'colors';

const startServer = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(5004, () =>
    console.log(colors.bgGreen('server started!!!')),
  );
};
startServer();
