import { serviceName, servicePort } from './utils/serviceInfo';
import { app } from './app';

app.listen(servicePort, () => {
  console.log(`Listening service ${serviceName.toUpperCase()} on http://localhost:${servicePort}`);
});