a = an = aBuilder = new Proxy(new Function (), {
  get (__, tagName) {
    let element = document.createElement(tagName)
    _.extend(aApi, element)
    
    return new Proxy(new Function (), {
      apply (target, _this, args) {
        let template = args[0]
        let idAndClasses

        if (typeof template == 'string')
          idAndClasses = template
        else
          idAndClasses = template.reduce(
            (full, part, idx) => full + part + (args[idx + 1] || ''),
            ''
          )

        let classes = idAndClasses.split('.')

        let idSelector = classes.splice(0, 1)[0]
        if (idSelector) {
          let id = idSelector.slice(1)
          element.setAttribute('id', id)
        }

        classes.forEach(c => element.classList.add(c))

        return element
      },

      get (__, property) {
        return aApi[property].bind(element)
      }
    })
  },

  apply (__, _this, args) {
    let idAndClasses = args[0][0]
    return a.div(idAndClasses)
  }
})

var aApi = {
  title (text) {
    this.setAttribute('title', text)

    return this
  },

  ['with'] (...children) {
    children.forEach(child => {
      this.appendChild(child)
    })
    return this
  },

  get animates () {
    return this
  },

  get in () {
    _.in(0, () => this.classList.add('animate-in'))

    return this
  },

  bgColor (color) {
    this.style.backgroundColor = color

    return this
  },

  color (color) {
    this.style.color = color

    return this
  },

  text (content) {
    this.textContent = content

    return this
  },

  html (inner) {
    this.innerHTML = inner

    return this
  },

  top (position) {
    this.style.top = position

    return this
  }
}
