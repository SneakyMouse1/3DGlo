import { animate } from './helpers';

const modal = () => {
    
    const buttons = document.querySelectorAll('.popup-btn');

    const modal = document.querySelector('.popup');

    const modalWindow = modal.querySelector('.popup-content');
    
    /*
    const modalAnimation = () => {
        count++;
        idInterval = requestAnimationFrame(modalAnimation);
        if (count < 42) {
            modalWindow.style.left = count + '%';
            modalWindow.style.transform = 'translateY(50%)';
        }
    };
    */


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (document.body.clientWidth > 768) {
                modal.style.display = 'block';
                animate({
                    duration: 600,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalWindow.style.left = (42 * progress) + "%";
                        modalWindow.style.transform = 'translateY(50%)';
                    }
                });
            } else {
                modal.style.display = 'block';
            }
        });
    });
    
    
    /*
    closeBtn.addEventListener('click', () => {
        count = 0;
        cancelAnimationFrame(idInterval);
        modal.style.display = 'none';
    });
    */
    
    // Закрываем по нажатию вне окна
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modalWindow.style.left = '0px';
            modal.style.display = 'none';
        }
    });
};

export default modal;