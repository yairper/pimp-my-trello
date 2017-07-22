CardsList = function (element) {
  this.element = element
  this._buildCards()
  this._listenToEvents()
}

CardsList.prototype = {
  _buildCards() {
    let cards = this.element.querySelectorAll(
      '.list-card:not(.placeholder)')

    this._cards = []

    cards.forEach(c =>
      this._cards.push(new Card(c)))
  },

  _listenToEvents () {
    let observer = CardsListObserver(this.element,
      mutation => {
        if (mutation.cardCreated)
          this._cards.push(new Card(mutation.addedCard))

        if (mutation.cardDropped) {
          let card = this._cards.find(
            c => c.element == mutation.addedCard)

          let cardCameFromAnotherList = !card
          if (cardCameFromAnotherList) {
            // wait for added card to have parent
            _.in(0, () => {
              this._cards.push(new Card(mutation.addedCard))
            })
          }
        }
      }
    )
  },
}
