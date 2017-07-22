CardsList = function (element) {
  this.element = element
  this._buildCards()
  this._listenToEvents()
}

CardsList.prototype = {
  _buildCards() {
    let cards = this.element.querySelectorAll('.list-card')

    cards.forEach(c => new Card(c))
  },

  _listenToEvents () {
    let observer = CardsListObserver(this.element,
      mutation => {
        if (mutation.cardCreated ||
            mutation.cardDropped)
          new Card(mutation.addedCard)
      }
    )
  },
}
