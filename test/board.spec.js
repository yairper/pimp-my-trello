describe('Board', () => {
  afterEach(() => sandbox.restore())

  let $board

  before(() => {
    bodyHas(
      a`#board`.with(
        a`.list-cards`,
        a`.list-cards`,
        a`.list-cards`
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
