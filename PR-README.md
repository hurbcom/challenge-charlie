# Vagners Hurb Challenge

## Description

This microsite was build in React from scratch.

### Requirements

You don't need Docker in order to run this app in you local development, but you will need Git, NodeJs, I strongly recomment v16 LTS and NPM installed.
You must need to set some environment vars and generate a self-signed certificate in order to run this project.

The following environemtn must be available in a `.env` file or any other methods avalable.

```
REACT_APP_OPENCAGE_BASE_URL=https://api.opencagedata.com/geocode/v1/json?key={{API_KEY}}
REACT_APP_WEATHER_API_BASE_URL=https://api.openweathermap.org/data/3.0/onecall?APPID={{APP_ID}}
REACT_APP_BING_WALLPAPPER_API_BASE_URL=https://www.bing.com

```

> do not forget to replace the `API_KEY` or `APP_ID` with your key values to get access to external apis.


### Install and Run locally without docker

To run this project, just fetch my main branch, install all dependencies, set some env vars and run with yarn or npm. If you use NVM, you can run `nvm use` before install the dependencies to match Node version used in this development.

To install dependencies I strongly recommend to use `yarn`;

`yarn` or `yarn install`

After install all dependencies and have the environment vars done, you can run the application.

`yarn start``

You can run the tests for this application by running the command `yarn test`


### Run as docker container

You will need SSL certificates to NGINX run over https.

To generate a new certificate you can use `openssl` ;

Run the followgin command on projects root folder and certificates will be created and placed at `./config` folder;

```
openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=Vagners Hurb Challenge./CN=hurb.challenge"  -newkey rsa:2048 -keyout ./config/nginx-selfsigned.key -out ./config/nginx-selfsigned.crt;
```

> About openssl options
>
> -   req — to specify we want to use -x509
> -   -x509 — to specify we want to create a self-signed certificate instead of generating a certificate signing request.
> -   -nodes — makes it so that we skip the option to secure our certificate with a passphrase, so that nginx can read it.
> -   -days 365 — specifies how long the certificate would be valid for, which is 365 days.
> -   -subj “/C=CA/ST=QC/O=Company, Inc./CN=mydomain.com" — this allows us to specify subject without filling in prompts. /C for country, /ST for state, /O for organization, and /CN for common name.
> -   -newrsa rsa:2048 — specifies that we want to generate both a new certificate and a new key with an RSA key of 2048 bits.
>     -newrsa rsa:2048 — specifies that we want to generate both a new certificate and a new key with an RSA key of 2048 bits.
> -   -keyout /path/to/yourfile.key — specifies the location of the output .key file.
> -   -out /path/to/yourfile.crt — specifies the location of the output .crt file.

Assuming you already have Docker engine installed and running, please run the build command from the root 

For build:

```
docker build . -t IMAGE-NAME
```

You can relpace IMAGE-NAME with any other name that make sense to you.

For run the container.


```
docker run -it -d -p 80:80 -p 443:443 --name CONTAINER-NAME IMAGE-NAME
```

Don't forget to replace CONTAINER-NAME with any other name for your container istance and use the same name defined on buid command on IMAGE-NAME to run the docker images just created.

After that your application will be runnint at `https://localhost/`.


You can use `https//hurb.challenge` as informed at certificate creation just setting the host file to point the aaddress to your local address.


```
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
# ADD the following line ⤵
127.0.0.1       hurb.challenge
```

### Happy Code Review

![and relax](https://media0.giphy.com/media/J4VVMzUcPQE0IbFE4z/giphy.gif?cid=ecf05e47jfi4ousnd367e7ftyvetwlxd6yus974b2kfcvra7&rid=giphy.gif&ct=g)