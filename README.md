# CESTA Digital Anthology

## Pre-requisites

- [Node.js](https://nodejs.org/en)
  > Node.js is not absolutely necessary but it is recommended to use it for the development environment. It is used to run the live server and replicate the GitHub Pages environment locally.

## Installation

1. Clone the repository
2. Initialize the sub-modules. Run at root

```bash
git submodule update --init --recursive
git checkout main
git submodule foreach 'git checkout main'
```

3. Install the node server dependencies

```bash
npm install
```

4. Start the dev environment

```bash
npm run dev
```

- (Not recommended) To run the project without Node.js, Use Live Server vscode extension to run the project locally

## Development

Everytime you need to start the development server, run the following command:

```bash
npm run dev
```

## File Architecture

- Styles and scripts for the project is added as a submodule in the `assets/remote` folder. The original repository can be found [here](https://github.com/cesta-online/anthology-assets).
- The individual articles can be added as submodules. The articles should be added in the following folder structure `{anthology-version}/{article-name}`
  - The submodules can be added with the following command:
    ```
    git submodule add <repository-url> {anthology-version}/{article-name}
    ```

## Modifying core pages

Anthology index.html can be edited directly.
The Submit index.html is rendered from a qmd file.

## Updating the core css and js assets

Refer to the [Anthology Assets](https://github.com/cesta-online/anthology-assets) repository for more details.

## Adding a new article

- [This template](https://github.com/cesta-online/article-quarto-template/) can be used by the authors to create a new article.
- Once the article is finalized, the repository ownership should be transferred to the CESTA organization.
- After the ownership transfer, the article can be added as a submodule to the main repository. Refer to the [File Architecture](#file-architecture) section for more details.

## Deployment

- The project is deployed using GitHub Pages. The deployment is done automatically when the changes are pushed to the `main` branch.
