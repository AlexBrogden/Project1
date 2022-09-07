const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === '/images/cat.png') {
        myImage.setAttribute('src', '/images/cat2.jpg');
        alert('You should feel ashamed');
    } else {
        myImage.setAttribute('src', '/images/cat.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Hello there, ${myName}`;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Hello there, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
}