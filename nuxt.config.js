const axios = require('axios'); 

export default {
  mode: 'universal',
  head: {
    title: 'Findhub',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Findhub - это множество полезных статей про мир технологий и не только!' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'yandex-verification', content: '2a13edad25cb6ab9' },
      { name: 'google-site-verification', content: '2e5Bl93HbhE5n3D1REDdKoQ7Nf76K900p28ohOEXSN8' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/findhub.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap' },
    ],
    script: [
      { hid: 'avesome', crossorigin:'anonymous', src: 'https://kit.fontawesome.com/42a8ed112b.js', defer: true }
    ]
  },

  css: [
    '@/assets/scss/main.scss'
  ],

  // transition: {
  //   name: 'fade',
  //   mode: 'out-in'
  // },

  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
  },

  plugins: [
    '~/plugins/api.js',
  ],

  components: true,

  // buildModules: [
  //   '@nuxtjs/eslint-module'
  // ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/auth-next',
  ],

  axios: {
    baseURL: process.env.HOST_API || 'http://localhost:3001',
    browserBaseURL: process.env.BROWSER_BASE_URL || 'http://localhost:3001',
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL || 'http://localhost:3001'
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.HOST_API || 'http://localhost:3001',
    }
  },
  
  auth: {
    redirect: {
      login: '/auth',
      logout: '/',
      callback: '/',
      home: '/',
    },
    strategies: {
      local: {
        token: {
          property: 'acsessToken',
          global: true,
          type: 'Bearer'
        },
        endpoints: {
          login: { url: 'http://localhost:3002/auth/signin', method: 'post' },
          logout: { url: 'http://localhost:3002/auth/logout', method: 'post' },
          user: { url: 'http://localhost:3002/user', method: 'get' },
        },
      },
    }
  },

  sitemap:{
    routes: async() => {
      let response = await axios.get('https://api.findhub.ru/posts/');
      return response.data.posts.map(i => `/posts/${i._id}`);
    }
  },
  
  robots: () => {
    return {
      UserAgent: '*',
      Disallow: ['/profile', '/*pages'],
      Sitemap: 'https://findhub.ru/sitemap.xml',
    }
  },
}
