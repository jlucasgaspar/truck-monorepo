# How to create a new service:
1. In `packages/service-envs`, add the new service in <enum ServicesNames /> and then in the <const Service />
2. In `packages/services-types`, copy and paste the base.ts with the new service name. (Tip -> run in terminal `cp -r base/ serviceName/`)
3. In `services` folder, copy and paste `base/` folder with the new service name. (Tip -> run in terminal `cp -r base/ serviceName/`)
4. In your new `services/utils/serviceInfo.ts` change the variable Service.base to `Service.serviceName`
5. Change your new package.json "name" to `monorepo-boilerplate-serviceName`
6. run `npm install` in your new service folder and run `npm start`