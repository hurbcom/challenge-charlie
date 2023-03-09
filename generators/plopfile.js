module.exports = (plop) => {
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}/index.tsx',
        templateFile: 'templates/page/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/styles/pages/{{lowerCase name}}.styles.ts',
        templateFile: 'templates/page/styles.ts.hbs',
      },
    ],
  })

  plop.setGenerator('component', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/{{lowerCase name}}.styles.ts',
        templateFile: 'templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/{{lowerCase name}}.test.tsx',
        templateFile: 'templates/component/test.tsx.hbs',
      },
    ],
  })
}
