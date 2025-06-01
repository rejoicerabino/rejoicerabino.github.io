var cards = [
    { title: "SWIM", img: "assets/img/swim.jpg", link: "#" },
    { title: "MEN'S", img: "assets/img/men.jpg", link: "#" },
    { title: "ACCESSORIES", img: "assets/img/accessories.png", link: "#" },
    { title: "APPAREL", img: "assets/img/apparel.png", link: "#" }
]

var cardContainer = document.getElementById("cardContainer");

cards.forEach(function (card) {
    var col = document.createElement("div");
    col.className = "col-6 col-lg-3 d-flex justify-content-center";
    col.style.maxWidth = "438px";

    col.innerHTML =
        '<div class="card border-0 custom-card cursor-pointer">' +
        '<img src="' + card.img + '" class="card-img-top" alt="' + card.title + '">' +
        '<a href="' + card.link + '" class="btn custom-btn">' +
        card.title + ' <i class="fa-solid fa-arrow-right"></i>' +
        '</a>' +
        '</div>';

    cardContainer.appendChild(col);
});