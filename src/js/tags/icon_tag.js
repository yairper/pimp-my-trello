function IconTag (label) {
  let tag = an.i(`.fa.${label.iconName}`)
                 .color(label.color)

  if (label.iconTitle)
    tag.title(label.iconTitle)

  return tag
}
