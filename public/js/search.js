function displaySearchFilter() {
    document.querySelector('#search-section div.filter').style.display = 'block';
}

function applySearchFilter() {
    document.querySelector('#search-section div.filter').style.display = 'none';
}

addEventListener("load", () => {
    // attempt extract query from URL
    let words = window.location.href.split('?');
    if (words.length > 1) {
        const query = words[1];
        if (query == 'f=mybooks') { 
            // Display filter with my-books options checked
            displaySearchFilter();
            document.getElementById('my-books-input').checked = true;
            // Make my-books menu item as active
            document.querySelector('.active').classList = [];
            document.getElementById('my-books-link').classList = ['active'];
        }
    }
})
