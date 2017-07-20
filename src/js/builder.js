a = new Proxy(new Function (), {
  get (__, tagName) {
    let element = document.createElement(tagName)
    _.extend(aApi, element)
    
    return new Proxy(function () {}, {
      apply (target, _this, idsAndClasses) {
        let classes = idsAndClasses[0].split('.')
        if (classes[0].startsWith('#')) {
          let idSelector = classes.splice(0, 1)[0]
          let id = idSelector.slice(1)
          element.setAttribute('id', id)
        } else {
          classes.splice(0, 1)
        }

        classes.forEach(c => element.classList.add(c))

        return element
      },

      get (__, property) {
        return aApi[property].bind(element)
      }
    })
  }
})

an = a

const animateFlag = Symbol()

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

  get animate () {
    this[animateFlag] = true

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

  top (position) {
    this.style.top = position

    return this
  }
}
