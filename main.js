
const container = document.querySelector('.container');

const grayScale = document.querySelector('.grayscale');
const rgb = document.querySelector('.rgb');
const reset = document.querySelector('.reset');
const clear = document.querySelector('.clear');

let isGrayScale = 1;

let Dim = parseInt(prompt("Please entergrid dimensions:"));

let numDivs;

function createDiv(size){
    const ele = document.createElement('Div');
    ele.style.border = "0.1px solid black"
    ele.style.width = `${size}px`;
    ele.style.height = `${size}px`;
    ele.style.margin = 0;

    return ele;
}

function generateGrid(Dim){
    // 400 px width and height

    if(Dim>100){
        Dim = prompt("Please re-enter grid dimensions below 100:")
    }
    
    const sizeWithoutBorder = (400.0)/(Dim);
    const size = sizeWithoutBorder-2;
    numDivs = Math.floor((400.0*400.0)/(sizeWithoutBorder*sizeWithoutBorder));

    for(let i=0;i<numDivs;i++){
        let gridDiv = createDiv(size);
        container.appendChild(gridDiv);
    }

    let divArr = [...container.childNodes];

    divArr.forEach(
        (div)=>{
            div.addEventListener('mouseover',(event)=>{
                event.target.style['background-color']='black';
            })
        }
    )
}


function removeGrid(){
    while(container.firstChild){        // until a child remove all
        container.removeChild(container.firstChild);
    }
}


clear.addEventListener('click',()=>{
    removeGrid();
    Dim = parseInt(prompt("Please entergrid dimensions:"));
    generateGrid(Dim);
})

reset.addEventListener('click', ()=>{
    let divArr = [...container.childNodes];

    divArr.forEach(
        (ele)=>{
            ele.style['background-color']='white';
        }
    );
    
});





// start 

generateGrid(Dim);