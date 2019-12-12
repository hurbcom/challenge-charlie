import React from 'react';
import { useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import SearchForm from '../../components/SearchForm';

jest.mock('react-redux');

describe('SearchForm componnet', () => {
  it('should be able to open the search box clicking in the open button', () => {
    useSelector.mockImplementation(cb =>
      cb({
        main: {
          brazilStates: [
            { id: 11, state: 'Rondônia' },
            { id: 12, state: 'Acre' },
            { id: 13, state: 'Amazonas' },
            { id: 14, state: 'Roraima' },
            { id: 15, state: 'Pará' },
            { id: 16, state: 'Amapá' },
            { id: 17, state: 'Tocantins' },
            { id: 21, state: 'Maranhão' },
            { id: 22, state: 'Piauí' },
            { id: 23, state: 'Ceará' },
            { id: 24, state: 'Rio Grande do Norte' },
            { id: 25, state: 'Paraíba' },
            { id: 26, state: 'Pernambuco' },
            { id: 27, state: 'Alagoas' },
            { id: 28, state: 'Sergipe' },
            { id: 29, state: 'Bahia' },
            { id: 31, state: 'Minas Gerais' },
            { id: 32, state: 'Espírito Santo' },
            { id: 33, state: 'Rio de Janeiro' },
            { id: 35, state: 'São Paulo' },
            { id: 41, state: 'Paraná' },
            { id: 42, state: 'Santa Catarina' },
            { id: 43, state: 'Rio Grande do Sul' },
            { id: 50, state: 'Mato Grosso do Sul' },
            { id: 51, state: 'Mato Grosso' },
            { id: 52, state: 'Goiás' },
            { id: 53, state: 'Distrito Federal' },
          ],
        },
      })
    );

    const { getByTestId } = render(<SearchForm />);

    fireEvent.click(getByTestId('open-button'));

    expect(getByTestId('search-form')).toContainElement(
      getByTestId('select-element')
    );
  });
});
