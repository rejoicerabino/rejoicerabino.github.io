var categories = [];
var products = [];

// to fetch all categories
const getAllCategories = async () => {
    fetch('http://localhost/ACADS/rejoicerabino.github.io/ADET/A06-BE/categories.php')
        .then(response => response.json())
        .then(data => {
            categories = data;
            loadCategories();
        });
}

// to fetch all products
const getAllProducts = async (categoryID) => {
    const categoryData = {
        categoryID: categoryID
    };

    fetch('http://localhost/ACADS/rejoicerabino.github.io/ADET/A06-BE/products.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {
            products = data;
            loadProducts();
        });
}

getAllCategories();

var total = 0;

// load categories
function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    categories.forEach((category, index) => {
        categoriesContainer.innerHTML += `
                    <div onclick="getAllProducts('${category.categoryID}')" class="card mx-1 custom-button p-2 text-center justify-content-center">
                        <small class="category-name">${category.categoryName}</small>
                    </div>
                `;
    });
}

// load the products
function loadProducts() {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products.forEach(product => {
        if (product.sizeName && product.sizePrice) {
            maincontainer.innerHTML += `
                        <div class="col-md-4 d-flex justify-content-center">
                            <div class="product-card mx-2 my-2" style="width: 18rem; cursor: pointer;" 
                                onclick="addToReceipt('${product.sizePrice}', '${product.sizeCode}')">
                                <img src="${product.productImage}" class="card-img-top mt-4" 
                                    alt="${product.productName}" style="height: 150px; object-fit: contain;">
                                <div class="card-body">
                                    <p class="card-text text-start mb-1">${product.productName}</p>
                                    <p class="text-start mb-0">${product.sizeName}</p>
                                    <p class="fw-bold text-start mb-0">₱${product.sizePrice}</p>
                                </div>
                            </div>
                        </div>
                    `;
        } else if (product.servingName && product.servingPrice) {
            maincontainer.innerHTML += `
                        <div class="col-md-4 d-flex justify-content-center">
                            <div class="product-card mx-2 my-2" style="width: 18rem; cursor: pointer;"
                                onclick="addToReceipt('${product.servingPrice}', '${product.productCode + product.servingCode}')">
                                <img src="${product.servingImage}" class="card-img-top mt-4" style="height: 150px; object-fit: contain;">
                                <div class="card-body">
                                    <p class="card-text text-start mb-1">${product.productName}</p>
                                    <p class="text-start mb-0">${product.servingName}</p>
                                    <p class="fw-bold text-start mb-0">₱${product.servingPrice}</p>
                                </div>
                            </div>
                        </div>
                    `;
        } else {
            maincontainer.innerHTML += `
                        <div class="col-md-4 d-flex justify-content-center">
                            <div class="product-card mx-2 my-2" style="width: 18rem; cursor: pointer;" 
                                onclick="addToReceipt('${product.productPrice}','${product.productCode}')">
                                <img src="${product.productImage}" class="card-img-top mt-4" 
                                    alt="${product.productName}" style="height: 150px; object-fit: contain;">
                                <div class="card-body">
                                    <p class="card-text text-start mb-1">${product.productName}</p>
                                    <p class="fw-bold text-start mb-0">₱${product.productPrice}</p>
                                </div>
                            </div>
                        </div>
                    `;
        }
    });
}

// receipt
function addToReceipt(price, code) {
    var receiptContainer = document.getElementById("receipt");
    total = parseFloat(total) + parseFloat(price);

    totalValueElement = document.getElementById("totalValue");
    totalValueElement.innerHTML = total;

    receiptContainer.innerHTML += `
                <div class="d-flex flex-row justify-content-between">
                    <div><small>${code}</small></div>
                    <div><small>${price}</small></div>
                </div>
            `;
}

document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.getElementById('categories');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const localTime = document.getElementById('local-time');
    const orderNumber = document.getElementById('order-number');

    if (localTime) {
        localTime.style.display = 'none';
    }
    if (orderNumber) {
        orderNumber.style.display = 'none';
    }

    categoriesContainer.addEventListener('click', () => {
        if (welcomeMessage) {
            welcomeMessage.style.display = 'none';
        }

        if (localTime) {
            localTime.style.display = 'block';
        }
        if (orderNumber) {
            orderNumber.style.display = 'block';
        }
    });
});

function updateLocalTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours() % 12 || 12).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
    document.getElementById('local-time').textContent = formattedDateTime;
}

updateLocalTime();
setInterval(updateLocalTime, 60000);