class $$ {
  static get span() {
    return new $$().span
  }

  get span () {
    this.$el = $('<span />')
    return this
  }

  bgColor (color) {
    this.$el.attr('style',
                  `background-color: ${color}`)
    return this
  }

  text (content) {
    this.$el.text(content)

    return this
  }
}

function LabelTag ($label) {
  let labelColor = _.rgba($label.color, 0.25)

  let el = $$.span.bgColor(labelColor)
                  .text($label.name)

  return el.$el
}
