Content = function () {
  let content      = document.querySelector('#content')
  let hasBoardWrapper = () => document.querySelector('.board-wrapper')

  if (hasBoardWrapper())
    new Board()

  let boardSwitched = new MutationObserver((mutations) => {
    if (hasBoardWrapper())
      new Board()
  })
  boardSwitched.observe(content, { childList: true })
}
