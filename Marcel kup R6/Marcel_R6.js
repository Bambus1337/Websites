var clickCount = 0;

function buttonClickedAgree() {
    window.location.href = 'https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/';
}

document.getElementById('buttonDeny').addEventListener('click', function() {
    var button = this;

    if (clickCount === 0) {
        button.style.transform = 'translate(75px, 100px)';
        button.textContent = 'Nuh-uh'
    } else if (clickCount === 1) {
        button.style.transform = 'translate(150px, 125px)';
        button.textContent = 'You can try'
    } else if (clickCount === 2) {
        button.style.transform = 'translate(75px, 50px)';
        button.textContent = "Ain't Clicking that"
    } else if (clickCount === 3) {
        button.style.transform = 'translate(0px, 0px)';
        button.textContent = "Last chance to look at me Marcel"
        button.style.height = '200px'
    } else if (clickCount === 4) {
        button.style.display = 'none';
    }

    clickCount++;
});
