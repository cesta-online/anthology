# Heroku For Hosting

- Create a new app and link it to the repository
- Add the [custom buildpack](https://github.com/dmathieu/heroku-buildpack-submodules) to the app for fetching the files from the Github sub-modules as well:
  - Use heroku CLI in terminals to add the buildpack:
  - Use `heroku login` to login to the heroku account
  - Check the current buildpacks using `heroku buildpacks -a <app-name>`
  - Add the custom buildpack for fetching submodules using `heroku buildpacks:add https://github.com/dmathieu/heroku-buildpack-submodules -a <app-name>`
  - Redeploy the app
