$.fn.$ = $.fn.find
$.fn.forEach = Array.prototype.forEach

Object.defineProperty($.fn, 'notEmpty', {
  get () {
    return this.children().length 
  }
})

$.fn.observe = function (eventName, cb) {
  let observer = new MutationObserver(cb)

  if (eventName == 'childList')
    observer.observe(this[0], { childList: true })
}

Object.defineProperty($.fn, 'animate', {
  get () {
    let _this = this

    return {
      append (element) {
        _this.append(element)

        _.in(0, () => element.addClass('pmt-animate'))
      },

      remove () {
        _this.removeClass('pmt-animate')

        _.in(50, () => _this.remove())
      }
    }
  }
})

const originalMap  = $.fn.map

$.fn.map = function (cb) {
  if (cb.length == 1)
    return Array.prototype.map.call(this, cb)
  else
    return originalMap.call(this, cb)
}
