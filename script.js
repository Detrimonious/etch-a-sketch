let gridAmount = 16;
const CONTAINER_MAX_WIDTH = 960;
const containerDiv = document.querySelector('#container');

const btn = document.querySelector('button');
btn.addEventListener('click', function() {

    //removes all divs inside container div
    while(containerDiv.firstChild){
        containerDiv.removeChild(containerDiv.firstChild);
    }

    do{
        gridAmount = prompt('Enter a new grid amount');
    }while(gridAmount <= 0 || gridAmount > 100 || gridAmount == null || gridAmount == '')

    createGrids(gridAmount);
    
});

createGrids(gridAmount);

function createGrids(gridAmount){

    let repeatSize = CONTAINER_MAX_WIDTH / gridAmount;

    containerDiv.style.cssText=`grid-template-rows: repeat(${gridAmount}, ${repeatSize}px); grid-template-columns: repeat(${gridAmount}, ${repeatSize}px)`;

    for (let i=0; i<gridAmount; i++){
        for (let j=0; j<gridAmount; j++){
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('grid-item');

            let brightnessLevel = 100;

            gridDiv.addEventListener('mouseover', function(e){

                let r = Math.floor(Math.random()*256);
                let g = Math.floor(Math.random()*256);
                let b = Math.floor(Math.random()*256);

                gridDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                
                // makes the square black by the 10th pass or hover-over
                if (brightnessLevel > 0){
                    brightnessLevel -= 10;
                }

                gridDiv.style.filter = `brightness(${brightnessLevel}%)`;
            });

            containerDiv.appendChild(gridDiv);
        }
    }
}