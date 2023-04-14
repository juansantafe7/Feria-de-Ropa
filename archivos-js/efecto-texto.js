let typed = new Typed('.auto-input',{

    strings: ['excelente calidad','última moda', 'precios accesibles'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true,

})

let typed02 = new Typed('.auto-input-02',{

    strings: ['Facebook','Twitter', 'Instagram'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true,

})


function responsiveMenu(){

    var x = document.getElementById('nav');
    if(x.className === ''){

        x.className = 'responsive';

    }else{

        x.className = ''; 

    }
    
}