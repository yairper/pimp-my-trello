describe('Board', () => {
  afterEach(() => sandbox.restore())

  context('trello board exists', () => {
    beforeEach(() =>
      bodyHas(
        a`#content`.with(
          a`.board-wrapper`.with(
            a`#board`.with(
              a`.list-cards`,
              a`.list-cards` )))
      )
    )

    it('builds a lists', (done) => {
      let CardsList = spy(global, 'CardsList')
      new Board()

      _.in(0, () => {
        expect(CardsList).to.have.been.calledTwice
        done()
      })
    })
  })

  context('trello board not yet loaded', () => {
    let contentElement = a`#content`

    beforeEach(() => bodyHas(contentElement))

    it('builds a board representation', (done) => {
      let CardsList = spy(global, 'CardsList')
      new Board()

      contentElement.appendChild(a`.board-wrapper`.with(
                                    a`.list-cards`,
                                    a`.list-cards`))

      _.in(50, () => {
        expect(CardsList).to.have.been.calledTwice
        done()
      })
    })
  })

  context('trello board switch', () => {
    let fireContentReloaded
    let BoardSpy

    let content      = a`#content`
    let boardWrapper = a`.board-wrapper`.with(
                          a`.list-cards`,
                          a`.list-cards`)

    beforeEach(() => {
      bodyHas(
        content.with(boardWrapper)
      )
      CardsList = spy(global, 'CardsList')
    })

    it('builds a new board representation', (done) => {
      new Board()

      content.innerHTML = ''

      _.in(35, () => {
        CardsList.reset()

        content.appendChild(boardWrapper)

        _.in(35, () => {
          expect(CardsList).to.have.been.called
          done()
        })
      })
    })
  })
})
