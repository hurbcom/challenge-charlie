# Challenge Charlie

<img src="screenshot.png" alt="screenshot of project">

### Future work

- [ ] Accessibility improvements
- [ ] Internationalization Implementation
- [ ] Component documentation implementation
- [ ] Configure Docker to run in production and development mode
- [ ] Automatically update date and time without needing to refresh
- [ ] Input improvements

## 💻 Requirements

Before you start, make sure you have the necessary settings

- Do you have the lts version of `Node.js`
- If you want to run in the container, install [docker](https://www.docker.com/). For more information, access the official documentation.
- Clone the project
```
git clone https://github.com/marcellevargas/challenge-charlie
```
## 🚀 Running the project locally

Follow the steps below:

```
cd ./challenge-charlie
```

```
cd ./weather-server
```

```
npm i && npm run start:server
```

```
cd ../weather-app
```
```
npm i && npm start
```
## 🐋 Running on docker

Follow the steps below:
```
cd ./challenge-charlie
```

```
docker-compose up
```

## 🌐 Open in browser
In the browser type http://localhost:3000/