class Card {
  constructor (card) {
    this.$card = $(card)
    this._listenToEvents()
  }

  _listenToEvents () {
    this._observer = new MutationObserver(mutations => {
      this.destroy()
      this.addTags()
      this._listenToEvents()
    })

    let labels = this.$card.$('.list-card-labels')[0]
    this._observer.observe(labels, { childList: true })
  }

  after (el) {
    this.$card.after(el)
  }

  addTags () {
    this.tagsList = new TagsList(this)
  }

  destroy () {
    this._observer.disconnect()
    this.tagsList.remove()
  }

  get top () {
    let firstCardTop =
      this.$card.closest('.list')
                .$('.list-card:not(.hide)')
                .first()
                .position()
                .top

    return this.$card.position().top - firstCardTop
  }

  get labels () {
    let labels = this.$card.$('.card-label')

    return labels.map((i, label) => new Label(label))
  }
}
