import { defineConfig } from '@windicss/plugin-utils'
import { transform } from 'windicss/helpers'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  // plugins: [
  //   transform('daisyui'),
  // ]
})
