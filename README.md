# CESTA Digital Anthology

## Pre-requisites

- Node.js
- npm

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server

## File Architecture

- Styles and scripts for the project is added as a submodule in the `src/assets` folder
- The individual articles can be added as submodules. The articles should be added in the following folder structure `src/{anthology-version}/{article-name}`
  - The submodules can be added with the following command:
    ```
    git submodule add <repository-url> src/{anthology-version}/{article-name}
    ```

## Deployment

- The project can be deployed to Heroku. For details, refer to the [Heroku For Hosting](docs/Hosting.md) documentation.
