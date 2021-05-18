
import { render, screen, queryByAttribute  } from '@testing-library/react';
import Theme from  './index'

test('Verifica adicionando o um componente no theme', () => {
  const Component = () =>{ return ("Hurb") }
  const { theme } = render(<Theme><Component/></Theme>);
  
  const textComponent = screen.getByText(/Hurb/i);
  expect(textComponent).toBeInTheDocument();
});
