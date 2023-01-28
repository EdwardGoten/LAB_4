const buildDefinitionList = (array) => {
    if (!array.length) return "";
    let html = "<dl>";
    for (let i = 0; i < array.length; i++) {
        html += `<dt>${array[i].term}</dt><dd>${array[i].definition}</dd>`;
  }
  html += "</dl>";
  return html;
}
let definitions = [{term: "Блямба", definition: "Выпуклость, утолщения на поверхности чего-либо"}, 
                    {term: "Борт", definition: "Животное из отряда грызунов"}]
console.log(buildDefinitionList(definitions))