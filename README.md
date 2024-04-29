# CESTA Digital Anthology

## Pre-requisites

- Node.js
- npm

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server

## File Architecture

- Styles and scripts for the project is added as a submodule in the `src/assets` folder. The original repository can be found [here](https://github.com/cesta-online/anthology-assets).
- The individual articles can be added as submodules. The articles should be added in the following folder structure `src/{anthology-version}/{article-name}`
  - The submodules can be added with the following command:
    ```
    git submodule add <repository-url> src/{anthology-version}/{article-name}
    ```

## Adding a new article

- [This template](https://github.com/cesta-online/article-quarto-template/) can be used by the authors to create a new article.
- Once the article is finalized, the repository ownership should be transferred to the CESTA organization.
- After the ownership transfer, the article can be added as a submodule to the main repository. Refer to the [File Architecture](#file-architecture) section for more details.

## Deployment

- The project can be deployed to Heroku. For details, refer to the [Heroku For Hosting](docs/Hosting.md) documentation.
- When new commits are pushed to the repository, the Heroku app will be automatically updated with the new changes.
