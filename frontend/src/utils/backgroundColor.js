export const backgroundColor = (temp) => {
    if(temp < 15) {
        return 'blue'
    } else if(temp > 35) {
        return 'red'
    } else return 'rgba(250,204,5, 0.6)'
}
//Para temperaturas abaixo de 15ºC deve ser usado tons de azul, 
//para temperaturas acima de 35ºC deve ser usado tons de vermelho 
//e use tons de amarelo para as demais temperaturas.
// Quando não houver nenhuma localidade escolhida deve ser usado tons de cinza como base para o degradê. 