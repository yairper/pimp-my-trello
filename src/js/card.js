Card = function (element) {
  this.element = element

  this._rebuildTagsOnLabelsChange()
  this._addTags()
}

Card.prototype = {
  _rebuildTagsOnLabelsChange () {
    let labelsChanged = new MutationObserver(mutations => {
      _.extend(CardsListMutation, mutations)

      if (mutations._addedNodeClass.includes('pmt-card-tags'))
        return

      this._addTags()
    })

    let labels = this.element.querySelector('.list-card-labels')
    labelsChanged.observe(labels, { childList: true })
  },

  _addTags () {
    this.element
        .querySelector('.list-card-labels')
        .appendChild(TagsList(this))
  },

  get labels () {
    let labels = this.element.querySelectorAll('.card-label')

    results = []
    labels.forEach(l => results.push(new Label(l)))
    return results
  }
}
