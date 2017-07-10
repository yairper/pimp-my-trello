class Board {
  constructor () {
    this.$element = $('#board')

    this._buildLists()
    this._addTags()
  }

  _buildLists() {
    let $lists = this.$element.find('.list-cards')

    this._lists =
      $lists.map((i, list) => new CardsList(list))
  }

  _addTags () {
    this._lists.forEach(l => l.addTags())
  }

  destroy () {
    this._lists.forEach(l => l.destroy())
  }
}

const observer = new MutationObserver(mutations => {
  observer.disconnect()
  currentBoard && currentBoard.destroy()
  _.in(250, _build)
})

_.in(1000, _build)

var currentBoard

function _build () {
  currentBoard = new Board()

  let $board = currentBoard.$element

  let board = $board[0]
  let boardWrapper = $('.board-wrapper')[0]

  observer.observe(board,        { attributes: true })
  observer.observe(boardWrapper, { childList:  true })
}
