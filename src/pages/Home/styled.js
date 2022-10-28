import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://www.bing.com${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ContainerDefault = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://i.pinimg.com/originals/92/31/3b/92313bc1e9f73846662edc5681ad4408.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;
