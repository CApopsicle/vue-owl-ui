import Vue from 'vue'
import router from './router'
import s from './app.scss'

module.exports = new Vue({
  router,

  mounted() {

  },

  data() {
    return {

    }
  },

  computed: {

  },

  render(h) {
    const { $slots } = this

    return (
      <div id="app">
        <header>
          <h1 class={[s.h1]}>
            OWL UI
          </h1>
          <p class={[s.badges]}>
            <a href="//travis-ci.org/cepave-f2e/vue-owl-ui" alt="Build Status">
              <img src="//img.shields.io/travis/cepave-f2e/vue-owl-ui.svg" />
            </a>
            <a href="//coveralls.io/github/cepave-f2e/vue-owl-ui" alt="Coverage">
              <img src="//img.shields.io/coveralls/cepave-f2e/vue-owl-ui/dev.svg" />
            </a>
            <a href="//www.bithound.io/github/cepave-f2e/vue-owl-ui" alt="BitHound">
              <img src="//www.bithound.io/github/cepave-f2e/vue-owl-ui/badges/score.svg" />
            </a>
            <img src="//img.shields.io/github/license/cepave-f2e/vue-owl-ui.svg" />
          </p>
          <div>
            <a class={[s.btn]} href="//github.com/cepave-f2e/vue-owl-ui" target="_bank">
              View on Github
            </a>
          </div>
        </header>

        <div class={[s.main]}>
          <aside>
            <ul>
              <li>
                <router-link to="/home">Home</router-link>
              </li>
              <li>Select</li>
              <li>Checkbox</li>
              <li>Input</li>
              <li>
                <router-link to="/loading">Loading</router-link>
              </li>
              <li>
                <router-link to="/switch">Switch</router-link>
              </li>
              <li>
                <router-link to="/tip">Tip</router-link>
              </li>
            </ul>
          </aside>
          <div class={[s.view]}>
            <router-view />
          </div>
        </div>

        <footer>Cepave Inc.</footer>
      </div>
    )
  }
})
