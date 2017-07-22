_ = {
  in (ms, fn) {
    setTimeout(fn, ms)
  },

  match (str, re) {
    let matches = str.match(re)
    return matches && matches[0]
  },

  rgba (rgb, opacity) {
    return rgb.replace(')', `, ${opacity})`)
              .replace('rgb', 'rgba')
  },

  extend (source, target = {}) {
    let keys = Object.getOwnPropertyNames(source)
    for (let i = 0; i < keys.length; i++) {
      let name = keys[i]
      let descriptor =
        Object.getOwnPropertyDescriptor(source, name)

      Object.defineProperty(target, name, descriptor)
    }

    return target
  }
}
