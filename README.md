Para rodar a aplicação, basta dar um build no docker e rodar

A folha de estilos foi desenvolvida em SASS, entretanto, o código SASS está disponível apenas
para conferência e possíveis alterações, uma vez que já há uma versão compilada disponível por padrão.

Foi implementado um JSON de municípios do Brasil, com toda a base de dados de municípios
do IBGE. Com esta base, é possível economizar recursos de busca pela API externa, que é
limitada.

Por limitação de tempo, não consegui implementar a API da forma como gostaria. Fiz apenas
uma consulta ao JSON de municípios, quando o ideal seria validar por meio de token.

Foi alterada a URL da API de previsão do tempo, para contemplar, em uma chamada previsão
para os três dias.

Segue a URL: https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely&appid=7ba73e0eb8efe773ed08bfd0627f07b8&lang=pt_br&lat=[lat]&lon=[lon]

Foi implementada uma busca por cidades, caso mais de uma coincida com a palavra digitada
na caixa de texto. Dessa forma, há garantia de que, se o usuário digitar apenas parte do
nome, ele lista todas as cidades com aquela parte para que ele escolha a que desejar.

A busca é case-sensitive e torna transparente o uso de acentos, de forma que a consulta seja mais amigável
ao usuário.

Para alterar a cidade, basta digitar o nome (ou parte dele) no campo de busca, pressionar TAB ou ENTER ou clicar no botão "Buscar Cidade".

Os testes não contemplaram os navegadores Internet Explorer. A sugestão é implementar o Babel para contemplá-los
também.

Foram realizados testes com diversas cidades do país, digitando seus nomes ou selecionando-as.

A imagem do Bing foi recuperada por meio de curl (get_file_contents) em PHP, pois as requisições via JavaScript estava retornando erro de cross-origin, enviado pelos servidores da Microsoft.

Nenhum teste foi realizado com temperaturas acima de 35°C, embora várias tentativas tenham sido feitas com cidades quentes como Cuiabá e Manaus.





