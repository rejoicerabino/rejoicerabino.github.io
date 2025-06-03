const cards = [
    { title: "SWIM", img: "assets/img/swim.jpg", link: "#" },
    { title: "MEN'S", img: "assets/img/men.jpg", link: "#" },
    { title: "ACCESSORIES", img: "assets/img/accessories.png", link: "#" },
    { title: "APPAREL", img: "assets/img/apparel.png", link: "#" }
];

const cardCollections = document.getElementById("cardCollections");

function createCardElement(card) {
    const col = document.createElement("div");
    col.className = "col-6 col-lg-3 d-flex justify-content-center";
    col.style.maxWidth = "438px";

    const cardHtml = `
        <div class="card border-0 custom-card cursor-pointer">
            <img src="${card.img}" class="card-img-top" alt="${card.title}">
            <a href="${card.link}" class="btn custom-btn">
                ${card.title} <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    `;

    col.innerHTML = cardHtml;
    return col;
}

if (cardCollections) {
    cards.forEach(card => {
        const cardElement = createCardElement(card);
        cardCollections.appendChild(cardElement);
    });
}