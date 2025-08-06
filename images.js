let choice = ['wp.jpg', 'G.jpg', 'SuperMan.jpg', 'tai lung.jpg'];
let currentIndex = 0;
let main = document.querySelector('#zdj');
    function Show(index){
    main.src = choice[index];
}
    document.addEventListener('DOMContentLoaded', function(){    
    let left = document.querySelector('#left');
    let right = document.querySelector('#right');
    

    left.addEventListener('click', () => {
        currentIndex--;  
        if (currentIndex < 0) {
            currentIndex = 3; 
        }
        Show(currentIndex); // Update the main image
        })


    right.addEventListener('click', () => {
        currentIndex++;  
        if (currentIndex > 3) {
            currentIndex = 0;  
        }
        Show(currentIndex);
    })
    
        let change = document.querySelectorAll('img[data-img]'); 
        change.forEach((img, index) => {             
            img.addEventListener('click', () =>{
                Show(index);
                currentIndex = index;
            })
        })
    }) 
