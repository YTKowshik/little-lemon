# Little-lemon
Coursera Meta

# To host the react  app in github pages
## Install the package `gh-pages` as dev dependency
    npm install gh-pages --save-dev

## Add the below in `package.json` under `scripts` section
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
## Run the below command to publish
     npm run deploy -- -m "Deploy React app to GitHub Pages"

Note: While publishing to github-pages, we may need to add a path at the end of URL. 

# To change the path in github pages
- Add the section similar to below in your `package.json` in the beginning

      "homepage": "https://<github-username>.github.io/little-lemon/"
- Add a base url in React Router

     `<Router basename='/little-lemon'>`

- Open project settings in Github (example - `<repo>/settings/pages`)
- Under the `Build and deployment` section, select source as `Deploy from a branch`
- Select the branch `gh-pages` and folder as `root`

Navigate to https://ytkowshik.github.io/little-lemon/ to view the deployed app

# To run it in your mobile while development 

## Run below in powershell and find the IP address
Get-NetIPConfiguration -InterfaceAlias "Wi*"
- Open firewall in your windows machine to the port on which application is running
- Add rules for devices
