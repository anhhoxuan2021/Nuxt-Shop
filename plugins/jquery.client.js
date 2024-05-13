import $ from 'jquery'
//import jQuery from 'jquery'
export default defineNuxtPlugin( ( nuxtAPp ) => {
    nuxtAPp.hook( 'app:beforeMount', () => {
       window.jQuery = window.$ = $
    } )
 } )