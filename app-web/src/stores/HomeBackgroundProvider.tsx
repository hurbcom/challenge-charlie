import React, { createContext, useContext, useEffect, useState } from 'react';
import backgroundApi from '../api/backgroundApi';
import { IChildrenProps } from '../interfaces/childrenProps.interface';
import { IBackgroundImageContextType } from '../interfaces/context.interface';


const BackgroundImageContext = createContext<IBackgroundImageContextType | undefined>(undefined);

// Does not allow execution if the context does not encompass the component.
export const useBackgroundImageContext = () => {
    const context = useContext(BackgroundImageContext);
    if (!context) {
        throw new Error('useBackgroundImageContext is required');
    }
    return context;
};

// Context responsible for storing the background from Bing.
export const BackgroundImageProvider: React.FC<IChildrenProps> = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        fetchBackgroundImage();
    }, []);

    const fetchBackgroundImage = () => {
        backgroundApi.getBackgroundImage()
            .then((data: any) => {
                if (!data || !data.success) {
                    console.error('No image data received from server');
                    return;
                }

                const imageUrl = data.data.imageUrl;
                setBackgroundImage(imageUrl);
            })
            .catch((error: Error) => {
                console.error('Error getting background image:', error);
            });
    };

    // Makes explicit the variables usable from the context.
    const contextValue: IBackgroundImageContextType = {
        backgroundImage,
        fetchBackgroundImage
    };

    return (
        <BackgroundImageContext.Provider value={contextValue}>
            {children}
        </BackgroundImageContext.Provider>
    );
};
