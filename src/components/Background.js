import React from 'react';

import { Section } from './Background.css.js';


export default function Background(props) {
    return (
        <Section
            imageUrl="https://bing.com/th?id=OHR.SyltWenningstedt_ROW3266779867_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
            role="img"
            aria-label="Description of the image"
            title="Tooltip for users not using assistive technologies">
            {props.children}
        </Section>
    );
}