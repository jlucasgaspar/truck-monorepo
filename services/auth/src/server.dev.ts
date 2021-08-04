import { serviceName, servicePort } from './utils/serviceInfo';
import { initApp } from './app';

const app = initApp();

app.listen(servicePort, () => {
  console.log(`Listening service ${serviceName.toUpperCase()} on http://localhost:${servicePort}`);
});