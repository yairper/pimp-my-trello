Board = function () {
  injectFAFontFace()

  if (this.hasBoardWrapper)
    this._build()

  this.onBoardLoad(() => this._build())
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

  _build() {
    _.in(500, () => replcaeToggleMenuIcons())

    let lists = document.querySelectorAll('.list-cards')
    _.in(0, () => lists.forEach(l => new CardsList(l)))
  }
}
