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
    copyrightlink: string;
};

export default ImageBingModel;
