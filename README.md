# CESTA Digital Anthology

## Installation

1. Clone the repository
2. Use Live Server vscode extension to run the project locally

## File Architecture

- Styles and scripts for the project is added as a submodule in the `assets/remote` folder. The original repository can be found [here](https://github.com/cesta-online/anthology-assets).
- The individual articles can be added as submodules. The articles should be added in the following folder structure `{anthology-version}/{article-name}`
  - The submodules can be added with the following command:
    ```
    git submodule add <repository-url> {anthology-version}/{article-name}
    ```

## Adding a new article

- [This template](https://github.com/cesta-online/article-quarto-template/) can be used by the authors to create a new article.
- Once the article is finalized, the repository ownership should be transferred to the CESTA organization.
- After the ownership transfer, the article can be added as a submodule to the main repository. Refer to the [File Architecture](#file-architecture) section for more details.

## Deployment

- The project is deployed using GitHub Pages. The deployment is done automatically when the changes are pushed to the `main` branch.
