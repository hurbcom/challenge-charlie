'use strict';

const fs = require('fs');
const path = require('path');
const paths = require('./paths');

delete require.cache[require.resolve('./paths')];

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
    throw new Error(
        'The NODE_ENV environment variable is required but was not specified.'
    );
}

/**
 * Link for reference: https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
 */

var dotenvFiles = [
    `${paths.dotenv}.${NODE_ENV}.local`,
    `${paths.dotenv}.${NODE_ENV}`,
    NODE_ENV !== 'test' && `${paths.dotenv}.local`,
    paths.dotenv,
].filter(Boolean);

/**
 * Link for reference: https://github.com/motdotla/dotenv
 * 
 * Load environment variable from .env* files. 
 * If this file is missing. dotenv will never modify any environment variables
 * that have already been set.
 */

dotenvFiles.forEach(dotenvFile => {
    if (fs.existsSync(dotenvFile)) {
        require('dotenv').config({
            path: dotenvFile,
        });
    }
});

/**
 * We support resolving modules according to `NODE_PATH`
 * This lets you use absolute paths in imports inside large monorepos:
 * Link for reference: https://github.com/facebookincubator/create-react-app/issues/253.
 * 
 * It works similar to `NODE_PATH`in Node itself:
 * Link for reference: https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders
 * 
 * Note that unlike in Node, only *relative* paths from `NOD_PATH`are honored.
 * Otherwise, we risk importing Node.js core modules into an app instead of Webpack shims.
 * Link for reference: https://github.com/facebookincubator/create-react-app/issues/1023#issuecomment-265344421
 * 
 * We also resolve them to make sure all tools using them work consistently.
 */


const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path.delimiter)
    .filter(folder => folder && !path.isAbsolute(folder))
    .map(folder => path.resolve(appDirectory, folder))
    .join(path.delimiter);


/**
 * Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
 * injected into the application via DefinePlugin in Webpack configuration.
 */


const REACT_APP = /^REACT_APP_/i;

function getUserEnvironment(publicUrl) {
    const raw = Object.keys(process.env)
        .filter(key => REACT_APP.test(key))
        .reduce(
            (env, key) => {
                env[key] = process.env[key];
                return env;
            },
            {
                /**
                 * Useful for determining whether we're running in production mode.
                 * It swithes React into the correct mode.
                 */

                NODE_ENV: process.env.NODE_ENV || 'development',
                PUBLIC_URL: publicUrl,
            }
        );
    // Stringify all values so we can feed into Webpack DefinePlugin.
    const stringified = {
        'process.env': Object.keys(raw).reduce((env, key) => {
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {}),
    };

    return { raw, stringified };
}

module.exports = getUserEnvironment;
