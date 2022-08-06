This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Dev-Temperatura

https://dev-temperatura.vercel.app/

Dev-Temperatura é uma aplicação front-end contruída em [Next.js](https://nextjs.org/) com responsividade para `desktop` e `mobile`.

A Aplicação consiste em consultar a previsão do tempo utilizando a API [OpenWheather](https://api.openweathermap.org).

Ao iniciar a aplicação, por padrão o local pesquisado será o `Brasil`, ao dev-temperatura ter permissão para acessar o local, ele vai usar as coordenadas fornecidas pelo navegador para acessar pela API [OpenCageData](https://api.opencagedata.com) informar a previsão do tempo de onde o usuário está localizado.

A aplicação tem algumas opções de acessibilidade:
- Idiomas: `Português`e `Inglês`
- Unidades de Medida: `Métrico` (Temperatura Celsius e Velocidade Km/h) e `Imperial` (Temperatura Fahrenheit e Velocidade Mph)

## Organização do Projeto

- Design System: `Atomic-Design`

## Tecnologias Utilizadas

- NextJs
- HTML
- SASS
- TypeScript

## Bibliotecas Utilizadas

- Axios `Cliente HTTP`
- i18next `Internacionalização`

## Implantação em Produção

- Front-end web: [Vercel](https://dev-temperatura.vercel.app/)

## Como Executar o Projeto

- git clone https://github.com/PedroRomano25/dev-temperatura.git
- cd dev-temperatura
- npm i 
- npm run dev

## Autor

- Pedro Romano | [Linkedin](https://www.linkedin.com/in/pedropauloromano/)
