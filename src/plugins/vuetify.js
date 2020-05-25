import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
      },
    theme: {
        themes: {
          light: {
            primary: '#385170',
            secondary: '#f2f2f2',
            accent: '#8c9eff',
            error: '#b71c1c',
            background: '#eeeeee',
            icons: '#cc6600',
            styling: '#385170',
            text: '#333333',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          },
        },
       
      },
});

