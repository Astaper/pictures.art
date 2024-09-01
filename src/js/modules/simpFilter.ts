const simpFilter = () => {
    const menuItems: NodeListOf<HTMLElement> = document.querySelectorAll('.portfolio-menu li');
    const portfolioItems: HTMLElement[] = Array.from(document.querySelectorAll('.portfolio-wrapper div'));
    const noItemsMessage: HTMLElement | null = document.querySelector('.portfolio-no');

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            menuItems.forEach(item => item.classList.remove('active'));
            menuItem.classList.add('active');

            const id = menuItem.dataset.id;
            const filteredItems = portfolioItems.filter(item => item.dataset.id?.includes(id || ''));

            portfolioItems.forEach(item => item.style.display = 'none');
            if (noItemsMessage) {
                noItemsMessage.style.display = filteredItems.length ? 'none' : 'block';
            }
            filteredItems.forEach(item => item.style.display = 'block');
        });
    });
}

export default simpFilter;
