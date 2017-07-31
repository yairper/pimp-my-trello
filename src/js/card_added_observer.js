CardAddedObserver = function (el, callback) {
  CardCreatedObserver(el, callback)
  CardDroppedObserver(el, callback)
}

CardDroppedObserver = function (el, callback) {
  let observer = new MutationObserver(mutation => {
    _.extend(CardsListMutation, mutation)

    if (mutation.cardBeforeDropped)
      waitForDropAndCallback()

    function waitForDropAndCallback () {
      let cardsBeforeDrop = mutation.targetList.all`.list-card`

      _.in(100, () => {
        let cardsAfterDrop = mutation.targetList.all`.list-card`

        cardsAfterDrop.forEach(element => {
          if (!cardsBeforeDrop.includes(element))
            callback(element)
        })
      })
    }
  })

  observer.observe(el, { childList: true })
}

CardCreatedObserver = function (el, callback) {
  let observer = new MutationObserver(mutation => {
    _.extend(CardsListMutation, mutation)

    if (mutation.cardCreated)
      callback(mutation.addedCard)
  })

  observer.observe(el, { childList: true })
}
