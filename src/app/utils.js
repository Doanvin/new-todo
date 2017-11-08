export function enterListeners(className) {
    document.getElementByClassName(className).forEach(el => el.addEventListener('keyup', ev => {
        ev.preventDefault();
        if (ev.keyCode == 13) document.getElementById(ev.target.dataset.buttonId).click();
    })
    );
}

export function getInputs(buttonId) {
    const query = `input[${buttonId}]`;
    return document.querySelectorAll(query);
}

export function getFromStorage(key) {
    if (key && localStorage.hasOwnProperty(key)) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return {};
    }
}
