import React, { useEffect, useState } from 'react';
import './styles.scss';
import imageService from '../../services/imageService';

function Background() {
    const [backgroundUrl, setBackgroundUrl] = useState('');

    useEffect(() => {
        (async () => setBackgroundUrl(await imageService.fetchBackgroundImageUrl()))();
    }, []);

    return (
        <div
          id="background"
          style={{ backgroundImage: `url("${backgroundUrl}")` }}
        />
    );
}
export default Background;
