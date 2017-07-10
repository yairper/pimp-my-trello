function LabelTag ($label) {
  let labelColor = _.rgba($label.color, 0.25)

  return `
    <span style="background-color: ${labelColor};">
      ${$label.name}
    </span>
  `
}

