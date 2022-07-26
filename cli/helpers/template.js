const getReactComponentContent = (name, type) => {
  if (type === 'serviço') {
    return `console.log('Eu falo do serviço ${name}')`;
  }

  const fileContent = `import { Container } from './styles';

export const ${name} = () => (
  <Container>
    <h1>Eu sou o componente e meu nome é ${name} </h1>
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

module.exports = { getReactComponentContent, getStyleFileContent };
