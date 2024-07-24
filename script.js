document.addEventListener('DOMContentLoaded', () => {
    const mainBtn = document.getElementById('mainBtn');
    const counter = document.getElementById('counter');
    const upgrade1 = document.getElementById('upgrade1');
    const upgrade2 = document.getElementById('upgrade2');
    const upgrade3 = document.getElementById('upgrade3');
    const upgrade4 = document.getElementById('upgrade4');
    const settingsBtn = document.getElementById('settingsBtn');
    const muteBtn = document.getElementById('muteBtn');
    const setMenu = document.getElementById('setMenu');

    const upgrade1Count = document.getElementById('upgrade1Count');
    const upgrade2Count = document.getElementById('upgrade2Count');
    const upgrade3Count = document.getElementById('upgrade3Count');
    const upgrade4Count = document.getElementById('upgrade4Count');

    let count = 0;
    let increment = 1;  // Initial increment value
    let upg1Cost = 25;
    let upg2Cost = 25;
    let upg3Cost = 5;
    let upg4Cost = 10;
    let upg1Count = 0;
    let moneypersec = 0;
    let employeeCount = 0;
    let fieldCount = 0;
    let factoryCount = 0;
    let soundEnabled = true; // Sound is enabled by default  

    function updateCounter() {
        counter.textContent = `Coconuts: ${count}`;
    }

    function updateUpgradeCounters() {
        upgrade1Count.textContent = upg1Count;
        upgrade2Count.textContent = employeeCount;
        upgrade3Count.textContent = fieldCount;
        upgrade4Count.textContent = factoryCount;
    }

    function updateUpgradeCost(barBtn, cost) {
        barBtn.querySelector('.cost').textContent = Math.round(cost);
    }

    // Mute/Unmute functionality
    muteBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        muteBtn.textContent = soundEnabled ? 'Mute' : 'Unmute';
    });

    mainBtn.addEventListener('click', () => {
        count += increment;
        updateCounter();
    });

    // Upgrade 1: Increase Coconuts Per Collect (+1/Click) (Cost: 25)
    upgrade1.addEventListener('click', () => {
        if (count >= 25) {
            count -= 25;
            moneypersec += 1;
            upg1Count += 1;
            upg1Cost *= 1.25;
            updateCounter();
            updateUpgradeCounters();
            updateUpgradeCost(upgrade1, upg1Cost);
        } else {
            alert('Not enough Coconuts!');
        }
    });

    // Upgrade 2: Hire Coconut Employee (+1 1st Upgrade/s) (Cost: 25 1st Upgrade)
    upgrade2.addEventListener('click', () => {
        if (upg1Count >= 25) {
            upg1Count -= 25;
            moneypersec -= 25;
            employeeCount += 1;
            upg2Cost *= 1.25;
            updateCounter();
            updateUpgradeCounters();
            updateUpgradeCost(upgrade2, upg2Cost);
        } else {
            alert('Not enough 1st Upgrade increments!');
        }
    });

    // Upgrade 3: Buy Coconut Field (+1 Coconut Employee/s) (Cost: 5 2nd Upgrade)
    upgrade3.addEventListener('click', () => {
        if (employeeCount >= 5) {
            employeeCount -= 5;
            fieldCount += 1;
            upg3Cost *= 2;
            updateCounter();
            updateUpgradeCounters();
            updateUpgradeCost(upgrade3, upg3Cost);
        } else {
            alert('Not enough 2nd Upgrade employees!');
        }
    });

    // Upgrade 4: Buy Coconut Factory (+1 Coconut Field/s) (Cost: 10 3rd Upgrade)
    upgrade4.addEventListener('click', () => {
        if (fieldCount >= 10) {
            fieldCount -= 10;
            factoryCount += 1;
            upg4Cost *= 1.5;
            updateCounter();
            updateUpgradeCounters();
            updateUpgradeCost(upgrade4, upg4Cost);
        } else {
            alert('Not enough 3rd Upgrade fields!');
        }
    });

    settingsBtn.addEventListener('click', () => {
        setMenu.style.display = setMenu.style.display === 'block' ? 'none' : 'block';
    });

    setMenu.style.display = 'none';

    // Functions to periodically add previous upgrades
    setInterval(() => {
        count += upg1Count;
        updateCounter();
        updateUpgradeCounters();
    }, 1000); // Every second

    setInterval(() => {
        upg1Count += employeeCount;
        updateCounter();
        updateUpgradeCounters();
    }, 2000); // Every 2 seconds

    setInterval(() => {
        employeeCount += fieldCount;
        updateCounter();
        updateUpgradeCounters();
    }, 3000); // Every 3 seconds

    setInterval(() => {
        fieldCount += factoryCount;
        updateCounter();
        updateUpgradeCounters();
    }, 4000); // Every 4 seconds
});
