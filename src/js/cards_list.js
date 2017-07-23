CardsList = function (element) {
  this.element = element
  this._buildCards()

  CardAddedObserver(element, addedCard => new Card(addedCard))
}

CardsList.prototype = {
  _buildCards() {
    let cards = this.element.querySelectorAll('.list-card')

    cards.forEach(c => new Card(c))
  },
}
