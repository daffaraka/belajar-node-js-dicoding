/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const Hapi = require("@hapi/hapi");
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
