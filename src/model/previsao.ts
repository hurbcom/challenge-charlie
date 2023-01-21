/**
 * Model de previsão
 */
type Previsao = {
    umidade: number;
    pressao: number;
    temperaturaK: number;
    temperaturaF: number;
    temperaturaC: number;
    vento: number;
    descricao: string;
    icon: string;
};

export default Previsao;
