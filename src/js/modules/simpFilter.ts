const simpFilter = () => {
    const menuItems = document.querySelectorAll('.portfolio-menu li');
    const portfolioItems = Array.from(document.querySelectorAll('.portfolio-wrapper div'));
    const noItemsMessage = document.querySelector('.portfolio-no');

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            menuItems.forEach(item => item.classList.remove('active'));
            menuItem.classList.add('active');

            const id = (menuItem as HTMLElement).dataset.id;

            const filteredItems = portfolioItems.filter(item => (item as HTMLElement).dataset.id?.includes(id || ''));

            portfolioItems.forEach(item => (item as HTMLElement).style.display = 'none');
            (noItemsMessage as HTMLElement).style.display = filteredItems.length ? 'none' : 'block';
            filteredItems.forEach(item => (item as HTMLElement).style.display = 'block');
        });
    });
}

export default simpFilter;
