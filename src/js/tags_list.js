TagsList = function (card) {
  let labels =
    card.labels.filter(l => l.type == 'label')
               .map(l => LabelTag(l))

  let icons =
    card.labels.filter(l => l.type == 'icon')
               .map(l => IconTag(l))

  let epics =
    card.labels.filter(l => l.type == 'epic')
               .map(l => EpicTag(l))

  return a`.pmt-card-tags`
           .with(...labels.concat(icons, epics))
}

function LabelTag (label) {
  return a.span.text(label.name)
               .bgColor(_.rgba(label.color, .2))
}

function EpicTag (label) {
  return a`.pmt-card-epic`
           .text(label.epicName)
           .bgColor(_.rgba(label.color, .2))
}

function IconTag (label) {
  let tag = an.i`.fa.${label.iconName}`
                 .color(label.color)

  if (label.iconTitle)
    tag.title(label.iconTitle)

  return tag
}
