function replcaeToggleMenuIcons () {
  let toggleLeftIcon = an.i`.fa.fa-lg.fa-angle-double-left`

  let openIcon = document.querySelector('.mod-show-menu .icon-sm')
      openIcon.className = 'fa fa-lg fa-angle-double-left'

  let closeIcon = document.querySelector('.board-menu-header-close-button')
      closeIcon.classList.remove('icon-lg', 'icon-close')
      closeIcon.classList.add('fa', 'fa-angle-double-right')
}
