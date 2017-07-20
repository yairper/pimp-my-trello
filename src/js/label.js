class Label {
  constructor (element) {
    this.element = element
  }

  get name () {
    return this.iconName ||
           this.element.textContent.trim()
  }

  get type () {
    if (this.iconName)
      return 'icon'

    if (this.element.textContent.startsWith('epic: '))
      return 'epic'

    return 'label'
  }

  get iconName () {
    return _.match(
      this.element.textContent, /^fa-\S+/)
  }

  get iconTitle () {
    let titleMatch = _.match(
      this.element.textContent, /\s.+$/)

    return titleMatch && titleMatch.trim()
  }

  get epicName () {
    return this.element
               .textContent.replace('epic: ', '')
  }

  get color () {
    return window.getComputedStyle(this.element)
                 .getPropertyValue('background-color')
  }
}

