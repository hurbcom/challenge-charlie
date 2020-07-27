import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { fetchWeather } from "../../actions";
import * as S from "./styles";

class LocationForm extends React.Component {
  onSubmit = (formValues) => {
		this.props.fetchWeather(formValues);
  }

  renderInput = ({ input, meta }) => {
		const className = `field ${meta.error && meta.touched ? "error" : ""}`;
		return (
			<div className={className}>
				<input {...input} placeholder="Digite uma localidade" />
			</div>
		);
	}

  render() {
    return (
			<S.LocationForm onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="location" component={this.renderInput} />
			</S.LocationForm>
		);
  }
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.location) {
		errors.location = "You must enter a location";
	}

	return errors;
}

const form = reduxForm({
	form: "locationForm",
	validate
})(LocationForm);

export default connect(null,
  { fetchWeather }
)(form);
