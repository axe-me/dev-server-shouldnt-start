import vitePluginExpress from './vite-plugin-express';
/**
 * @type {import('vite').UserConfig}
 */
const config = {
  // ...
  plugins: [
    vitePluginExpress()
  ]
}

export default config;
