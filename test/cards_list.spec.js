describe('CardsList', () => {
  afterEach(() => sandbox.restore())

  let cardsList
  let cards
  let CardSpy

  beforeEach(() => {
    cards = [ a`.list-card`,
              a`.list-card`,
              a`.list-card.hide` ]

    bodyHas(a`.list-cards`.with(...cards))

    cardsList = document.querySelector('.list-cards')

    CardSpy = stub(global, 'Card')
  })

  describe('constructor', () => {
    it('builds cards', () => {
      new CardsList(cardsList)

      expect(CardSpy.firstCall ).to.have.been.calledWith(cards[0])
      expect(CardSpy.secondCall).to.have.been.calledWith(cards[1])
      expect(CardSpy.thirdCall ).to.have.been.calledWith(cards[2])
    })
  });

  context('card created', () => {
    it('creates new card', (done) => {
      new CardsList(cardsList)
      CardSpy.reset()

      let newCard = a`.list-card.is-due-completed.active-card`
      cardsList.appendChild(newCard)

      _.in(10, () => {
        expect(CardSpy).to.have.been.calledWith(newCard)
        done()
      })
    })
  })

  context('card dropped', () => {
    it('creates new card', (done) => {
      let cardPlaceholder = a`.list-card.placeholder`
      let blinkingCard    = a`.list-card.js-member-droppable`
      let cardDropped     = a`.list-card.js-member-droppable`

      new CardsList(cardsList)
      CardSpy.reset()

      cardsList.appendChild(cardPlaceholder)

      _.in(0, () => {
        cardsList.removeChild(cardPlaceholder)
        cardsList.appendChild(blinkingCard)
      })
      _.in(100, () => {
        cardsList.removeChild(blinkingCard)
        cardsList.appendChild(cardDropped)
      })
      _.in(110, () => {
        expect(CardSpy).to.have.been.calledWith(cardDropped)
        done()
      })
    })
  })
})
