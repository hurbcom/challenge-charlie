import React, { Component } from 'react';
import { func, string } from 'prop-types';
import Background from 'components/ui/background';
import {
  bindActionCreators,
  connect,
  getBingImage,
} from 'store/actions';


class SearchWeather extends Component {
  static propTypes = {
    backgroundImage: string.isRequired,
    getBingImageAction: func.isRequired,
  };

  componentDidMount() {
    const { getBingImageAction } = this.props;
    getBingImageAction();
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
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather);
