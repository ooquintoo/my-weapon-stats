const weaponData = {
    "T1": [
        { name: "Walther P88", img: "walther.png", stars: 1, color: "gray" },
        { name: "Glock 20", img: "g20.png", stars: 1, color: "gray" },
        { name: "Glock 45x", img: "g45x.png", stars: 2, color: "green" },
        { name: "Glock 17", img: "g17.png", stars: 2, color: "green" },
        { name: "Sig P320", img: "sig.png", stars: 2, color: "green" }
    ],
    "T1.5": [
        { name: "Black Draco", img: "draco.png", stars: 5, color: "orange" },
        { name: "Glock 19x Binary", img: "g19xb.png", stars: 4, color: "purple" },
        { name: "Honey Badger", img: "honey.png", stars: 5, color: "orange" }
    ],
    "T2": [] // Add your T2 weapons here
};

function showTier(tier) {
    const display = document.getElementById('display-area');
    document.getElementById('tier-header').innerText = tier + " Weapons";
    display.innerHTML = ""; // Clear current items

    weaponData[tier].forEach(item => {
        const card = `
            <div class="card ${item.color}">
                <div style="text-align:left; font-size:12px;">${item.name}</div>
                <img src="images/${item.img}" alt="${item.name}">
                <div class="stars">${"★".repeat(item.stars)}</div>
            </div>
        `;
        display.innerHTML += card;
    });
}

// Start by showing T1 automatically
showTier('T1');
function searchWeapons() {
    let input = document.getElementById('weaponSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        // Look at the text inside the card header
        let name = cards[i].querySelector('.card-header').innerText.toLowerCase();
        
        if (name.includes(input)) {
            cards[i].style.display = ""; // Show
        } else {
            cards[i].style.display = "none"; // Hide
        }
    }
}
