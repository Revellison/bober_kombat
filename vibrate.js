function handleClick() {
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }
}

const button = document.getElementById('Image1');
button.addEventListener('click', handleClick);