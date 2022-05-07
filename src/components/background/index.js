import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import imageService from '../../services/imageService';
import { update as updateNotification } from '../../store/slices/notificationSlice';

function Background() {
    const [backgroundUrl, setBackgroundUrl] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        imageService.fetchBackgroundImageUrl()
            .then((url) => setBackgroundUrl(url))
            .catch(() => dispatch(updateNotification('Failed to load background image.')));
    }, []);

    return (
        <div
          id="background"
          style={{ backgroundImage: `url("${backgroundUrl}")` }}
        />
    );
}
export default Background;
