const parse = (params = {}, url = '') => {
  let urlParsed = url;
  Object.keys(params).forEach((param) => {
    urlParsed = urlParsed.replace(`{{${param}}}`, params[param]);
  });
  return urlParsed;
};


export default parse;
