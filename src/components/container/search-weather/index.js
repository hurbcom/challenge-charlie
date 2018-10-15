import React, { Component } from 'react';
import { func, string } from 'prop-types';
import Background from 'components/ui/background';
import {
  bindActionCreators,
  connect,
  getBingImage,
  getUnsplashImage,
} from 'store/actions';


class SearchWeather extends Component {
  static propTypes = {
    backgroundImage: string.isRequired,
    getBingImageAction: func.isRequired,
    getUnsplashImageAction: func.isRequired,
  };

  componentDidMount() {
    const { getBingImageAction, getUnsplashImageAction } = this.props;
    getBingImageAction()
      .catch(() => getUnsplashImageAction());
  }

  render() {
    const { backgroundImage } = this.props;
    return (
      <Background image={backgroundImage}>
        <p>Olá, estou no SearchWeather</p>
      </Background>
    );
  }
}


const mapStateToProps = ({ backgroundImage }) => ({ backgroundImage });

const mapDispatchToProps = dispatch => bindActionCreators({
  getBingImageAction: getBingImage,
  getUnsplashImageAction: getUnsplashImage,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather);
