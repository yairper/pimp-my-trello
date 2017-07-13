function LabelTag ($label) {
  let labelColor = _.rgba($label.color, 0.25)

  return a.span.bgColor(labelColor)
               .text($label.name)
}
