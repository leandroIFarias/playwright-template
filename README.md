# Demo Project - Playwright with Page Object and BDD without cucumber
Demo of an Automation Project.
Onde é utilizado o Playwright with Page Object and BDD without cucumber.


## Configuração

1. Install NodeJS (https://nodejs.org/dist/v20.9.0/node-v20.9.0-x64.msi): node
2. Install VS Code (https://code.visualstudio.com/download)
3. Create project folder
4. Install Playwright - cmd: (npm init playwright@latest):
	- Language: Typescript
	- Directory tests: tests
	- Github Actions: "false"
	- browsers Playwright: "true"
5. Add file ".gitignore"
6. add file "README.md"
7. Run the command (npm install dotenv) to create the .env file to save the project config (Note you have to create the file as it is in .gitignore)

## Package
 - npm install typescript --save-dev
 - dotenv - é uma dependência que carrega variáveis ​​de ambiente de um arquivo .env para process.env. Ajuda a manter suas variáveis ​​​​de ambiente como URL, nome de usuário e senha em um arquivo separado e carregá-lo em tempo de execução com base no ambiente
 - npm install --save-dev cross-env - é usado para definir variáveis ​​de ambiente inline ao executar comandos de nó

## Extensions VS Code
 - Playwright Test for VSCode
 - One Dark Pro
 - Material Icon Theme
 - Code Spell Checker

## Example of command options to execute
 - npx playwright test
 - npx playwright show-report
 - yarn playwright test --headed
 - yarn playwright test --headed
 - npx playwright test --debug
 - npx playwright test --ui


## Directory specifications
  - output: location to save the evidence (inserted in .gitignore)
  - pages: contains the mapped objects
  - tests: contains examples of scenarios without BDD only with PageObject
  - node_modules: Contains the libraries used (inserted in .gitignore)
  - env: O arquivo .env pode conter configurações gerais que se aplicam a todos os ambientes, como a URL base.
  - config/env/: Pasta que contém arquivos de ambiente específicos, como test.env, staging.env e production.env.
