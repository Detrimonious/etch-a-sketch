const containerDiv = document.querySelector('#container');
containerDiv.style.cssText = 'grid-template-rows: repeat(16, minmax(50px, 1fr)); grid-template-columns: repeat(16, minmax(50px, 1fr))';

function createGrids(){
    for (let i=0; i<16; i++){
        const gridDiv = document.createElement('div');
        containerDiv.appendChild(gridDiv);
    }
}