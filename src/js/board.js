Board = function () {
  if (this.hasBoardWrapper)
    this._buildLists()

  this.onBoardLoad(() => this._buildLists())
}

Board.prototype = {
  get hasBoardWrapper () {
    return document.querySelector('.board-wrapper')
  },

  onBoardLoad (cb) {
    let observer = new MutationObserver(() => {
      if (this.hasBoardWrapper) {
        cb()
      }
    })

    let content = document.querySelector('#content')
    observer.observe(content, { childList: true })
  },

  _buildLists () {
    let lists = document.querySelectorAll('.list-cards')
    _.in(0, () =>
      lists.forEach(l => new CardsList(l)))
  }
}
