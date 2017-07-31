HTMLElement.prototype.one = function (str, ...values) {
  let selector = templateToString([str, ...values])
  
  return this.querySelector(selector)
}

HTMLElement.prototype.all = function (str, ...values) {
  let selector = templateToString([str, ...values])
  
  return Array.from(this.querySelectorAll(selector))
}

doc = {
  all () {
    return HTMLElement.prototype.all.apply(document, arguments)
  },

  one () {
    return HTMLElement.prototype.one.apply(document, arguments)
  }
}
