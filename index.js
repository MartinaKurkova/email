const goodbye = (name) => {
    const closingEl = document.querySelector(".email__closing");

    closingEl.textContent = `S pozdravem ${name}`;
}

goodbye("Pavel Ovesný");