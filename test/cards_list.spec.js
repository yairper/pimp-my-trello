describe('CardsList', () => {
  afterEach(() => sandbox.restore())

  let cardsList
  let CardSpy

  beforeEach(() => {
    bodyHas(
      a`.list-cards`.with(
        a`.list-card`,
        a`.list-card`,
        a`.list-card.hide`,
        a`.list-card.placeholder`))

    cardsList = document.querySelector('.list-cards')

    CardSpy = stub(global, 'Card')
  })

  describe('constructor', () => {
    it('builds cards', () => {
      new CardsList(cardsList)

      expect(CardSpy).to.have.been.calledThrice
    })
  });

  context('card created', () => {
    it('creates new card', (done) => {
      new CardsList(cardsList)
      CardSpy.reset()

      cardsList.appendChild(a`.list-card.is-due-completed`)

      _.in(50, () => {
        expect(CardSpy).to.have.been.calledOnce
        done()
      })
    })
  })
})
