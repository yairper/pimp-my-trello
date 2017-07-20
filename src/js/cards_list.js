CardsList = function (element) {
  this.element = element
  this._buildCards()
  this._listenToEvents()
}

CardsList.prototype = {
  _buildCards() {
    let cards = this.element.querySelectorAll(
      '.list-card:not(.placeholder):not(.hide)')

    this._cards = []
    cards.forEach(c => this._cards.push(new Card(c)))
  },

  _listenToEvents () {
    let observer = CardsListObserver(this.element,
      mutation => {
        if (mutation.cardDragged)
          this._removeCardByElement(mutation.removedCard)

        if (mutation.cardDropped ||
            mutation.cardCreated) {
          _.in(50, () =>
            this._cards.push(
              new Card(mutation.addedCard))
          )
        }
      }
    )
  },

  _removeCardByElement (element) {
    let cardToRemoveIndex = this._cards.findIndex(
      c => c.element === element)

    let removedCard =
      this._cards.splice(cardToRemoveIndex, 1)[0]

    removedCard.destroy()
  },
}
