# Hypermedia Applications - Team AEGI

Implementation Project for the course "Hypermedia Applications (Web and Multimedia)", Polytechnic University of Milan, A.Y. 2021/2022. 

The project consists in implementing a website dedicated to a touristic place, that we have called **Towny**.

**Professor**: Franca Garzotto<br />
**Tutors**: Alberto Patti, Giulio Antonio Abbo, Mattia Gianotti

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

### `assets`

The assets directory contains all the images in WebP format, used for the content of the website.
In the subdirectories, each image starts with the id of the corresponding element.

- **`events`** - Images displayed dynamically in the single events.
  
- **`maps`** - Images that represent the routes of each itinerary. These images are only used for thumbnails, since the respective details pages already use real maps.
  
- **`pois`** - Images displayed dynamically in the single points of interests.
  
- **`services`** - Images displayed dynamically for each service. For each service, there is one representative image, and images for the list of specific services of that type.

Images in the subdirectories that contain `-thumb` in the name are thumbnail images, which are resized images, used in some components to improve performance.

The remaining images are static images in this directory in the non-dynamic parts of the website.

### `components`

The components directory contains Vue.js components. Components make up the different parts of pages and can be reused and imported into pages, layouts and even other components.

- **`Badge.vue`** - Used for orientation information (and group link) in Details pages.

- **`Banner.vue`** - Used to display a cover image, title and Badge for all Details pages, and only cover and title in `About us`/`Contact us` pages.

- **`Card.vue`** - Used on several links throughout the website. It features a thumbnail with caption, and provides a hover animation as interaction feedback.

- **`Carousel.vue`** - Used to display a set of multiple images (slides), it is adopted in `Event Details` and `Itinerary Details`.<br />It provides controls to skip between slides, otherwise it can also automatically switch slides.

- **`CarouselMultiItem.vue`** - A carousel that displays multiple items at a time, used in our case to display the Points of Interest of an Itinerary in order.<br />It includes previous/next controls (skips to the previous/next N items), and is scrollable with gestures on mobile.

- **`Dropdown.vue`** - An accordion that displays/hides content, used to select between All-year events, Summer events and Winter Events (each having a separate dropdown).

- **`TheFooter.vue`** - A responsive navbar for navigation on the bottom of every page, it includes landmarks for `About us` and `Contact us`.

- **`TheHeader.vue`** - A responsive navbar for navigation on the top of every page, it includes landmarks for `Home`, `All Events`, `All Points of Interest`, `All Itineraries`, `All Services`.

### `layouts`

Layouts include the view templates that are used as a structure for more pages. In our case, only one layout **`default.vue`** was sufficient for all the pages implemented.<br />This layout provides a sticky header on the top, and a footer on the bottom of all pages.

### `pages`

This directory contains application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

- **`events`**
  - **`_id.vue`** - Event Details page.
  - **`index.vue`** - All Events page.
  
- **`itineraries`** 
  - **`_id.vue`** - Itinerary Details page.
  - **`index.vue`** - All Itineraries page.
  
- **`pois`**
  - **`_id.vue`** - Point of Interest Details page.
  - **`index.vue`** - All Points of Interest page.
  
- **`services`** 
  - **`_id.vue`** - Service Details page.
  - **`index.vue`** - All Service Types page.

- **`about.vue`** - The "About us" page.

- **`contact.vue`** - The "Contact us" page.

- **`index.vue`** - The Home page.
