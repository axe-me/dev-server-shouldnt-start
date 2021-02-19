
const express = require('express');

export default function vitePluginExpress() {
  let resolvedConfig;
  return {
    name: 'vite-plugin-express',
    config: () => ({
      server: {
          middlewareMode: true,
      },
    }),
    configResolved(config) {
      resolvedConfig = config;
    },
    configureServer: (server) => {
      return async () => {
        const app = express();
        app.use(server.middlewares);
        app.use('/ping', (_, res) => res.end('pong'))

        await app.listen(3000)
      };
    }
  };
}
