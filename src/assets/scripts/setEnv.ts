const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;

function writeFileUsingFS(targetPath: any, environmentFileContent:any) {
    writeFile(targetPath, environmentFileContent, function (err:any) {
        if (err) {
            console.log(err);
        }
        if (environmentFileContent !== '') {
            console.log(`wrote variables to ${targetPath}`);
        }
    });
}

// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
    mkdirSync(envDirectory);
}

// creates the `environment.prod.ts` and `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');


const isProduction = environment === 'prod',

    targetPath = isProduction
        ? './src/environments/environment.prod.ts'
        : './src/environments/environment.ts',

    // we have access to our environment variables
    // in the process.env object thanks to dotenv
    environmentFileContent = `
export const environment = {
   production: ${isProduction},
   API_WEATHER: "${process.env.WEATHER_API_KEY}",
   API_LOCATION: "${process.env.LOCATION_API_KEY}"
};
`;

writeFileUsingFS(targetPath, environmentFileContent);
