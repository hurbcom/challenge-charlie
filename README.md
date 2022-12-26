## <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Challenge Bravo and Charlie
> 
> Application dedicated to travallers who wants to know preciselly the weather conditions and currency quotation of a destination

### Architecture overview
![Simple architecture overview](/docs/simple-architecture-overview.png)

### NX build system
> Since our solution is well seprated into libs, we can take the advantage of NX graph
#### Weather Forecast MFE example
![Simple architecture overview](/docs/example-weather-forecast.png)

### Module federation
> with dynamic module loading

As our applications grow and we have to add more features to our application, the microfrontend approach can help allowing us to have multiple teams working at the same codebase but with a delimited context of actuation.

### Custom events
> promote communication between the microfrontend apps

Since our frontend application are decoupled and they dont know each other, we need some way to allow them to communicate, the Custom Events (synthetic events) have a great fit for it.

### Express
> for the microservices

The trade here was simple, express is a great tool for rest apis and thats way I choosed it.

### Redis
>  as a cache management

To avoid subsequent unncessary apis calls to opencage, bing, openweather and coinbase, redis comes in hand to help delivering cached data easly and fast.

### Clean Architecture
> to provide the code architecture

![Code architecture overview](/docs/code-architecture-overview.png)

### Design Patterns and SOLID
> keeping the low coupling and high cohesion
- Complex objects are created through the factory pattern
- Objects created by the factory are singletons by default
- Backend repositories are using decorator pattern to add the caching behaviour without change the actual code
- Dependency injections are being made trough interface contracts to avoid unnecessary coupling
- Classes have just one method keeping their responsabilities unique

#### Use of decorator, factory, dependency injection and singleton all in one place
![Patterns example](/docs/patterns-example.png)

### fetch api
>  for http communication

Just keeping things simple!

### Tailwind CSS
> It's fast, flexible, and reliable — with zero-runtime.

Tailwind is a great choince here, it allow us to delivery fast applications and it make use of the PostCss that purge all unused classes from the final bundle making it smaller than the others.

## Running
> Simple steps to get started

### Prerequisite
- docker
- docker-compose
- node
- npm
- git

#### 1) Clone
run `git clone https://github.com/vaugustoribeiro/challenge-charlie.git`

#### 2) Run
run `docker-compose up -d --build`

#### 3) Open
`http://localhost:4200`

### Available applications
> Running in dev mode with HMR activated but bugged, needs to refresh browser after each code change

| service                         | address               |
|---------------------------------|-----------------------|
| shell                           | http://localhost:4200 |
| weather forecast microfrontend  | http://localhost:4201 |
| currency exchange microfrontend | http://localhost:4202 |
| weather forecast bff            | http://localhost:3331 |
| currency exchange bff           | http://localhost:3332 |
| utility bff                     | http://localhost:3333 |

![docker overview](/docs/docker.png)
