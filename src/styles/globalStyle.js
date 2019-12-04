import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html,
    body,
    #root {
        height: 100%;
        background-image: url('https://www.bing.com/th?id=OHR.PuffinSharing_ROW2232970320_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp');
        background-repeat: no-repeat;
        background-color: #666;
        background-size: cover;
        background-position: center;
    }
`;
