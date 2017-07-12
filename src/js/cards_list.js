class CardsList {
  constructor (element) {
    this.$el = $(element)

    this._buildCards()
    this._listenToEvents()
  }

  _buildCards() {
    let $cards = this.$el.$('.list-card:not(.placeholder):not(.hide)')

    this._cards = $cards.map((i, card) => new Card(card))
  }

  _listenToEvents () {
    this._observer = new MutationObserver(mutations => {
      _.extend(mutations, CardsListMutation)

      if (mutations._addedNodeClass != 'pmt-card-tags' &&
          mutations._removedNodeClass != 'pmt-card-tags') {
        let listName = $(mutations[0].target).closest('.list').$('h2').text()
        /*
         * console.log(listName,
                    ' --- ',
                    mutations._addedNodeClass,
                    ' --- ',
                    mutations._removedNodeClass)
                    */
      }

      if (mutations.cardDragged)
        this._destroyCards()

      if (mutations.cardEnter)
        this._destroyCards()

      if (mutations.cardDropped)
        this._rebuild()

      if (mutations.cardLeft)
        this._rebuild()

      if (mutations.cardMovedOrDeleted)
        this._rebuild()

      if (mutations.cardCreated)
        this._rebuild()
    })

    let list = this.$el[0]

    this._observer.observe(list, { childList: true })
  }

  _rebuild () {
    this.destroy()

    _.in(0, () => {
      this._buildCards()
      this.addTags()
      this._listenToEvents()
    })
  }

  addTags () {
    this._cards.forEach(c => c.addTags())
  }

  destroy () {
    this._destroyCards()
    this._observer.disconnect()
  }

  _destroyCards () {
    this._cards.forEach(c => c.destroy())
  }
}
