<div id="bookList"></div>
<script>
    var books = [
        {
            title: "Emerald City of Oz",
            authors: "L. Frank BAUM",
            description: 'First edition, first state, of the sixth Oz book, with 16 full-page color illustrations by John R. Neill, inscribed on the recto of the frontispiece, "Yours Very Ozily, L. Frank Baum. Ozcot at Hollywood, California. June 16, 1912."',
            image: "../A02/img/rb1.jpg",
            price: "₱1,400,000.",
            readMoreLink: ""
        },
        {
            title: "Autograph manuscript leaf from Walden",
            authors: "Henry David THOREAU",
            description:'A wonderful item: an original autograph manuscript leaf from Henry David Thoreau\'s masterpiece, Walden, including passages from the chapter "Higher Laws" where Thoreau discusses his moral ambivalence about fishing, and another from the "Baker\'s Farm" chapter that also features fishing.'    ,
            image: "../A02/img/rb2.jpg",
            price: "₱2,232,438",
            readMoreLink: ""
        },
        {
            title: 'Songs from "Now We Are Six."',
            authors: "Ernest H. SHEPARD   |   A. A. MILNE   |   H. FRASER-SIMSON",
            description: 'MILNE, A.A. (words). FRASER-SIMSON, H. (music). SHEPARD, E.H. (illustrations). Songs from "Now We Are Six." London: Methuen and Ascherberg, Hopwood & Crew, (1927). Folio, original half mustard cloth, brown paper boards, mounted printed pictorial label, original dust jacket. Housed in a half morocco clamshell box.',
            image: "../A02/img/rb3.jpg",
            price: "₱1,058,977",
            readMoreLink: ""
        },
        {
            title: "Law of God",
            authors: "Isaac LEESER",
            description: "First edition of the “first English translation of the Pentateuch in America,” the 1845 Hebrew-English Bible by one of the most prominent and influential figures in American Jewish history, in handsome full contemporary calf bindings.",
            image: "../A02/img/rb4.jpg",
            price: "₱1,259,324",
            readMoreLink: ""
        },
        {
            title: "Birds of America",
            authors: "John James AUDUBON",
            description: "Second octavo edition, the first edition with fully colored backgrounds, containing 500 superb hand-colored plates.",
            image: "../A02/img/rb5.jpg",
            price: "₱3,348,657",
            readMoreLink: ""
        },
    ];

    var container = document.getElementById("bookList");

    books.forEach(function (book) {
        container.innerHTML += `
        <div class="card mb-4 border-0 p-4" style="background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <div class="row g-4 align-items-center">
                <div class="col-md-4 text-center">
                    <img src="${book.image}" alt="Book" class="img-fluid" style="max-height: 300px; object-fit: contain;">
                </div>
                <div class="col-md-8">
                    <h5 class="fw-bold text-uppercase">${book.title}</h5>
                    <p class="mb-1">
                        <strong>${book.authors}</strong>
                    </p>
                    <p class="fst-italic text-secondary small">
                        ${book.description}
                    </p>
                    <a href="${book.readMoreLink}" class="read-more-link" 
                       style="color: black; text-decoration: none; font-weight: bold;"
                       onmousedown="this.style.color='#697565'" 
                       onmouseup="this.style.color='black'" 
                       onmouseout="this.style.color='black'">
                        READ MORE &raquo;
                    </a>
                    <div class="mt-3 d-flex flex-wrap gap-2">
                        <button class="btn" style="background-color: #697565;  color: #ECDFCC; font-weight: 500;">
                            <i class="fa-solid fa-star"></i> ADD TO MY WISHLIST
                        </button>
                        <button class="btn" style="background-color: #697565; color: #ECDFCC; font-weight: 500;">
                            <i class="fa-solid fa-cart-shopping"></i> ADD TO MY SHOPPING BAG
                        </button>
                    </div>
                    <p class="mt-3 fw-bold fs-5 text-end">${book.price}</p>
                </div>
            </div>
        </div>
        `;
    });
</script>