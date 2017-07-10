class Label {
  constructor (el) {
    this.$el = $(el)
  }

  get name () {
    return this.iconName || this.$el.text()
  }

  get iconName () {
    return _.match(this.$el.text(), /fa-\w+/)
  }

  get color () {
    return this.$el.css('background-color')
  }
}

