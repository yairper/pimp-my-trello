Board = function () {
  let lists = document.querySelectorAll('.list-cards')
  lists.forEach(l => new CardsList(l))
}
