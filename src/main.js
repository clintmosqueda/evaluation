import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: 'http://localhost:4000'
})

const authLink = setContext(() => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem('blog-token')

  // return the headers to the context so httpLink can read them
  return {
      headers: {
          authorization: token ? token : null
      }
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
