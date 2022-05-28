// <!-- THIS IS CODED BY: JEFFREY TUASON -->

const dropdowns = document.querySelectorAll('.dropdown');
const logoButton = document.querySelector('.logo__button');
const navbarButton = document.querySelector('.navbar__button');
const overlay = document.querySelector('.overlay');
const navbar = document.querySelector('.navbar');
logoButton.addEventListener('click', () => openNavbar());
navbarButton.addEventListener('click', () => closeNavbar());
navbarButton.addEventListener('touchstart', () => closeNavbar());

dropdowns.forEach(item => {
    item.addEventListener('mouseover', () => openDropdown(item));
    item.addEventListener('mouseout', () => closeDropdown(item));
    item.addEventListener('click', () => {
        const showDropdown = item.classList.contains('show-dropdown');
        if(!showDropdown) {
            openDropdown(item);
        } else {
            closeDropdown(item);
        };
    });
    item.addEventListener('touchstart', () => {
        const showDropdown = item.classList.contains('show-dropdown');
        if(!showDropdown) {
            openDropdown(item);
        } else {
            closeDropdown(item);
        };
    });
});

const openDropdown = (dropdown) => {
    dropdown.classList.add('show-dropdown');
    const dropdownContainer = dropdown.querySelector('.dropdown__container');
    const dropdownList = dropdown.querySelector('.dropdown__container ul');
    const dropdownListHeight = dropdownList.getBoundingClientRect().height;
    dropdownContainer.style.height = `${dropdownListHeight}px`;
};

const closeDropdown = (dropdown) => {
    dropdown.classList.remove('show-dropdown');
    const dropdownContainer = dropdown.querySelector('.dropdown__container');
    dropdownContainer.style.height = 0;
};

const openNavbar = () => {
    overlay.classList.add('show-overlay');
    navbar.classList.add('show-navbar');
};
const closeNavbar = () => {
    overlay.classList.remove('show-overlay');
    navbar.classList.remove('show-navbar');
};

// ************** SWIPE FUNCTION ************** 
const swipe = (element) => {
    let startX;
    let startY;
    let distance;
    let minDistance = 100;
    let minTime = 100;
    let elapsedTime;
    let startTime;

    element.addEventListener('touchstart', e => {
        const touchObj = e.changedTouches[0];

        distance = 0;
        startX = touchObj.pageX;
        startY = touchObj.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    }, false);

    element.addEventListener('touchmove', e => {
        e.preventDefault();
    }, false);

    element.addEventListener('touchend', e => {
        const touchObj = e.changedTouches[0];
        distance = touchObj.pageX - startX;
        elapsedTime = new Date().getTime() - startTime;

        const swipeRight = (elapsedTime >= minTime && distance >= minDistance && Math.abs(touchObj.pageY - startY) <= 100)
        fingerSwipe(swipeRight);    
        e.preventDefault()
    }, false);

    const fingerSwipe = (isRightSwipe) => {if (isRightSwipe) closeNavbar()};
};

swipe(overlay);
swipe(navbar);