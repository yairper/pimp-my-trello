describe('Board', () => {
  afterEach(() => sandbox.restore())

  let $board

  before(() => {
    bodyHas(
      a.div('#board').with(
        a.div('.list-cards'),
        a.div('.list-cards'),
        a.div('.list-cards')
      )
    )
  })

  describe('constructor', () => {
    it('builds lists representation', () => {
      let CardsListSpy = spy(global, 'CardsList')

      new Board()

      expect(CardsListSpy).to.have.been.calledThrice
    })
  })
})
