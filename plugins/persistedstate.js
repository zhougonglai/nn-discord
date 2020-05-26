import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'vuex',
    reducer(state) {
      return {
        user: state.user,
      }
    },
  })(store)

  // if (process.client) {
  //   console.log("Inside Local Storage1", store, process.server, process.client);
  //   window.onNuxtReady((nuxt) => {
  //     const store = nuxt.$store;
  //     createPersistedState({
  //       key: "vuex",
  //       paths: ["board"]
  //       subscriber: store => (handler) => store.subscribe(handler)
  //     })(store);
  //     console.log("onNuxtReady End");
  //   });
  // }
}
