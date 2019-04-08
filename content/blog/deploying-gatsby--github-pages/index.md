---
title: Deploying a Gatsby site to Github Pages
date: "2019-04-08T18:15:00.284Z"
---

Gatsby makes it very easy to deploy a site to github pages. 

The first step will be installing the github pages package  
`$npm i --save-dev gh-pages`

We will then need to add a deployment script to package.json  
`"deploy": "gatsby build --prefix-paths && gh-pages -d public -b gh-pages"`  
Make sure to specify the branch you'd like github to use in the -b paramater.  
I would recomend keeping your source code, and github pages brances seperate, as you won't want the build files in your main development branch

Github will server our site with the following URL structure:
`username.github.io/repo`  
We will need to specify the repository name in order to serve our site properly. This is handled by the `--prefix-paths` flag, but we will need to provide gatsby with the name of our repo.  
This can be handled in the gatsby-config.js file, by adding `pathPrefix: "/gatsby-blog",` to the exports.

Now, all that's left is running `$npm run deploy`, and the site will be up and running!

The full instructions can be found in the [gatsby documentation](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)
