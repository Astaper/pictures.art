const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    const showImg = (block) => {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p').forEach(p => {
            p.style.display = 'none';
        });
    }
};

export default pictureSize;