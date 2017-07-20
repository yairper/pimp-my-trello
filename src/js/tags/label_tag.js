function LabelTag ($label) {
  return a.span.text($label.name)
               .bgColor(_.rgba($label.color, .2))
}
