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