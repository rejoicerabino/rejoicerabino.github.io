var products = [
    {
        "category": "Refreshments",
        "contents": [
            {
                "isAvailable": true,
                "name": "San Pellegrino Limonata",
                "code": "SPLM",
                "img": "assets/img/limonata.png",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 180
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 220
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 260
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "San Pellegrino Aranciata",
                "code": "SPAR",
                "img": "assets/img/aranciata.png",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 180
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 220
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 260
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Chinotto",
                "code": "CHNT",
                "img": "assets/img/chinotto.png",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 200
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 240
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 280
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Crodino",
                "code": "CRD",
                "img": "assets/img/crodino.png",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 190
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 230
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 270
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Cedrata",
                "code": "CDRT",
                "img": "assets/img/cedrata.png",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 190
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 230
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 270
                    }
                ]
            }
        ]
    },

    {
        "category": "Alcoholic Drinks",
        "contents": [
            {
                "isAvailable": true,
                "name": "Prosecco",
                "code": "PRSC",
                "servings": [
                    {
                        "name": "glass",
                        "code": "GLS",
                        "price": 450,
                        "img": "assets/img/GProsecco.png"
                    },
                    {
                        "name": "bottle",
                        "code": "BTL",
                        "price": 1800,
                        "img": "assets/img/BProsecco.png"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Chianti",
                "code": "CHNT",
                "servings": [
                    {
                        "name": "glass",
                        "code": "GLS",
                        "price": 520,
                        "img": "assets/img/GChianti.png"
                    },
                    {
                        "name": "bottle",
                        "code": "BTL",
                        "price": 2000,
                        "img": "assets/img/BChianti.png"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Barolo",
                "code": "BRLO",
                "servings": [
                    {
                        "name": "glass",
                        "code": "GLS",
                        "price": 750,
                        "img": "assets/img/GBarolo.png"
                    },
                    {
                        "name": "bottle",
                        "code": "BTL",
                        "price": 3000,
                        "img": "assets/img/BBarolo.png"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Amarone",
                "code": "AMRN",
                "servings": [
                    {
                        "name": "glass",
                        "code": "GLS",
                        "price": 820,
                        "img": "assets/img/GAmarone.png"
                    },
                    {
                        "name": "bottle",
                        "code": "BTL",
                        "price": 3300,
                        "img": "assets/img/BAmarone.png"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Limoncello",
                "code": "LMCL",
                "servings": [
                    {
                        "name": "glass",
                        "code": "GLS",
                        "price": 350,
                        "img": "assets/img/GLimoncello.png"
                    },
                    {
                        "name": "bottle",
                        "code": "BTL",
                        "price": 1400,
                        "img": "assets/img/BLimoncello.png"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Asti Spumante",
                "code": "ASTI",
                "servings": [
                    {
                        "name": "glass",
                        "code": "GLS",
                        "price": 480,
                        "img": "assets/img/GAsti.png"
                    },
                    {
                        "name": "bottle",
                        "code": "BTL",
                        "price": 1900,
                        "img": "assets/img/BAsti.png"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Montepulciano D' Abruzzo",
                "code": "MDA",
                "servings": [
                    {
                        "name": "glass",
                        "code": "GLS",
                        "price": 390,
                        "img": "assets/img/GMda.png"
                    },
                    {
                        "name": "bottle",
                        "code": "BTL",
                        "price": 1600,
                        "img": "assets/img/BMda.png"
                    }
                ]
            }
        ]
    },

    {
        "category": "Pasta",
        "contents": [
            {
                "isAvailable": true,
                "name": "Spaghetti alla Carbonara",
                "code": "CBNR",
                "price": 560,
                "img": "assets/img/carbonara.png"
            },
            {
                "isAvailable": true,
                "name": "Penne all'Arrabbiata",
                "code": "ARRB",
                "price": 455,
                "img": "assets/img/arrabbiata.png"
            },
            {
                "isAvailable": true,
                "name": "Lasagna",
                "code": "LSGN",
                "price": 560,
                "img": "assets/img/lasagna.png"
            },
            {
                "isAvailable": true,
                "name": "Fettuccine Alfredo",
                "code": "FTTA",
                "price": 530,
                "img": "assets/img/alfredo.png"
            },
            {
                "isAvailable": true,
                "name": "Ravioli di Ricotta",
                "code": "RVLC",
                "price": 880,
                "img": "assets/img/ravioli.png"
            },
            {
                "isAvailable": true,
                "name": "Tagliatelle al Ragù",
                "code": "TAGR",
                "price": 560,
                "img": "assets/img/ragu.png"
            },
            {
                "isAvailable": true,
                "name": "Gnocchi al Pesto",
                "code": "GNCP",
                "price": 750,
                "img": "assets/img/gnocchi.png"
            }
        ]
    },

    {
        "category": "Pizza",
        "contents": [
            {
                "isAvailable": true,
                "name": "Margherita",
                "code": "MARG",
                "price": 455,
                "img": "assets/img/Margherita.png"
            },
            {
                "isAvailable": true,
                "name": "Quattro Stagioni",
                "code": "4STG",
                "price": 480,
                "img": "assets/img/Stagioni.png"
            },
            {
                "isAvailable": true,
                "name": "Diavola",
                "code": "DIAV",
                "price": 460,
                "img": "assets/img/Diavola.png"
            },
            {
                "isAvailable": true,
                "name": "Capricciosa",
                "code": "CAPR",
                "price": 490,
                "img": "assets/img/Capricciosa.png"
            },
            {
                "isAvailable": true,
                "name": "Prosciutto e Funghi",
                "code": "PRSF",
                "price": 480,
                "img": "assets/img/Funghi.png"
            }
        ]
    },
    {
        "category": "Steak",
        "contents": [
            {
                "isAvailable": true,
                "name": "Bistecca alla Fiorentina",
                "code": "BSTF",
                "price": 900,
                "img": "assets/img/Bistecca.png"
            },
            {
                "isAvailable": true,
                "name": "Tagliata di Manzo",
                "code": "TAGM",
                "price": 950,
                "img": "assets/img/Tagliata.png"
            },
            {
                "isAvailable": true,
                "name": "Filetto al Pepe Verde",
                "code": "FLPV",
                "price": 980,
                "img": "assets/img/Filetto.png"
            },
            {
                "isAvailable": true,
                "name": "Scaloppine al Vino Bianco",
                "code": "SCVB",
                "price": 900,
                "img": "assets/img/Scaloppine.png"
            },
            {
                "isAvailable": true,
                "name": "Cotoletta alla Milanese",
                "code": "CTML",
                "price": 920,
                "img": "assets/img/Cotoletta.png"
            },
            {
                "isAvailable": true,
                "name": "Saltimbocca alla Romana",
                "code": "SLTR",
                "price": 940,
                "img": "assets/img/Saltimbocca.png"
            },
        ]
    },

    {
        "category": "Desserts",
        "contents": [
            {
                "isAvailable": true,
                "name": "Tiramisù",
                "code": "TRMS",
                "price": 160,
                "img": "assets/img/Tiramisu.png"
            },
            {
                "isAvailable": true,
                "name": "Panna Cotta",
                "code": "PNCT",
                "price": 150,
                "img": "assets/img/Panna.png"
            },
            {
                "isAvailable": true,
                "name": "Cannoli Siciliani",
                "code": "CNSC",
                "price": 180,
                "img": "assets/img/Cannoli.png"
            },
            {
                "isAvailable": true,
                "name": "Gelato alla Fragola",
                "code": "GLFG",
                "price": 155,
                "img": "assets/img/Fragola.png"
            },
            {
                "isAvailable": true,
                "name": "Zabaglione",
                "code": "ZBLN",
                "price": 160,
                "img": "assets/img/Zabaglione.png"
            },
            {
                "isAvailable": true,
                "name": "Torta Caprese",
                "code": "TRTC",
                "price": 195,
                "img": "assets/img/Caprese.png"
            },
            {
                "isAvailable": true,
                "name": "Cassata Siciliana",
                "code": "CASS",
                "price": 210,
                "img": "assets/img/Cassata.png"
            }
        ]
    },

];

var total = 0;

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    products.forEach((product, index) => {
        categoriesContainer.innerHTML += `
           <div onclick="loadProducts('` + index + `')" class="card mx-1 custom-button p-2 text-center justify-content-center">
                <small class="category-name">` + product.category + `</small>
            </div>
        `;
    });
}

function loadProducts(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    // products with sizes
    if (categoryIndex == 0) {
        products[categoryIndex].contents.forEach(content => {
            if (content.sizes) {
                content.sizes.forEach(size => {
                    maincontainer.innerHTML += `
                       <div class="col-md-4 d-flex justify-content-center">
                            <div class="product-card mx-2 my-2" style="width: 18rem; cursor: pointer;" 
                                onclick="addToReceipt('` + size.price + `','` + content.code + size.code + `')">
                                <img src="` + (size.img || content.img) + `" class="card-img-top mt-4" 
                                    alt="` + content.name + `" style="height: 150px; object-fit: contain;">
                                <div class="card-body">
                                    <p class="card-text text-start mb-1">` + content.name + `</p>
                                    <p class="text-start mb-0">` + size.name + `</p>
                                    <p class="fw-bold text-start mb-0">₱` + size.price + `</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
        });
    }
    // products with servings
    else if (categoryIndex == 1) {
        products[categoryIndex].contents.forEach(content => {
            if (content.servings) {
                content.servings.forEach(serving => {
                    maincontainer.innerHTML += `
                        <div class="col-md-4 d-flex justify-content-center">
                            <div class="product-card mx-2 my-2" style="width: 18rem; cursor: pointer;" 
                                onclick="addToReceipt('` + serving.price + `','` + content.code + serving.code + `')">
                                <img src="` + (serving.img || content.img) + `" class="card-img-top mt-4" 
                                    alt="` + content.name + `" style="height: 150px; object-fit: contain;">
                                <div class="card-body">
                                    <p class="card-text text-start mb-1">` + content.name + `</p>
                                    <p class="text-start mb-0">` + serving.name + `</p>
                                    <p class="fw-bold text-start mb-0">₱` + serving.price + `</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
        });
    }
    // products without sizes or servings
    else {
        products[categoryIndex].contents.forEach(content => {
            maincontainer.innerHTML += `
               <div class="col-md-4 d-flex justify-content-center">
                    <div class="product-card mx-2 my-2" style="width: 18rem; cursor: pointer;" 
                        onclick="addToReceipt('` + content.price + `','` + content.code + `')">
                        <img src="` + content.img + `" class="card-img-top mt-4" 
                            alt="` + content.name + `" style="height: 150px; object-fit: contain;">
                        <div class="card-body">
                            <p class="card-text text-start mb-1">` + content.name + `</p>
                            <p class="fw-bold text-start mb-0">₱` + content.price + `</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}


function addToReceipt(price, code) {
    var receiptContainer = document.getElementById("receipt");
    total = parseFloat(total) + parseFloat(price);

    totalValueElement = document.getElementById("totalValue");
    totalValueElement.innerHTML = total;

    receiptContainer.innerHTML += `
    <div class="d-flex flex-row justify-content-between">
      <div><small>`+ code + `</small></div>
      <div><small>`+ price + `</small></div>
    </div>
    `;
}

loadCategories();

document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.getElementById('categories');
    const welcomeMessage = document.getElementById('welcomeMessage');

    categoriesContainer.addEventListener('click', () => {
        if (welcomeMessage) {
            welcomeMessage.style.display = 'none';
        }
    });
});

