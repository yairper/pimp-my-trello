class Board {
  constructor () {
    this.$element = $('#board')
    this._build()
  }

  _build () {
    this._buildLists()
    this._addTags()
    this._listenToEvents()
  }

  _listenToEvents () {
    this._observer = new MutationObserver(mutations => {
      this._rebuild()
    })

    this._observer.observe(this.$element[0], { attributes: true })
  }

  _rebuild () {
    this.destroy()
    _.in(2000, () => this._build())
  }

  _buildLists () {
    let $lists = this.$element.$('.list-cards')

    this._lists =
      $lists.map((i, list) => new CardsList(list))
  }

  _addTags () {
    this._lists.forEach(l => l.addTags())
  }

  destroy () {
    this._observer.disconnect()
    this._lists.forEach(l => l.destroy())
  }
}

let content = $('#content')[0]

const contentObserver = new MutationObserver(_build)

if ($('#board').length == 0)
  contentObserver.observe(content, { childList: true })
else
  _build()

var currentBoard
function _build () {
  currentBoard && currentBoard.destroy()
  currentBoard = new Board()
}
