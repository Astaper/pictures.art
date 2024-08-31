const simpFilter = () => {
    const menuItems = document.querySelectorAll('.portfolio-menu li');
    const portfolioItems = Array.from(document.querySelectorAll('.portfolio-wrapper div'));
    const noItemsMessage = document.querySelector('.portfolio-no');

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            menuItems.forEach(item => item.classList.remove('active'));
            menuItem.classList.add('active');

            const filter = menuItem.getAttribute('data-id');

            let filteredItems;

            if (filter === 'all') {
                filteredItems = portfolioItems;
            } else {
                filteredItems = portfolioItems.filter(item => item.getAttribute('data-id').includes(filter));
            }

            portfolioItems.forEach(item => {
                if (filteredItems.includes(item)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            if (filteredItems.length === 0) {
                noItemsMessage.style.display = 'block';
            } else {
                noItemsMessage.style.display = 'none';
            }
        });
    });
}

export default simpFilter;
