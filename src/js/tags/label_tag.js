function LabelTag ($label) {
  let labelColor = _.rgba($label.color, 0.25)

  let el = $$.span.bgColor(labelColor)
                  .text($label.name)

  return el.$el
}
