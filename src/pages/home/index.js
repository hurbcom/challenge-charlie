import React, { Component } from 'react';
import axios from 'axios';

//Style Import
import { Wrapper, Container } from './style';

//Libs And Environment Import
import { requestProxy, baseBingUrl } from './../../environment/env';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      todayImage: '',
    }
  }

  //To get today image from Bing
  retrieveBingTodayImage = () => {
    axios.get(`${requestProxy}/${baseBingUrl}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`)
      .then(res => {
        const urlImage = `${baseBingUrl}/${res.data.images[0].url}`;
        this.setState({ todayImage: urlImage });
      })
      .catch(err => console.log('Erro ao recuperar imagem:', err));
  }

  componentDidMount() {
    this.retrieveBingTodayImage();
  }

  render() {
    return(
      <Wrapper background={this.state.todayImage}>
        <Container>
          Initial Hoem page
        </Container>
      </Wrapper>
    );
  }
}

export default Home;