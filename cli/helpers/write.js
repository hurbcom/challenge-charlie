const fs = require('fs');
const path = require('path');
const { humanize } = require('./string');
const {
  getReactComponentContent,
  getStyleFileContent,
  getTestFileContent,
} = require('./template');

const saveFile = (name, content) => {
  fs.writeFileSync(name, content);
};

const saveReactFile = ({ name, savePath, fileFormat, type }) => {
  const reactContent = getReactComponentContent(humanize(name), type);
  saveFile(path.resolve(savePath, name, `index${fileFormat}x`), reactContent);
};

const saveStyleFile = ({ name, savePath, fileFormat }) => {
  const styleContent = getStyleFileContent(humanize(name));
  saveFile(path.resolve(savePath, name, `styles${fileFormat}`), styleContent);
};

const saveTestFile = ({ name, savePath, fileFormat }) => {
  const styleContent = getTestFileContent(humanize(name));
  saveFile(path.resolve(savePath, name, `index.spec${fileFormat}x`), styleContent);
};

const formatData = ({ type, format }) => {
  let savePath = '';
  let fileFormat = '';
  if (type === 'serviço') {
    savePath = path.resolve(__dirname, '..', '..', 'src', 'services');
  } else {
    savePath = path.resolve(__dirname, '..', '..', 'src', 'components');
  }

  if (format === 'typescript') {
    fileFormat = '.ts';
  } else {
    fileFormat = '.js';
  }

  return { savePath, fileFormat };
};

module.exports = {
  saveFile,
  formatData,
  saveReactFile,
  saveStyleFile,
  saveTestFile,
};
