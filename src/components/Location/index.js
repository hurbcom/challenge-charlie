// Flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Loading from '../Loading';

// Actions
import {
  getCurrentLocation,
  getByLocationName,
} from '../../actions/locationActions';

class Location extends Component {
  constructor(props) {
    super(props);
    this.searchLocationByName = this.searchLocationByName.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentLocation();
  }
  handleChange(e) {
    this.setState({ search: e.target.value });
  }
  searchLocationByName(e) {
    e.preventDefault();
    this.props.getByLocationName(this.search.value);
  }
  render() {
    const { city, region } = this.props.infosLocation;
    const { loading } = this.props;
    return (
      <div className="weather-header">
        <i className="icon icon-localization" data-icon="(" />
        <form onSubmit={this.searchLocationByName}>
          <input
            className="weather-input"
            type="text"
            name="search"
            required
            key={`${city},${region}` || ''}
            defaultValue={`${city},${region}` || ''}
            onChange={this.handleChange}
            placeholder="Escolha outra cidade"
            ref={input => (this.search = input)}
          />
        </form>
        {loading ? <Loading /> : null}
      </div>
    );
  }
}
Location.propTypes = {
  city: PropTypes.string,
  region: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  getCurrentLocation: PropTypes.func.isRequired,
  getByLocationName: PropTypes.func,
};
Location.defaultProps = {
  city: null,
  region: null,
  getByLocationName: null,
};
const mapStateToProps = state => ({
  infosLocation: state.location.infosLocation,
  loading: state.location.loading,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCurrentLocation, getByLocationName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Location);
