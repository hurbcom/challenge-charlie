import styled from "styled-components";

const MainContainer = styled.div<{ $backgroundUrl?: string }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) =>
    props.$backgroundUrl ? props.$backgroundUrl : ""});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
  @media (max-width: 480px) {
    width: 98%;
    padding: 0px 1%;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  width: 25%;
  min-width: 480px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    min-width: 0px;
  }
`;

export { Container, MainContainer };
