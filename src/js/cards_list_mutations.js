const CardsListMutation = {
  get cardDragged () {
    return this._addedNodeClass.includes('placeholder') &&
           this._removedNodeClass.includes('ui-droppable')
  },

  get cardDropped () {
    return this._addedNodeClass.includes('ui-droppable') &&
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

  get _addedNodeClass () {
    if (this[0].addedNodes.length)
      return this[0].addedNodes[0].className
    if (this[1] && this[1].addedNodes.length)
      return this[1].addedNodes[0].className

    return ''
  },

  get _removedNodeClass () {
    if (this[0].removedNodes.length)
      return this[0].removedNodes[0].className
    if (this[1] && this[1].removedNodes.length)
      return this[1].removedNodes[0].className

    return ''
  }
}
