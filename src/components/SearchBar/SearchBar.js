import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//styles
import { SearchBarContainer, SearchBarInput, CompassImage, FormInput } from './SearchBar.styles';

export default function SearchBar({ address, city, setCity, searchCity, loading }) {
	useEffect(() => {
		if (address) {
			setCity(`${address.city}, ${address.state}`);
		}
	}, [address, setCity]);

	return (
		<SearchBarContainer>
			<CompassImage src="public/img/44.svg" />
			<FormInput onSubmit={searchCity}>
				<SearchBarInput
					type="text"
					value={loading ? 'Loading...' : city}
					onChange={(e) => setCity(e.target.value)}
					placeholder="Type your location"
				></SearchBarInput>
			</FormInput>
		</SearchBarContainer>
	);
}

SearchBar.propTypes = {
	address: PropTypes.object,
	city: PropTypes.string,
	setCity: PropTypes.func,
	searchCity: PropTypes.func,
	loading: PropTypes.bool
};
