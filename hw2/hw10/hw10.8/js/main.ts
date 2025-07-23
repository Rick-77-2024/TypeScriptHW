// #kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const table = document.getElementById('table') as HTMLTableElement;
const tableGeneratorFrom = document.forms['tableGeneratorFrom'] as HTMLFormElement & {
 lines: { value: string };
 cells: { value: string };
 data: { value: string };
};
if (tableGeneratorFrom && table) {
 tableGeneratorFrom.onsubmit = function (e: Event) {
  table.innerText = '';
  e.preventDefault();
  const linesValue = +tableGeneratorFrom.lines.value;
  const cellsValue = +tableGeneratorFrom.cells.value;
  const dataValue = tableGeneratorFrom.data.value;
  for (let i = 0; i < linesValue; i++) {
   const tr = document.createElement('tr');
   for (let j = 0; j < cellsValue; j++) {
    const td = document.createElement('td');
    td.innerText = dataValue;
    tr.appendChild(td);
   }
   table.appendChild(tr);
  }
 };
}

