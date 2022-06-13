import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { resMsg } from 'src/constants/enums';
import { API_NAME, OWNER } from 'src/config/settings/setting.config';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle(API_NAME)
    .setDescription(`${resMsg.API_DESCRIPTION} - ${resMsg.API_DETAIL} \n\n Author: ${OWNER}`)
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/test', app, document);
};
