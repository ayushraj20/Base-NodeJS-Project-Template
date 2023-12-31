const express = require("express");

const { ServerConfig, Logger } = require("./config");

const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server at port ${ServerConfig.PORT}`);
  Logger.info("Started the Server", {});
});
