var modal = document.getElementById("lightboxModal");
var modalImg = document.getElementById("lightboxImg");
var captionText = document.getElementById("caption");
var images = document.getElementsByClassName("gallery-img");
var closeBtn = document.getElementsByClassName("close")[0];

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src.replace("-small", "-large");
        captionText.innerHTML = this.alt;
    }
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}