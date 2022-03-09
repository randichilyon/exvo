import { polyfillLoader } from 'polyfill-io-feature-detection'

// object
const objectFeatures = [
  'assign',
  'keys',
  'values'
]
const objPre = 'Object.'

// array
const arrayProtoFeatures = [
  'filter',
  'find',
  'findIndex',
  'forEach',
  'map',
  'includes',
  'indexOf',
  'keys',
  'reduce',
  'some'
]
// array
const arrayFeatures = [
  'from',
  'isArray',
  'of'
]
const arrayProtoPre = 'Array.prototype.'
const arrayPre = 'Array.'

const featuresArr = [
  'IntersectionObserver',
  'Symbol',
  'Promise',
  objPre + objectFeatures.join(',' + objPre),
  arrayProtoPre + arrayProtoFeatures.join(',' + arrayProtoPre),
  arrayPre + arrayFeatures.join(',' + arrayPre)
]

const features = featuresArr.join(',')

export default {
  patch (callback) {
    polyfillLoader({
      features,
      onCompleted: callback
    })
  },
  features
}
