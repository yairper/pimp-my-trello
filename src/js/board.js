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
  _.in(2000, _build)
})

_.in(2000, _build)

var currentBoard

function _build () {
  currentBoard = new Board()

  let $board = currentBoard.$element

  let board = $board[0]
  let boardWrapper = $('.board-wrapper')[0]

  observer.observe(board,        { attributes: true })
  observer.observe(boardWrapper, { childList:  true })
}

let faFontPath = chrome.extension.getURL(
                   '/fonts/fontawesome-webfont.woff2?v=4.7.0')
let includeFaFonts = `
  <style>
    @font-face {
      font-family: 'FontAwesome';
      src:url('${faFontPath}')format('woff2');
      font-weight:normal;
      font-style:normal;
    }
  </style>`

$('head').append(includeFaFonts)
