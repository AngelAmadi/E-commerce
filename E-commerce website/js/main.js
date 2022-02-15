document.getElementById('formM').addEventListener('submit',(e)=> {
    e.preventDefault();

    alert("Your email has been submitted successfully for news updates!");
    location.reload();
})
let dark = document.querySelector('.dark span'); /* my moon is selected and variable is set*/
let light = document.querySelector('.light span');/* my sun is selected and variable is set*/
let Conav =document.querySelector('nav'); /* my nav area is selected and variable is set*/
let Conav2 =document.querySelector('nav .main-Ul'); /* my list is set and variable is set*/
let Conav3 =document.querySelectorAll('.main-Ul a' ); /*  another variable used for anchor text */
let foot = document.querySelector('.stationFooter');


let sec2 = document.querySelector('.sectionTwo')
let inc = document.querySelector('.fontInc');/* my A+ is selected and variable is set*/
let norm = document.querySelector('.fontNom');/* my A is selected and variable is set*/
let dec = document.querySelector('.fontDec');/* my A- is selected and variable is set*/

dark.addEventListener('click', ()=>{ /*  a listener is added when i click on my moon and a unanimous function is followed*/
    Conav.setAttribute('class', 'darker'); /* which set the feature of class darker, styled in my css*/
    Conav2.setAttribute('class', 'darker2');/* which set the feature of class darker2, styled in my css*/
   
    localStorage.colour = 'black';
    foot.setAttribute('class', 'darkstationFooter');
    sec2.setAttribute('class', 'secdark');
});

light.addEventListener('click', ()=>{
    Conav.setAttribute('class', 'lighter');
    Conav2.setAttribute('class', 'lighter2');

    localStorage.colour = 'white';
    foot.setAttribute('class', 'lightstationFooter');
    sec2.setAttribute('class', 'seclight');
});


inc.addEventListener('click', ()=>{ /*  a listener is added when i click on my sun and a unanimous function is followed*/
    for (let i = 0 ;i < Conav3.length; i++) { /* counter runs as many times as the list items length  */
        Conav3[i].setAttribute('id', 'bigbtn');  /* which sets the feature of A+'s id , styled in my css uses array*/
    }
    localStorage.size= 'bigg';
});
dec.addEventListener('click', ()=>{
    for (let i = 0 ;i < Conav3.length; i++) {
        Conav3[i].setAttribute('id', 'smallbtn'); 
    }
    localStorage.size= 'small';
});
norm.addEventListener('click', ()=>{
    for (let i = 0 ;i < Conav3.length; i++) {
        Conav3[i].setAttribute('id', 'normbtn'); 
    }
    localStorage.size= 'normm';
});

if (localStorage.size == 'bigg'){
    for (let i = 0 ;i < Conav3.length; i++) {  
        Conav3[i].setAttribute('id', 'bigbtn'); 
    }
}

else if (localStorage.size == 'small'){
    for (let i = 0 ;i < Conav3.length; i++) {
        Conav3[i].setAttribute('id', 'smallbtn'); 
    }
}
else{
    for (let i = 0 ;i < Conav3.length; i++) {
        Conav3[i].setAttribute('id', 'normbtn'); 
    }
}

if (localStorage.colour == 'black'){
    Conav.setAttribute('class', 'darker'); /* which set the feature of class darker, styled in my css*/
    Conav2.setAttribute('class', 'darker2');/* which set the feature of class darker2, styled in my css*/
    foot.setAttribute('class', 'darkstationFooter');
    sec2.setAttribute('class', 'secdark');
}
else {
    Conav.setAttribute('class', 'lighter');
    Conav2.setAttribute('class', 'lighter2');
    foot.setAttribute('class', 'lightstationFooter');
    sec2.setAttribute('class', 'seclight');
}


/****************************************************/
let sliderImg = document.querySelector('.myslide-img');
let otherImg = ['orange.jpg','beets.jpg','apple.jpg'];
let i = 0; 

previous = document.querySelector('.prev');
previous.addEventListener('click', ()=>{ 
    if(i <= 0) i = otherImg.length;
    i--;
    return stableImg();
});

following = document.querySelector('.next');
following.addEventListener('click', ()=>{ 
    if(i >= otherImg.length -1) i = -1;
    i++;
    return stableImg();
}); 

function move() {
    if(i >= otherImg.length -1) i = -1;
    i++;
    return stableImg();
}
function stableImg(){
 return sliderImg.setAttribute('src','images/' + otherImg[i])
}
const myInterval= setInterval(move,3000);
/****************************************************/

