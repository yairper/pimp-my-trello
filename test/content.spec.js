describe('Content', () => {
  afterEach(() => sandbox.restore())

  context('trello board exists', () => {
    beforeEach(() => 
      bodyHas(
        a.div('#content').with(
          a.div('.board-wrapper')
        )
      )
    )

    it('builds a board representation', () => {
      let BoardSpy = stub(global, 'Board')
      new Content()

      expect(BoardSpy).to.have.been.called
    })
  })

  context('trello board not yet loaded', () => {
    let contentElement = a.div('#content')

    beforeEach(() => bodyHas(contentElement))

    it('builds a board representation', (done) => {
      let BoardSpy = stub(global, 'Board')
      new Content()

      contentElement.appendChild(a.div('.board-wrapper'))

      _.in(30, () => {
        expect(BoardSpy).to.have.been.calledOnce
        done()
      })
    })
  })

  context('trello board switch', () => {
    let fireContentReloaded
    let BoardSpy

    let content      = a.div('#content')
    let boardWrapper = a.div('.board-wrapper')

    beforeEach(() => {
      bodyHas(
        content.with(boardWrapper)
      )
      BoardSpy = stub(global, 'Board')
    })

    it('builds a new board representation', (done) => {
      new Content()
      
      content.innerHTML = ''

      _.in(30, () => {
        BoardSpy.reset()

        content.appendChild(boardWrapper)

        _.in(30, () => {
          expect(BoardSpy).to.have.been.called
          done()
        })
      })
    })
  })
})
