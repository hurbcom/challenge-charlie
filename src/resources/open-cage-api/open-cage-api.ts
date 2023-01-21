import axios from "axios";

const linguage = "pt";

/**
 * Requisição para a API Open Cage API
 * @param coordinates - coordenadas
 * @returns - requisição
 */
export default function getOpenCageAPI(coordinates: string) {
    return axios.get(
        `${process.env.OPENCAGE_API}?key=${process.env.OPENCAGE_KEY}&q=${coordinates}&language=${linguage}`
    );
}
