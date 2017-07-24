describe('Card', () => {
  describe('constructor', () => {
    it('appends pmt tags', () => {
      let card = a.div.with(
                  a`.list-card-labels`.with(
                    a`.card-label`.text('name'),
                    a`.card-label`.text('fa-icon'),
                    a`.card-label`.text('epic: title')
                 ))

      new Card(card)

      let cardTags = card.querySelector('.pmt-card-tags').children

      expect(cardTags[0].tagName    ).to.eq('SPAN')
      expect(cardTags[0].textContent).to.eq('name')

      expect(cardTags[1].tagName    ).to.eq('I')
      expect(cardTags[1].className  ).to.eq('fa fa-icon')

      expect(cardTags[2].tagName    ).to.eq('DIV')
      expect(cardTags[2].textContent).to.eq('title')
    })
  })

  context('label added', () => {
    it('adds back the tags', (done) => {
      let labelsWrapper = a`.list-card-labels`
      let card = a.div.with(
                   labelsWrapper.with(
                     a`.card-label`.text('label#1')
                 ))
      bodyHas(card)
      new Card(card)

      let newLabel = a`.card-label`.text('label#2')
      labelsWrapper.appendChild(newLabel);

      (function imitateTrelloBehaviour () {
        labelsWrapper.removeChild(
          card.querySelector('.pmt-card-tags'))
      })()

      _.in(10, () => {
        let cardTags = card.querySelector('.pmt-card-tags').children

        expect(cardTags.length).to.eq(2)
        expect(cardTags[0].textContent).to.eq('label#1')
        expect(cardTags[1].textContent).to.eq('label#2')
        done()
      })
    })
  })

  context('label removed', () => {
    it('adds back the tags', (done) => {
      let labelsWrapper = a`.list-card-labels`
      let labelBeeingRemoved = a`.card-label`

      let card = a.div.with(
                   labelsWrapper.with(
                     a`.card-label`.text('label#1'),
                     labelBeeingRemoved
                 ))
      bodyHas(card)
      new Card(card)

      labelsWrapper.removeChild(labelBeeingRemoved)
      ;
      (function imitateTrelloBehaviour () {
        labelsWrapper.removeChild(
          card.querySelector('.pmt-card-tags'))
      })()

      _.in(10, () => {
        let cardTags = card.querySelector('.pmt-card-tags').children

        expect(cardTags.length).to.eq(1)
        expect(cardTags[0].textContent).to.eq('label#1')
        done()
      })
    })
  })
})
