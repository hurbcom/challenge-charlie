import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    background: ${props => props.image ? `url(https://bing.com/${props.image})` : '#7bb6dd'};
`

export  const LoaderBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const Loading = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    animation: spin 2s linear infinite;
    -webkit-animation: spin 2s linear infinite;
    
    /* Safari */
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`