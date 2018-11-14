let player = 'x' || 'o';

const resetGrid = () => {
  grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
};
const insertSymbol = (symbol, x, y) => {
  grid[y][x] = symbol;

  drawGrid();
};

const clearChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const drawGrid = () => {
  const tableEl = document.querySelector('table');
  clearChildren(tableEl);

  for (let row of grid) {
    let rowEl = document.createElement('tr');

    for (let column of row) {
      let cellEl = document.createElement('td');

      let symbol = column;
      if (column === null) {
        symbol = ' ';
      }
      let cellTxt = document.createTextNode(symbol);
      cellEl.appendChild(cellTxt);
      rowEl.appendChild(cellEl);
    }
    tableEl.appendChild(rowEl);
  }
};
resetGrid();
insertSymbol('x', 2, 0);
insertSymbol('o', 1, 1);
drawGrid();
