# Backend

yarn scripts:
`yarn dev` run application in local environment

@types:
create a file like 'express.d.ts' into src/@types when you need change a interface declaration

setup:

- add eslint extension to your vscode
  press ctrl + p and find "Open settings (json)" and add de following code block

```json
"[typescript]": {
   "editor.formatOnSave": false,
   "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
   }
 },

```

-changes in package.json
change license

creating tests:
- into `src/__tests__/unit`  create a  ExampleService.spec.ts to put into unit tests about ExampleService, if you want to create integration tests (to call an api for example), create a file into `src/__tests__/integration`.

an example of test file:

```ts
test('it should be ok', () => {
  const ok = true

  expect(ok).toEqual(true)
})
```

Paths:
You can change paths like '@repositories' in file `tsconfig.json`
import from any directory of project with '@repositories/myFile'


next steps:

explain project structure
add logger lib by default

## lambda aws function
raodando localmente:
copie o arquivo .env.example para .env
