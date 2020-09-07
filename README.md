# <img src="ca.png" alt="HU" width="64" /> Desafio Charlie

> Construa um microsite responsivo para mostrar a previsão do tempo nas localidades informadas na caixa de texto branca (na imagem de [exemplo](./exemplo.jpg) é o local aonde aparece "Rio de Janeiro, Rio de Janeiro"). Essa caixa de texto deve ser um `input`, aonde o usuário pode trocar a localidade. Com a mudança da localidade, devem ser carregadas as informações de previsão do tempo referentes à nova localidade.

## Improvements
### 1) Layout
The goal here is to make the bing's background image be like a figurant instead of an actor, so my resolution to this problem was to put an black overlay with some opacity, highlighting the weather cards. 

### 2) Switch temperature unit
I dont think the user will be able to guess that if he clicks on the temperature unit the temperatures will be switched to another unit, so to improve de experience by the user i decided to use button groups instead, leading to a more intuitive interface.

### 3) Gradient and transparent background
As said before, I dont want the background image as the actor, but the cards with the temperature, so I exchange the gradient with a slim vertical bar that colirize depending on the weather, keeping the background white with dark letters, improving readability without mixing with the background.

### 4) Fontawesome icons
I dopted Fontawesome icons in exchange for manutenability and for the plug and play convenient, as the package is maintened in a package manager, it is used in the forecast summary for better status reading.

### 5) Material UI
As I'm a Google material design appreciator, and my skills with UX are not that good, I decided to use this library.

## Get started
### Clone this repo
`git clone`

### Have fun
`docker-compose up -d --build`