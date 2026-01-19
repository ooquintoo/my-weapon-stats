onst weaponData = {
    "T1": [
        { name: "Glock 17", img: "g17.png", stars: 2 },
        { name: "Glock 45x", img: "g45x.png", stars: 2 },
        { name: "Sig P320", img: "sig.png", stars: 2 }
    ],
    "T1.5": [
        { name: "Black Draco", img: "draco.png", stars: 5 },
        { name: "Honey Badger", img: "honey.png", stars: 5 }
    ]
};

// Switch between Weapons, Randomizer, and Drugs
function showSection(section) {
    document.getElementById('weapon-display').style.display = (section === 'weapons') ? 'block' : 'none';
    document.getElementById('randomizer-section').style.display = (section === 'randomizer') ? 'block' : 'none';
    document.getElementById('drug-section').style.display = (section === 'drugs') ? 'block' : 'none';
}

function renderTier(tier) {
    showSection('weapons');
    document.getElementById('tier-label').innerText = tier + " Weapons";
    const grid = document.getElementById('weapon-grid');
    grid.innerHTML = "";
    
    weaponData[tier].forEach(wpn => {
        grid.innerHTML += `
            <div class="card">
                <p>${wpn.name}</p>
                <img src="images/${wpn.img}">
                <div style="text-align:right">★ ${wpn.stars}</div>
            </div>`;
    });
}

// Drug Randomizer Logic
function generateDrugs() {
    let amount = Math.floor(Math.random() * (100 - 75 + 1)) + 75;
    document.getElementById('drug-output').innerHTML = `<h3>Generated: ${amount} units</h3>`;
}

// Spin Randomizer Logic
function spinWeapon() {
    const all = [...weaponData["T1"], ...weaponData["T1.5"]];
    const result = all[Math.floor(Math.random() * all.length)];
    document.getElementById('spin-result').innerText = result.name;
}
