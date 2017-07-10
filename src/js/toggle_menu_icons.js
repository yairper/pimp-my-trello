let toggleLeftIcon =
      '<i class="fa fa-lg fa-angle-double-left"></i>'

let $openIcon = $('.mod-show-menu .icon-sm')
    $openIcon.replaceWith(toggleLeftIcon)

let $closeIcon = $('.board-menu-header-close-button')
    $closeIcon.removeClass('icon-lg icon-close')
              .addClass('fa fa-angle-double-right')
