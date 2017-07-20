Card = function (element) {
  this.element = element

  this.switchBoardCardsBlinkBug = new MutationObserver(() => this._rebuild())
  this.switchBoardCardsBlinkBug.observe(element, { childList: true })

  this.addTags()
  this._rebuildTagsOnLabelsChange()
}

Card.prototype = {
  _rebuild () {
    this.destroy()
    this._rebuildTagsOnLabelsChange()
    _.in(50, () => this.addTags())
  },

  _rebuildTagsOnLabelsChange () {
    this.labelsChanged = new MutationObserver(mutations => {
      _.extend(CardsListMutation, mutations)

      if (mutations._addedNodeClass.includes('pmt-card-tags'))
        return

      this.addTags()
    })

    let labels = this.element.querySelector('.list-card-labels')

    this.labelsChanged.observe(labels,  { childList: true })
  },

  addTags () {
    this.tagsList = TagsList(this)
    this.element
        .querySelector('.list-card-labels')
        .appendChild(this.tagsList)

    _.in(0, () =>
      this.tagsList.classList.add('pmt-animate'))
  },

  destroy () {
    this.labelsChanged.disconnect()

    if (this.tagsList.parentNode)
      this.tagsList.parentNode.removeChild(this.tagsList)
  },

  get top () {
    let firstCardTop =
      $(this.element).closest('.list')
                .$('.list-card:not(.hide)')
                .first()
                .position()
                .top

    return $(this.element).position().top - firstCardTop
  },

  get labels () {
    let labels = this.element.querySelectorAll('.card-label')

    results = []
    labels.forEach(l => results.push(new Label(l)))
    return results
  }
}
