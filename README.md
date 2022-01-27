# Car search front-end technical test

## Prerequisites

This project was built with the expectation of the following dependencies

- Node JS, version `16.x.x`
- Yarn package manager, version `1.22.x`

## Installation

1. First install Node dependencies by running `yarn install`
2. Validate the installation by running `yarn test build`

## Development

This project is configured with `webpack-dev-server`, which you can start via the `yarn start` command. Other useful commands for development:

- `yarn lint` & `yarn lint:fix` will run `eslint`, `prettier` & `stylelint`
- `yarn analyze` will profile the webpack bundle and open a visualisation in the browser
- `yarn test` will trigger a run of the test suite

## Deployment

Running `yarn build` will create a statically-publishable bundle in the `./dist` folder. You can host this on an static HTTP server, or via a service such as S3.

There is also a github action configured in this repo to automatically statically publish this to github pages upon any update.

<!-- TODO: add url -->
