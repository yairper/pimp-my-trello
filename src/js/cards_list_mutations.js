CardsListMutation = {
  get addedCard () {
    // TODO: could be other than .active-card
    return this[0].target.querySelector('.active-card')
  },

  get removedCard () {
    return this._removedNode
  },

  get cardDragged () {
    return this._removedNodeClass.includes('js-member-droppable') &&
          !this._addedNodeClass.includes('js-member-droppable')
  },

  get cardDropped () {
    return this._addedNodeClass.includes('js-member-droppable') &&
           this._removedNodeClass.includes('placeholder')
  },

  get cardLeft () {
    return this._removedNodeClass.includes('placeholder') &&
          !this._addedNodeClass
  },

  get cardEnter () {
    return this._addedNodeClass.includes('placeholder') &&
          !this._removedNodeClass
  },

  get cardMovedOrDeleted () {
    return this._removedNodeClass.includes('js-member-droppable') &&
          !this._addedNodeClass
  },

  get cardCreated () {
    return this._addedNodeClass.includes('is-due-complete')
  },

  get _addedNodeClass () {
    if (this[0].addedNodes.length)
      return this[0].addedNodes[0].className
    if (this[1] && this[1].addedNodes.length)
      return this[1].addedNodes[0].className

    return ''
  },

  get _addedNode () {
    if (this[0].addedNodes.length)
      return this[0].addedNodes[0]
    if (this[1] && this[1].addedNodes.length)
      return this[1].addedNodes[0]
  },

  get _removedNodeClass () {
    if (this[0].removedNodes.length)
      return this[0].removedNodes[0].className
    if (this[1] && this[1].removedNodes.length)
      return this[1].removedNodes[0].className

    return ''
  },

  get _removedNode () {
    if (this[0].removedNodes.length)
      return this[0].removedNodes[0]
    if (this[1] && this[1].removedNodes.length)
      return this[1].removedNodes[0]
  }
}
