
import { render, screen, queryByAttribute  } from '@testing-library/react';
import Message from  './index'

test('Testando o componente Message', () => {
    const props = { text: "Vamos para a lua" };
    
    const { container } = render(<Message {...props} />);

    const icon = container.querySelector("[data='icon']");
    expect(icon.textContent).toEqual(" Z ");

    const text = container.querySelector("[data='message']");
    expect(text.textContent).toEqual(props.text);
});

