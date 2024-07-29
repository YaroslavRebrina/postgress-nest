import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as colors from 'colors';

const startServer = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 5004, () =>
    console.log(`Server: ${colors.green('ON')} | PORT: ${process.env.PORT}`),
  );
};
startServer();
