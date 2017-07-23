describe('Board', () => {
  beforeEach(() => stub(global, 'injectFAFontFace'))
  afterEach(() => sandbox.restore())

  context('trello board exists', () => {
    let listCards = [a`.list-cards`, a`.list-cards`]

    beforeEach(() =>
      bodyHas(
        a`#content`.with(
          a`.board-wrapper`.with(
            a`#board`.with(...listCards)))
      )
    )

    it('builds lists', (done) => {
      let CardsList = spy(global, 'CardsList')
      new Board()

      _.in(0, () => {
        expect(CardsList.firstCall ).to.have.been.calledWith(listCards[0])
        expect(CardsList.secondCall).to.have.been.calledWith(listCards[1])
        done()
      })
    })
  })

  context('trello board not yet loaded', () => {
    let contentElement = a`#content`
    let listCards

    beforeEach(() => bodyHas(contentElement))

    it('builds a board representation', (done) => {
      let CardsList = spy(global, 'CardsList')
      new Board()

      let listCards = [a`.list-cards`, a`.list-cards`]
      contentElement.appendChild(a`.board-wrapper`.with(...listCards))

      _.in(10, () => {
        expect(CardsList.firstCall ).to.have.been.calledWith(listCards[0])
        expect(CardsList.secondCall).to.have.been.calledWith(listCards[1])
        done()
      })
    })
  })

  context('trello board switch', () => {
    it('builds a new board representation', (done) => {
      let listCards = [ a`.list-cards`,
                        a`.list-cards` ]

      let boardWrapper = a`.board-wrapper`.with(...listCards)
      let content      = a`#content`

      bodyHas(content.with(boardWrapper))

      let CardsList = spy(global, 'CardsList')

      new Board()

      content.innerHTML = ''

      _.in(10, () => {
        CardsList.reset()

        content.appendChild(boardWrapper)
      })

      _.in(20, () => {
        expect(CardsList.firstCall ).to.have.been.calledWith(listCards[0])
        expect(CardsList.secondCall).to.have.been.calledWith(listCards[1])
        done()
      })
    })
  })
})
