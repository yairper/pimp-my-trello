function IconTag ($label) {
  return $$.i.class('fa', $label.iconName)
             .color($label.color)
             .$el
}
