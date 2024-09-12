function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    
    document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector([onclick="filterCards('${category}')"]).classList.add('active');
}
