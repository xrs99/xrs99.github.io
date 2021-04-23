function myfunction() {   
    var sourceOfPicture = "images/turtwig-test.jpg";
    var img = document.getElementById('bigpic')
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block"; 
}  