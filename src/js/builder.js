class $$ {
  static get span () {
    return new $$('span')
  }

  static get div () {
    return new $$('div')
  }

  static get i () {
    return new $$('i')
  }

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
