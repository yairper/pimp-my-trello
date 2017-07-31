Board = function () {
  injectFAFontFace()

  this.onBoardLoad(() => this._build())
}

Board.prototype = {
  get hasBoardWrapper () {
    return doc.one`.board-wrapper`
  },

  onBoardLoad (cb) {
    if (this.hasBoardWrapper)
      this._build()

    let boardHasBeenLoaded = new MutationObserver(() => {
      if (this.hasBoardWrapper) {
        cb()
      }
    })

    let content = doc.one`#content`
    boardHasBeenLoaded.observe(content, { childList: true })
  },

  _build() {
    _.in(1000, () => {
       replcaeToggleMenuIcons()
       injectTagsFilter()
    })

    let lists = doc.all`.list-cards`
    _.in(0, () => lists.each(l => new CardsList(l)))
  }
}

UniqueLabels = function () {
  let allLabels = doc.all`.card-label`

  let uniqueLabels = allLabels.reduce((unique, label) => {
    if (!unique.find(l => l.textContent == label.textContent))
      unique.push(label)

    return unique
  }, [])

  return uniqueLabels.map(l => new Label(l))
}

Array.prototype.each = Array.prototype.forEach

Array.prototype.as = function (module) {
  this.each(item => { _.extend(module, item); module.included.call(item) })
  return this
}

injectTagsFilter = function () {
  let rightMenuToggleButton = doc.one`.mod-right`
  let tagsFilter =
    a`#tags-filter`.with(
      TagsList(UniqueLabels()),
      an.i`.fa.fa-lg.fa-tags`
    )
  rightMenuToggleButton.appendChild(tagsFilter)

  let lists = doc.all`.list-cards`
  lists.each(list =>
    CardCreatedObserver(list,
      _toggleCardVisibilityByFilters)
  )

  let cards = doc.all`.list-card`.as(Card.prototype)

  cards.each(card => {
    card.onLabelsChange(() => {
      _toggleCardVisibilityByFilters(card)
    })
  })

  let tags = rightMenuToggleButton.all`.pmt-card-tags > *`

  tags.each(tag => {
    tag.onclick = e => {
      tag.classList.toggle('selected')

      tagsFilter.classList.remove('has-some-selected-tags')

      let selectedFilters = tagsFilter.all`.selected`
      if (selectedFilters.length)
        tagsFilter.classList.add('has-some-selected-tags')

      doc.all`.list-card`.each(
        _toggleCardVisibilityByFilters)
    }
  })
}

function _toggleCardVisibilityByFilters(card) {
  let selectedFilters = doc.all`#tags-filter .selected`
  let cardTags = card.all`.pmt-card-tags > *`

  let hasAllFilteredTags = selectedFilters.every(filter =>
    cardTags.some(tag =>
      filter.tagName     == tag.tagName &&
      filter.textContent == tag.textContent &&
      (filter.tagName == 'I' ?
       filter.style.color == tag.style.color :
       filter.className.includes(tag.className) &&
       filter.style.backgroundColor == tag.style.backgroundColor)
    ))

  card.classList.remove('hide')

  if (!hasAllFilteredTags)
    card.classList.add('hide')
}
