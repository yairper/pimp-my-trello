class TagsList {
  constructor (card) {
    let cardTop = card.top

    this.$tags = $('<div/>')
    this.$tags.addClass("pmt-card-tags")
    this.$tags.css({ top: cardTop + 4 })

    card.labels.forEach(label => {
      let tag = label.iconName ? IconTag(label) :
                                 LabelTag(label)

      this.$tags.append(tag)
    })

    card.after(this.$tags)

    _.in(0, () => this.$tags.addClass('pmt-animate'))
  }

  remove () {
    this.$tags.removeClass('pmt-animate')

    _.in(50, () => this.$tags.remove())
  }
}

