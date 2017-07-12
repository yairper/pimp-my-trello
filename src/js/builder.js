class Builder {
  constructor (tagName) {
    this.$el = $(`<${tagName} />`)
  }

  ['class'] (...names) {
    names.forEach(name =>
      this.$el.addClass(name)
    )

    return this
  }

  bgColor (color) {
    this.$el.css('background-color', color)

    return this
  }

  color (color) {
    this.$el.css('color', color)

    return this
  }

  top (position) {
    this.$el.css('top', position)

    return this
  }

  attr (name, value) {
    let attr = this.$el.attr()
    this.$el.attr(attr + value + ';')

    return this
  }

  text (content) {
    this.$el.text(content)

    return this
  }
}

const $$ = new Proxy({}, {
  get (target, name) {
    return new Builder(name)
  }
})
