import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
      primary: '#0e1946',
      secondary: '#090f29',
      accent: colors.deepPurple.darken4,
      error: colors.red.base,
      warning: colors.yellow.base,
      info: colors.blue.base,
      success: colors.green.base
    }
})