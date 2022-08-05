import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import Container from "../../atoms/Container";
import LoadContainer from "../../molecules/LoadContainer";
import Content from "../../organisms/Content";
import InternalHeader from "../../organisms/InternalHeader";

const Home = componentFactory<IHomeProps>("Home", (props, ref) => {
  const {
    dataCurrent,
    dataForecast,
    text,
    value,
    onClick,
    variant,
    onChange,
    onChangeLanguage,
    isLoading
  } = props;  
  return (
    <Container ref={ref}>
      <InternalHeader
        value={value}
        onChange={onChange}
        onChangeLanguage={onChangeLanguage}
      />     
      {isLoading ? 
        <LoadContainer/>
        :
        <Content
          text={text}
          variant={variant}
          onClick={onClick}
          dataCurrent={dataCurrent}
          dataForecast={dataForecast}
        />    
      } 
    </Container>
  );
});

export default Home;
