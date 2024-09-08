function handleClick() {
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
}

const button = document.getElementById('Image1');
button.addEventListener('click', handleClick);