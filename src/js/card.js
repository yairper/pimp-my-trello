class Card {
  constructor (card) {
    this.$card = $(card)
    this._listenToEvents()
  }

  _listenToEvents () {
    this._labelsObserver = new MutationObserver(() => this._rebuild())
    this._badgesObserver = new MutationObserver(mutations => {
      _.extend(mutations, CardsListMutation)

      if (!mutations._removedNodeClass)
        this._rebuild()
    })

    let labels = this.$card.$('.list-card-labels')[0]
    this._labelsObserver.observe(labels, { childList: true })

    let badges = this.$card.$('.badges')[0]
    this._badgesObserver.observe(badges, { childList: true })
  }

  _rebuild () {
    this.destroy()
    this.addTags()
    this._listenToEvents()
  }

  after (el) {
    this.$card.after(el)
  }

  addTags () {
    this.tagsList = new TagsList(this)
  }

  destroy () {
    this._labelsObserver.disconnect()
    this._badgesObserver.disconnect()
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
