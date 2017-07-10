const _ = {
  in (ms, fn) {
    setTimeout(fn, ms)
  },

  every (ms, fn) {
    setInterval(fn, ms)
  },

  match (str, re) {
    let matches = str.match(re)
    return matches && matches[0]
  },

  rgba (rgb, opacity) {
    return rgb.replace(')', `, ${opacity})`)
              .replace('rgb', 'rgba')
  },

  extend (target, mixin) {
    let origProto = target.__proto__
    let mixinCopy = this._copyProperties(mixin)

    target.__proto__ = mixinCopy
    mixinCopy.__proto__ = origProto
  },

  _copyProperties (obj) {
    let copy = {}

    let keys = Object.getOwnPropertyNames(obj)
    for (let i = 0; i < keys.length; i++) {
      let name = keys[i]
      let descriptor =
        Object.getOwnPropertyDescriptor(obj, name)

      Object.defineProperty(copy, name, descriptor)
    }

    return copy
  }
}

