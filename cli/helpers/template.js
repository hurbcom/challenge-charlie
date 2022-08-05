const getReactComponentContent = (name, type) => {
  if (type === 'serviço') {
    return `console.log('Eu falo do serviço ${name}')`;
  }

  const fileContent = `import React from 'react';
import { Container } from './styles';

export const ${name} = () => (
  <Container>
    <h1>Eu sou o componente e meu nome é ${name}</h1>
  </Container>
);
`;
  return fileContent;
};

const getStyleFileContent = () => {
  const fileContent = `import styled from 'styled-components';

export const Container = styled.div\`\`;
`;
  return fileContent;
};

const getTestFileContent = name => {
  const fileContent = `import React from 'react';
import { render, screen } from '@testing-library/react';
import { ${name} } from './';

test('${name} test render', () => {
  render(<${name} />);

  const text = screen.getByText('Eu sou o componente e meu nome é ${name}');
  expect(text).toBeInTheDocument();
});
`;

  return fileContent;
};

module.exports = {
  getReactComponentContent,
  getStyleFileContent,
  getTestFileContent,
};
