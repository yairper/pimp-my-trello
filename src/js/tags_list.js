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

  return a.div('.pmt-card-tags')
          .with(...labels.concat(icons, epics))
}

EpicTag = function (label) {
  return a.div('.pmt-card-epic')
               .text(label.epicName)
               .bgColor(_.rgba(label.color, .2))
}
