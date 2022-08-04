import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import Container from "../../atoms/Container";
import Content from "../../organisms/Content";
import InternalHeader from "../../organisms/InternalHeader";

const Home = componentFactory<IHomeProps>("Home", (props, ref) => {
  const { dataCurrent,dataForecast, text, value, onClick, variant , onChange} = props;
  return (
    <Container ref={ref}>
      <InternalHeader 
        value={value} 
        onChange={onChange}
    />
      <Content 
        text={text}
        variant={variant}
        onClick={onClick} 
        dataCurrent={dataCurrent} 
        dataForecast={dataForecast}
      />
    </Container>
  );
});

export default Home;
