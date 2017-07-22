CardsListObserver = function (el, callback) {
  let observer = new MutationObserver(
    mutation => {
      _.extend(CardsListMutation, mutation)

      if (mutation.cardBeforeDropped) {
        let cardsBeforeDrop = mutation.targetList.querySelectorAll('.list-card')

        _.in(100, () => {
          let cardsAfterDrop = mutation.targetList.querySelectorAll('.list-card')

          let addedCard

          cardsAfterDrop.forEach(element => {
            if (!Array.prototype.includes.call(
                  cardsBeforeDrop, element))
              addedCard = element
          })

          if (addedCard)
            callback({
              cardDropped: true,
              addedCard
            })
        })
      }
      else {
        callback(mutation)
      }
    })

  observer.observe(el, { childList: true })
}
