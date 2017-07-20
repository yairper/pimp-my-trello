CardsListObserver = function (el, callback) {
  let observer = new MutationObserver(
    mutations => {
      _.extend(CardsListMutation, mutations)

      callback(mutations)
    })

  observer.observe(el, { childList: true })
}
