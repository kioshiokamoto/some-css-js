

function sortTableByColumn(table, column, asc = true){
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
    
    const sortedRows = rows.sort((a,b)=> {
        const aColText = a.querySelector(`td:nth-child(${column+1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column+1})`).textContent.trim();
        if(Number.isInteger(parseInt(aColText))){
            //falta pulir sorting
            return (aColText - bColText) ? (1* dirModifier) : (-1 * dirModifier);
        }
        return aColText > bColText ? (1* dirModifier) : (-1 * dirModifier);
    
    });
    //Borrar elementos
    while(tBody.firstChild){
        tBody.removeChild(tBody.firstChild);
    }
    //Ingresar datos a tabla
    tBody.append(...sortedRows);

    // Recordar como esta ordenado
    table.querySelectorAll('th').forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc",asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc",!asc);
}

//sortTableByColumn(document.querySelector('table'), 2, false);

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", ()=>{
        //Seleccionar tabla
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        //Indice de columna
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        //Verificar si la tabla ya tiene un sort ascendente
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");
        sortTableByColumn(tableElement,headerIndex,!currentIsAscending);
    })
})