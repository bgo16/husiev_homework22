const grid = new gridjs.Grid({
  columns: Array(10)
    .fill()
    .map(() => {
      return 'Column';
    }),
  data: Array(10)
    .fill()
    .map((a, idx) => {
      return Array(10)
        .fill()
        .map((a, idx1) => {
          return idx1 + 1 + idx * 10;
        });
    })
});
const button = document.querySelector('.button');

button.addEventListener('click', function () {
  grid.render(document.querySelector('.grid'));
});
