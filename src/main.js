import polyfillUtil from './utils/polyfill'

polyfillUtil.patch(() => {
  import(/* webpackChunkName: "init" */ './init')
    .then(({ initialize }) => {
      initialize()
    })
})
