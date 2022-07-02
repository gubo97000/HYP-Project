# HYP-Project

Implementation Project for the course "Hypermedia Applications (Web and Multimedia)", Polytechnic University of Milan, A.Y. 2020/2021. 

Faculty: Prof. Franca Garzotto.

## Team Members

| Member                                                                                  | Contributions |
| --------------------------------------------------------------------------------------- | ------------- |
| Alessandro Atanassov (10623652)<br />alessandro.atanassov@mail.polimi.it                | <ul><li>Design: Final models of C-IDM, Content Tables, Abstract Pages and ER Model (including respective sections of the report)</li><li>Major contribution to Front-End implementation: creation of all components (except `Badge`), general development of most pages (including hand-written CSS)</li><li>Database design and schema instantiation</li><li>Contributions to Usability report</li></ul> |
| Guido Bordonaro (10546201)<br />guido.bordonaro@mail.polimi.it                          | <ul><li>Design: Active contribution to C-IDM and Content Tables<br /></li><li>Front-End: Implementation of dynamic content (including insertion in database), and active contributions to pages and components</li><li>Implementation of Back-End</li><li>Contributions to Usability report</li></ul> |
| Isabel De Vergara De Orellana (10844712)<br />isabel.devergaradeorellana@mail.polimi.it | <ul><li>Front-End: initial implementation of Events, Event Details and Itineraries pages</li><li>Major contributions to final Usability report</li><li>Refinements to Design Report</li></ul> |
| Elena Naldoni (10856889)<br />elena.naldoni@mail.polimi.it                              | <ul><li>Design: Low-fidelity and High-fidelity wireframes (UI Design), and scenarios</li><li>Search of realistic content for the website (text, maps and images)</li><li>Active contributions to Usability and Design reports</li></ul> |

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

