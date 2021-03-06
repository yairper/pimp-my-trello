Card = function (element) {
  this.element = element

  this._addTags()
  this.onLabelsChange(() => this._addTags())
}

Card.prototype = {
  included () {
    this.element = this
  },

  onLabelsChange (cb) {
    let labelsChanged = new MutationObserver(mutations => {
      _.extend(CardsListMutation, mutations)

      if (!mutations._addedNodeClass.includes('pmt-card-tags'))
        cb()
    })

    let labels = this.element.querySelector('.list-card-labels')
    labelsChanged.observe(labels, { childList: true })
  },

  _addTags () {
    this.element
        .querySelector('.list-card-labels')
        .appendChild(TagsList(this.labels))
  },

  get labels () {
    let labels = this.element.querySelectorAll('.card-label')

    let results = []
    labels.forEach(l => results.push(new Label(l)))
    return results
  }
}
