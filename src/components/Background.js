import React from 'react';

import { Section } from './Background.css.js';
import useFecth from '../hooks';


export default function Background(props) {
    const urlBing = 'https%3A%2F%2Fwww.bing.com%2FHPImageArchive.aspx%3Fformat%3Djs%26idx%3D0%26n%3D1%26mkt%3Dpt-BR';
    const { status, data } = useFecth(`http://localhost:5000/proxy/?to=${urlBing}`);

    return (
        <Section
            imageUrl={data.images ? `https://www.bing.com${data.images[0].url}` : ''}
            role="img"
            aria-label="Description of the image"
            title="Tooltip for users not using assistive technologies"
        >
            {status !== 'fetched' ? 'Loading...' : null}
            {props.children}
        </Section>
    );
}