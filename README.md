# quill

Front-end for the **penda** project. Additional details can be found in
the [ink](https://github.com/OpenCovenant/ink) repository.

## Install

Having `node` installed, run `npm install` to install the packages that this project requires. Additionally, you can also install the packages
for the mock-server via `npm run install:mock-server`.

## Run

Choose in which manner you'd like to interact with quill through the following instructions. The app will automatically
reload if you change any of the source files.

### For Development And Cypress Testing With A Mock Server

Run `npm run start:mock` to start **quill** on a dev server at `http://localhost:4200/` and then
run `npm run start:mock-server` to start a mock server of **ink** in a NodeJS environment. More information on the
latter can be found in its [README](mock-server/README.md).

### For Development And Testing With An Actual Local `ink` Server

Run `npm run start` to start **quill** on a dev server at `http://localhost:4200/` and then follow the instructions on
the README file at the [Ink repository](https://github.com/OpenCovenant/ink) on how to locally run `ink`.

### For Development And Testing With The Deployment Server

Run `npm run start:prod` to start a dev server at `http://localhost:4200/` which will also be automatically
connected to the remote production server. Use this only if needed.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Test

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running Cypress tests

Run `npx cypress open` or `npx cypress run` to execute [Cypress](https://github.com/cypress-io/cypress) tests.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Contributors

Throughout the development of this project we've received significant help from various contributors related to a wide
range of aspects. We'd like to express our gratitude in the following alphabetical list. Note to contributors, before
finalizing your first MR, **add yourself**! The format is _username [(firstname lastname)] - role/contribution_, in
which the actual name is obviously optional.

- AndersonCeci (Anderson Ceci) - developer
- AndiBraimllari (Andi Braimllari) - core developer
- Kledis98 ( Kledis Myrtollari) - developer

To get started with contributing, simply create an [issue](https://github.com/OpenCovenant/quill/issues) if there's a
concern to be addressed, or a [pull request](https://github.com/OpenCovenant/quill/pulls) if there are changes you'd
like to make.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
