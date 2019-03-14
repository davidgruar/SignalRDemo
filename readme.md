## Getting started
```
cd SignalRDemo.App
dotnet watch run
```
This should kick off an `npm install` and start a react development server with live reloading enabled.

## SignalR Demo preparation

1. Fork this repo to your own GitHub account.
2. Create an app service in your personal Azure subscription.
3. Deploy your app to Azure by whatever method you prefer. Options include:
    - [Use Visual Studio](https://docs.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-webapp-using-vs?view=aspnetcore-2.2#deploy-the-app-to-azure)
    - Use Kudu
        - To get started, go to your app in the Azure portal, click on "Deployment Center"
        - Before you deploy, go to "Application settings" and set `WEBSITE_NODE_DEFAULT_VERSION` TO `8.9.4`.
        - Beware: I still couldn't get this to work - I kept getting errors from npm install. Your mileage may vary.
    - Use Azure DevOps
        - [Create your own organisation](https://app.vsaex.visualstudio.com/signup/), if you don't have one already.
        - Create a new project and a new build pipeline
        - Select your GitHub account and select your forked repo
        - The repo is already set up for Azure Pipelines, so you should just be able to hit "Run" to kick off a build
        - Create a release pipeline to deploy to your app service
