
let avatarimage = document.querySelector('.animatedPics img'); /*obtain img*/
let originalWidth = avatarimage.width; /* creaed a variable for width of the img*/
let increaseWidth = originalWidth; /* now assign a diffren variable width to enable increase */
document.querySelector('.animatedPics button').style.visibility = 'hidden';


function enlargeImage(){ /*function for enlargement*/
        increaseWidth++
        avatarimage.style.width = increaseWidth + 'px';/*width increase by pixels serverly*/
        
        if (increaseWidth == 400 ){ /*spicify he width */
        clearInterval(timer); /*reapeted calls of the enlarge function is stopped */
       increaseWidth = originalWidth; /*now assign increase width back o normal width so i shows recorrence*/

        document.querySelector('.animatedPics button').style.visibility = 'visible';
        
        }
}
avatarimage.addEventListener('click',() => { /*when clicked */
    timer = setInterval(enlargeImage,3); /*call this functiion above over 3secs*/
});


document.querySelector('#mybutton').addEventListener('click', reduceImage );

function reduceImage() {
    avatarimage.style.width = originalWidth + 'px';
    document.querySelector('.animatedPics button').style.visibility = 'hidden'
}




