require("dotenv").config();

const { writeFileSync, mkdirSync } = require("fs");

const targetPath = `./src/environments/environment.ts`;

const envFileContent = `
export const environment = {
  production: '${process.env.PRODUCTION}',
  apiKey: '${process.env.API_KEY}',
  apiUrl: '${process.env.API_URL}',
};
`;

mkdirSync("./src/environments", { recursive: true });

writeFileSync(targetPath, envFileContent);
