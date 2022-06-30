# HYP-Project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Implementation
The web application is based on Nuxt.js v2 and consequently Vue 2, we decided to not add any new feature of Vue 3 in the project to not cause any possible issue, since the scope of the project was very limited.
We also preferred to not use TypeScript since in the older version of Vue/Nuxt is not natively supported.

We didn't need to use any kind of State Management library like Vuex.

As backend we used the integrated server of Nuxt.js, interfacing with the postGres database through postGraphile that provides GraphQL style REST API. This choice was made both for curiosity of spermimenting and for the advanges offered by graphQL of querying easily connectected data, while still retrieving only the information we need to keep the response as small as possible. The body of the query also mirrors the structure of the response so that is easier for all contributor to know how to address the response.

To develop the style part we used bootstrap served by CDN, and some classic CSS code. 

