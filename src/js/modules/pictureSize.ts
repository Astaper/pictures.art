const pictureSize = (imgSelector: string) => {
    const blocks = document.querySelectorAll(imgSelector) as NodeListOf<HTMLElement>;

    const showImg = (block: HTMLElement) => {
        const img = block.querySelector('img') as HTMLImageElement | null;
        if (img) {
            img.src = img.src.slice(0, -4) + '-1.png';
            block.querySelectorAll('p:not(.sizes-hit)').forEach(p => (p as HTMLElement).style.display = 'none');
        }
    }

    const hideImg = (block: HTMLElement) => {
        const img = block.querySelector('img') as HTMLImageElement | null;
        if (img) {
            img.src = img.src.slice(0, -6) + '.png';
            block.querySelectorAll('p:not(.sizes-hit)').forEach(p => (p as HTMLElement).style.display = 'block');
        }
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => showImg(block));
        block.addEventListener('mouseout', () => hideImg(block));
    });
};

export default pictureSize;
