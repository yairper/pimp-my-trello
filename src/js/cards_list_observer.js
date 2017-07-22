CardsListObserver = function (el, callback) {
  let observer = new MutationObserver(
    mutation => {
      _.extend(CardsListMutation, mutation)

      if (mutation.cardBeforeDropped) {
        waitForDropAndCallback()
      }
      else {
        callback(mutation)
      }

      function waitForDropAndCallback () {
        let cardsBeforeDrop = mutation.targetList.querySelectorAll('.list-card')

        _.in(100, () => {
          let cardsAfterDrop = mutation.targetList.querySelectorAll('.list-card')

          cardsAfterDrop.forEach(element => {
            if (![].includes.call(cardsBeforeDrop, element))
              callback({ cardDropped: true, addedCard: element })
          })
        })
      }
    })

  observer.observe(el, { childList: true })
}
