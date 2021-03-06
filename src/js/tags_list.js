TagsList = function (labels) {
  let raws =
    labels.filter(l => l.type == 'label')
          .map(l => LabelTag(l))

  let icons =
    labels.filter(l => l.type == 'icon')
          .map(l => IconTag(l))

  let epics =
    labels.filter(l => l.type == 'epic')
          .map(l => EpicTag(l))

  return a`.pmt-card-tags`
           .animates.in
           .with(...raws.concat(icons, epics))
}

function LabelTag (label) {
  return a.span.text(label.name)
               .bgColor(_.rgba(label.color, .2))
}

function EpicTag (label) {
  return a`.pmt-card-epic`
           .bgColor(_.rgba(label.color, .2))
           .with(
             an.i`.fa.fa-fw.fa-hashtag`,
             a.span.text(label.epicName)
           )
}

function IconTag (label) {
  let tag = an.i`.fa.${label.iconName}`
                 .color(label.color)

  if (label.iconTitle)
    tag.title(label.iconTitle)

  return tag
}
