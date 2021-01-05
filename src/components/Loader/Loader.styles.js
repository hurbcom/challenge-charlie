import styled from 'styled-components';

export const LoaderStyle = styled.div`
    margin: 20px 0;
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid black;
    width: 30px;
    height: 30px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`;