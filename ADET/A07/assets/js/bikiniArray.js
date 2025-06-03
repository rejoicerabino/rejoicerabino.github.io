const cardsData = [
    { title: "Isla Tie-Front Bikini", text: "Tropical florals in lush greens and coral tones", price: "2,850", img: "assets/img/isla.jpg" },
    { title: "Amos Shell Bikini", text: "Sea-inspired with shell charm details", price: "2,650", img: "assets/img/amos.jpg" },
    { title: "Calypso Cutout Bikini", text: "A pure white bikini with graceful cut-outs and a central ring", price: "2,950", img: "assets/img/calypso.jpg" },
    { title: "Malia Ruffle Bikini", text: "Floral print elegance with soft ruffled edges", price: "2,780", img: "assets/img/malia.png" },
    { title: "Luna Polka Bikini", text: "One piece swimsuit with classic 60s polka dots", price: "2,600", img: "assets/img/luna.jpg" },
    { title: "Harlow Halter Bikini", text: "Ruched cups and retro glamour in sky blue", price: "2,900", img: "assets/img/harlow.jpg" },
    { title: "Venus Belted Bikini", text: "Vintage belt detail in sage green", price: "2,700", img: "assets/img/venus.jpg" },
    { title: "Aubrey Pleated Bikini", text: "Elegant pleats in crisp white and dark brown", price: "3,050", img: "assets/img/aubrey.jpg" },
    { title: "Sloane Ribbed Bikini", text: "Structured fit with ribbed fabric in pastel green", price: "2,720", img: "assets/img/sloane.jpg" },
    { title: "Cambridge Check Bikini", text: "Preppy checkered pattern with gold accents", price: "2,990", img: "assets/img/cambridge.jpg" }
];

const cardsContainer = document.getElementById("cardsContainer");

function createCardElement(card) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 col-xl-3 mb-4";

    const cardHtml = `
        <div class="card border-0 shadow-sm h-100 rounded">
            <img src="${card.img}" class="card-img-top" alt="${card.title}" style="height: 350px; object-fit: cover;">
            <div class="card-body px-0 mx-2">
                <h6 class="fw-bold mb-1">${card.title}</h6>
                <p class="text-muted small mb-1">${card.text}</p>
                <p class="fw-bold mb-0">₱${card.price}</p>
            </div>
        </div>
    `;

    col.innerHTML = cardHtml;
    return col;
}

if (cardsContainer) {
    cardsData.forEach(card => {
        const cardElement = createCardElement(card);
        cardsContainer.appendChild(cardElement);
    });
}