import { fireEvent, render } from '@testing-library/react';
import { shallow } from 'enzyme';

import SearchBar from '../../components/SearchBar';

describe('Testing Search Bar Component', () => {
    const handleSubmit = jest.fn();
    const searchBarInput = render(<SearchBar />);

    test('should render correctly', () => {
        expect(searchBarInput);
    });

    test('should be have a input event when o input field change', () => {
        const { getByTestId } = render(<SearchBar />);
        fireEvent.change(getByTestId('form-input'), {
            target: { value: 'Gramado' },
        });
    });

    test('should be have a click event when clicking button', () => {
        const { getByTestId } = render(<SearchBar />);
        fireEvent.click(getByTestId('form-button'));
    });

    test('should be call a click function at least once', () => {
        const searchBarInput = shallow(<SearchBar onSubmit={handleSubmit()} />);
        searchBarInput.simulate('click');
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});
