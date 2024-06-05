import { createContext, useState, useContext, useEffect } from 'react';
import { bingRequests } from '../services/https/bingRequests';

const BackgroundImageContext = createContext();

const defaultImageState = {
    url: '',
    alt: '',
    loading: true,
    error: null
};

export const BackgroundImageProvider = ({ children }) => {
    const [image, setImage] = useState(defaultImageState);

    const onSuccess = data => {
        setImage({
            url: data.url,
            alt: data.copyright,
            loading: false,
            error: null
        });
    };

    const onError = error => {
        setImage({
            ...defaultImageState,
            loading: false,
            error: error.message
        });
    };

    useEffect(() => {
        bingRequests()
            .then(onSuccess)
            .catch(onError);
    }, []);

    return (
        <BackgroundImageContext.Provider value={image}>
            {children}
        </BackgroundImageContext.Provider>
    );
};

export const useBackgroundImage = () => {
    const context = useContext(BackgroundImageContext);
    if (context === undefined) {
        throw new Error('useBackgroundImage must be used within a BackgroundImageProvider');
    }
    return context;
};

export default BackgroundImageContext;