import app from "./src/app.js";
import { createAdminUser } from "./src/libs/createUser.js";
import "./src/database.js";

async function main() {
  await createAdminUser();
  app.listen(app.get("port"));

  console.log("Server on port", app.get("port"));
  console.log("Environment:", process.env.NODE_ENV);
}

main();
