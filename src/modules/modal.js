const modal = () => {
    
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const modalWindow = modal.querySelector('.popup-content');
    let count = 0;
    let idInterval;
    let isOpen = false;

    const modalAnimation = () => {
        count++;
        idInterval = requestAnimationFrame(modalAnimation);
        if (count < 42) {
            modalWindow.style.left = count + '%';
            modalWindow.style.transform = 'translateY(50%)';
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (document.body.clientWidth > 768) {
                modalWindow.style.left = '0px';
                modal.style.display = 'block';
                idInterval = requestAnimationFrame(modalAnimation);
            } else {
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        count = 0;
        cancelAnimationFrame(idInterval);
        modal.style.display = 'none';
    });
    
};

export default modal;