var div = document.getElementById('absconder');
var size = parseInt(getComputedStyle(div).width);
var img1 = 'url("img/blue.png")';
var img2 = 'url("img/yellow.png")';
var count = 0;
var margin = 30;
document.addEventListener('mousemove', moveTo);
var cord = {
    mouseX: null,
    mouseY: null,
    width: null,
    height: null
};
div.addEventListener('mouseover', function (e) {
    count++;
    document.getElementById('demo').innerHTML = count;
    div.style.backgroundImage = img1;
    col();
});

function col() {
    setTimeout(function () {
        div.style.backgroundImage =img2;
        div.style.backgroundSize='cover';
    },2000)
}

function setLocation() {
    var cordinates = div.getBoundingClientRect();
    cord.width = Math.floor(Math.random() * window.innerWidth - size);
    cord.height = Math.floor(Math.random() * window.innerHeight - size);
    cord.width = cord.width < size ? cord.width += size : cord.width;
    cord.height = cord.height < size ? cord.height += size : cord.height;
    if (cord.mouseX >= cordinates.left - margin && cord.mouseX <= cordinates.right + margin &&
        cord.mouseY >= cordinates.top - margin && cord.mouseY <= cordinates.bottom + margin) {
        div.style.top = cord.height + 'px';
        div.style.left = cord.width + 'px';
    }
}

function moveTo(event) {
    cord.mouseX = event.clientX;
    cord.mouseY = event.clientY;
    setLocation();
}
