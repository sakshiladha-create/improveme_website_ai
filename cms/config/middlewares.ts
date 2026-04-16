import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => {
  const allowedOrigins = env
    .array('CORS_ORIGIN', ['http://localhost:3000'])
    .map((origin) => origin?.trim())
    .filter(Boolean);

  return [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
      name: 'strapi::cors',
      config: {
        origin: allowedOrigins,
        credentials: true,
        headers: '*',
      },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};

export default config;
