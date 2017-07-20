describe('CardsList', () => {
  afterEach(() => sandbox.restore())

  let $cardsList
  let card
  let CardSpy

  beforeEach(() => {
    bodyHas(
      a.div('.list-cards').with(
        a.div('.list-card'),
        a.div('.list-card'),
        a.div('.list-card.hide'),
        a.div('.list-card.placeholder')
      )
    )

    $cardsList = document.querySelector('.list-cards')

    card = { destroy: spy() }
    CardSpy = stub(global, 'Card').returns(card)
  })

  describe('constructor', () => {
    it('builds cards representation', () => {
      new CardsList($cardsList)

      expect(CardSpy).to.have.been.calledTwice
    })
  });

  context('cardDragged', () => {
    it('destorys removed card', () => {
      let cardBeingRemoved = a.div('.list-card')
      let cardsList = a.div('.list-cards')
                           .with(cardBeingRemoved)

      bodyHas(cardsList)

      let cardModelToRemove = { destroy: spy(), element: cardBeingRemoved }
      CardSpy.withArgs(cardBeingRemoved)
             .returns(cardModelToRemove)

      stub(global, 'CardsListObserver',
        (el, cb) => cb({ cardDragged: true, removedCard: cardBeingRemoved }))

      new CardsList($('.list-cards')[0])

      expect(cardModelToRemove.destroy).to.have.been.calledOnce
    })
  });

  ['cardDropped', 'cardCreated'].forEach(event => {
    context(event, () => {
      it('adds new card', () => {
        stub(_, 'in', (ms, cb) => cb())

        let fireEvent
        stub(global, 'CardsListObserver', (el, cb) => fireEvent = cb)

        new CardsList($cardsList)

        fireEvent({ [event]: true, addedCard: 'new card element' })

        expect(CardSpy).to.have.been.calledWith('new card element')
      })
    })
  })
})
