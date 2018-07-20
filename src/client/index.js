import ImagemDeFundoController from "./controller/ImagemDeFundoController";
import PrevisaoDoTempoController from "./controller/PrevisaoDoTempoController";

(function() {
    const imagemDeFundoController = new ImagemDeFundoController();
    imagemDeFundoController.aplicaImagemDeFundo();

    const PrevisaoDoTempoController = new PrevisaoDoTempoController();
    PrevisaoDoTempoController.inicio();
})();