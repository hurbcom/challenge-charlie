/**
 * Model da API bing
 */
type ImageBingModel = {
    images: ImageModel[];
};

/**
 * Model de image
 */
type ImageModel = {
    url: string;
};

export default ImageBingModel;
