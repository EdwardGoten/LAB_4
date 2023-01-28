const buildDefinitionList = (array) => {
    if (!array.length) return "";
    let html = "<dl>";
    for (let i = 0, j = 0; i < array.length; i++) {
        html += `<dt>${array[i][j]}</dt>`;
        html += `<dd>${array[i][j + 1]}</dd>`;
  }
  html += "</dl>";
  return html;
}

const definition = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
];

console.log(buildDefinitionList(definition));