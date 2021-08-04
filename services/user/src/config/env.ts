import { getEnv } from '../utils/getEnv';

const myEnv = process.env;

export const env = {
  mode: getEnv('MODE', myEnv),
  jwtSecret: getEnv('JWT_SECRET', myEnv),
  internalApiKey: getEnv('INTERNAL_API_KEY', myEnv)
  // db: {
  //   client: getEnv('DB_CLIENT', myEnv),
  //   name: getEnv('DB_NAME', myEnv),
  //   user: getEnv('DB_USER', myEnv),
  //   password: getEnv('DB_PASSWORD', myEnv),
  //   host: getEnv('DB_HOST', myEnv),
  //   port: getEnv('DB_PORT', myEnv)
  // },
  // token: {
  //   secret: getEnv('JWT_SECRET', myEnv)
  // },
  // aws: {
  //   secretKey: getEnv('AWS_SECRET_KEY', myEnv),
  //   accessKey: getEnv('AWS_ACCESS_KEY', myEnv),
  //   bucketName: getEnv('AWS_BUCKET_NAME', myEnv),
  //   bucketRegion: getEnv('AWS_BUCKET_REGION', myEnv)
  // },
  // sendgrid: {
  //   apiKey: getEnv('SENDGRID_API_KEY', myEnv)
  // },
  // frontend: {
  //   url: getEnv('FRONTEND_URL', myEnv)
  // }
}