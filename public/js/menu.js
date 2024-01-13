function openMenu() {
    document.querySelector('header > nav').style.display = 'flex';
    document.querySelector('header > section > img.open').style.display = 'none';
    document.querySelector('header > section > img.close').style.display = 'block';
}

function closeMenu() {
    document.querySelector('header > section > img.close').style.display = 'none';
    document.querySelector('header > section > img.open').style.display = 'block';
    document.querySelector('header > nav').style.display = 'none';
}