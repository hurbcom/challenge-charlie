import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
    it('should be render children', () => {
        const { container } = render(
            <Main>
                <p>testing</p>
            </Main>
        );
        expect(screen.getByText(/testing/i)).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should be render background', () => {
        const { container } = render(<Main>teste</Main>);

        expect(container.firstChild).toHaveStyle({
            background: 'linear-gradient(#6698CB, #69B4C9)'
        });
    });
});
