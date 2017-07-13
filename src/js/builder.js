const a = new Proxy({}, {
  get (target, tagName) {
    let $el = $(`<${tagName} />`)

    return new Proxy($el, {
      get (target, name, proxy) {
        if (name in aApi)
          return aApi[name].bind(proxy)

        return target[name]
      }
    })
  }
})

const an = a

var aApi = {
  ['class'] (...names) {
    names.forEach(name =>
      this.addClass(name)
    )

    return this
  },

  bgColor (color) {
    this.css('background-color', color)

    return this
  },

  color (color) {
    this.css('color', color)

    return this
  },

  top (position) {
    this.css('top', position)

    return this
  }
}
