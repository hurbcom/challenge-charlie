# Challenge-Charlie




Challenge-Charlie é uma aplicação front-end contruída em [Next.js](https://nextjs.org/) com responsividade para `desktop` e `mobile`.

# Imagens da Aplicação
 Mobile | Desktop
|----------|----------|
| ![mobile](https://user-images.githubusercontent.com/59035461/183235294-82d94112-1d83-4432-a4cb-f3a7a2af324a.png) | ![desktop](https://user-images.githubusercontent.com/59035461/183235317-91bc469f-800e-49e7-87c4-5c70601880e7.png) | 

A Aplicação consiste em consultar a previsão do tempo utilizando a API [OpenWheather](https://api.openweathermap.org).

Ao iniciar a aplicação, por padrão o local pesquisado será o `Brasil`, ao Challenge-Charlie ter permissão para acessar o local, ele vai usar as coordenadas fornecidas pelo navegador para localizar pela API [OpenCageData](https://api.opencagedata.com) a localização vigente e fornecer a previsão do tempo atual com base em seu local. Além disso, é possível pesquisar qualquer local digitado no campo de texto.

Também é gerado uma imagem para o background da aplicação com dado fornecido pela API do [Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR).

# As informações apresentadas na tela:

## Hoje
- Temperatura atual do dia
- Temperatura mínima | `Melhoria`
- Temperatura máxima | `Melhoria`

## Amanhã
- Temperatura média ( A média de todas as temperaturas recebidas pela API referente ao dia )
- Temperatura mínima do dia ( O valor mínimo localizado nos dados recebidos pela API referente ao dia ) | `Melhoria`
- Temperatura máxima do dia ( O valor máximo localizado nos dados recebidos pela API referente ao dia ) | `Melhoria`

## Depois de Amanhã
- Temperatura média ( A média de todas as temperaturas recebidas pela API referente ao dia )
- Temperatura mínima do dia ( O valor mínimo localizado nos dados recebidos pela API referente ao dia ) | `Melhoria`
- Temperatura máxima do dia ( O valor máximo localizado nos dados recebidos pela API referente ao dia ) | `Melhoria`


## Acessibilidade:
- Idiomas: `Português`e `Inglês` | Apenas clicar na bandeira do país
- Unidades de Medida: `Métrico` (Temperatura Celsius e Velocidade Km/h) e `Imperial` (Temperatura Fahrenheit e Velocidade Mph) | Apenas clicar nas temperaturas

## Organização do Projeto

- Design System: `Atomic-Design`

## Tecnologias Utilizadas

- NextJs
- HTML
- SASS
- TypeScript
- Docker

## Bibliotecas Utilizadas

- Axios `Cliente HTTP`
- i18next `Internacionalização`

## Como Executar o Projeto local

Criar um arquivo `.env.local` na pasta challenge-charlie com os dados abaixo:

*Caso necessário, crie uma nova conta para ter acesso a Key das APIs  [OpenCageData](https://api.opencagedata.com) e [OpenWheather](https://api.openweathermap.org)*

```
NEXT_PUBLIC_OPEN_CAGE_DATA_KEY=c63386b4f77e46de817bdf94f552cddf
NEXT_PUBLIC_OPEN_WHEATHER_MAP_KEY=772920597e4ec8f00de8d376dfb3f094
```



```
git clone https://github.com/PedroRomano25/challenge-charlie.git
cd dev-temperatura
npm i 
npm run dev
```

## Como Executar o Projeto Docker | `Necessário ter o docker instalado`

`Stage - Desenvolvimento`

```
git clone https://github.com/PedroRomano25/challenge-charlie.git
cd dev-temperatura
docker-compose -f docker-compose.dev.yml up
```

`Stage - Produção`

```
git clone https://github.com/PedroRomano25/challenge-charlie.git
cd dev-temperatura
docker-compose -f docker-compose.prod.yml up
```

# Desafios
- `Docker`:  Primeira aplicação que eu faço a implementação do Docker
- `Cors`: A API da Bing estava apresentando erro de cors, precisei pesquisar uma forma de evitar, utilizei a api [`allOrigins`](http://api.allorigins.win) 
  
  ```  
  const url = `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
  const cors = 'http://api.allorigins.win/get?url='
  const urlRequest = `${cors}${encodeURIComponent(url)}`
  ```
 
 # Imagens da Aplicação
 
 ## Cores
 
  Abaixo de 15°C/59°F | Acima ou igual á  15°C/59°F e Abaixo ou igual á 35°C/95°F | Acima de 35°C/95°F
|----------|----------|----------|
| ![blue](https://user-images.githubusercontent.com/59035461/183236365-38db1709-2670-4a12-98fb-0efa43f96d53.png) | ![yellow](https://user-images.githubusercontent.com/59035461/183236367-a6b189f8-4c58-4fc8-8168-3d6c1161bd98.png) | ![red](https://user-images.githubusercontent.com/59035461/183236377-ab8b4e9b-e9e5-424a-ad2e-1afaca3652e5.png) |

 ## Unidades de Medida

  Métrico | Imperial |
|----------|----------|
| ![cel](https://user-images.githubusercontent.com/59035461/183236452-dea88cfa-861d-4133-8df2-b6f00e191954.png) | ![fah](https://user-images.githubusercontent.com/59035461/183236447-35d88bca-8b42-4369-b3c4-cb436d971f68.png) |

## Linguagem

  Português | Inglês |
|----------|----------|
| ![pt](https://user-images.githubusercontent.com/59035461/183236520-bc2c9189-1d10-4ed5-bb08-f9c36ffdceb9.png) | ![en](https://user-images.githubusercontent.com/59035461/183236528-d121bd59-f04f-4a2e-b9a7-7b0d5555bb6e.png) |

## Demais

  Carregamento | Resultado Não Encontrado |
|----------|----------|
| ![load](https://user-images.githubusercontent.com/59035461/183236578-023ee27a-1709-4064-b91c-916a2dd94705.png) | ![resultadoNaoEncontrado PT](https://user-images.githubusercontent.com/59035461/183236590-2843535b-a552-4ad5-867a-6cbbd1adb81b.png) |
 
 



## Autor

Pedro Romano | [Linkedin](https://www.linkedin.com/in/pedropauloromano/)
