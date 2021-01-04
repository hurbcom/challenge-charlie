import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import SearchBar from '../components/SearchBar/SearchBar';
import React from 'react';
import { SearchBarInput } from '../components/SearchBar/SearchBar.styles';


const setCityMock = jest.fn()

const SearchBarComponentProps = {
	address: {},
	city: 'Cidade123',
	setCity: setCityMock,
	searchCity: () => true,
	loading: false
}

describe('SearchBar Component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<SearchBar {...SearchBarComponentProps}>
			</SearchBar>
		);
	});

	it('Renders', () => {
		const SearchBarComponent = renderer.create(<SearchBar {...SearchBarComponentProps}></SearchBar>);
		expect(SearchBarComponent).toMatchSnapshot();
	});

	it('Sets input value to city variable', () => {

		const event = {
			target: {
				value: 'teste123'
			}
		}

		wrapper.find(SearchBarInput).simulate('change', event)
		expect(setCityMock).toHaveBeenCalledWith('teste123')
	})
});