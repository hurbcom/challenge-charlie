import styled from 'styled-components'

export const LoaderBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    min-height: ${(props) => (props.fullHeight ? '100vh' : '60vh')};
`

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    animation: spin 1s linear infinite;
    -webkit-animation: spin 1s linear infinite;

    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`
