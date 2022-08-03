const inquirer = require('inquirer');
const { inquirerFilters } = require('../helpers/string');
const {
  formatData,
  saveReactFile,
  saveStyleFile,
  saveTestFile,
} = require('../helpers/write');
const fs = require('fs');
const path = require('path');

const getName = ({ type }) => {
  const componentOrService = type === 'serviço' ? 'serviço' : 'componente';
  return inquirer.prompt({
    type: 'input',
    name: 'name',
    message: `Qual nome do ${componentOrService}?`,
    validate: validateModuleName,
    filter: inquirerFilters,
  });
};

const getComponentFormat = () =>
  inquirer.prompt({
    type: 'list',
    name: 'format',
    message: 'Qual formato do componente você deseja criar?',
    choices: ['Typescript', 'Javascript'],
    filter: inquirerFilters,
  });

const getComponentType = () =>
  inquirer.prompt({
    type: 'list',
    name: 'type',
    message: 'Seu componente é um...',
    choices: ['Serviço', 'Componente de UI'],
    filter: inquirerFilters,
  });

const validateModuleName = (value = '') =>
  value != '' || 'Po, fala ai o nome do componente 😪';

const createModule = async () => {
  const { type } = await getComponentType();
  const { name } = await getName({ type });
  const { format } = await getComponentFormat();

  const { savePath, fileFormat } = formatData({ type, format });

  if (fs.existsSync(path.resolve(savePath, name))) {
    throw new Error('Error!!!!', 'módulo já existe 🤬');
  }

  fs.mkdirSync(path.resolve(savePath, name), {
    recursive: true,
  });

  saveReactFile({ name, savePath, fileFormat, type });
  if (type !== 'serviço') {
    saveStyleFile({ name, savePath, fileFormat });
    saveTestFile({ name, savePath, fileFormat });
  }

  console.info('Módulo', name, 'criado com sucesso 🤗');
};

module.exports = { createModule };
