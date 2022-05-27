const dropdown = document.querySelectorAll('.dropdown');
const asideDropdown = document.querySelectorAll('.aside-dropdown');
const navbarToggle = document.querySelector('.logo__button');
const aside = document.querySelector('.aside');
const asideButton = document.querySelector('.aside__button');

navbarToggle.addEventListener('click', () => {
    aside.classList.add('slide-aside');
});

asideButton.addEventListener('click', () => {
    aside.classList.remove('slide-aside');
});

dropdown.forEach(item => {
    // open dropdown
    item.addEventListener('mousemove', () => {
        openDropdown(item);
    });

    // close dropdown
    item.addEventListener('mouseout', () => {
        closeDropdown(item);
    });

    // toggle dropdown
    item.addEventListener('click', () => {
        const showDropdown = item.classList.contains('show-list');

        if(!showDropdown) {
            openDropdown(item);
        } else {
            closeDropdown(item);
        };
    });
});

asideDropdown.forEach(item => {
    // toggle dropdown
    item.addEventListener('click', () => {
        const showDropdown = item.classList.contains('show-aside-dropdown');

        if(!showDropdown) {
            openAsideDropdown(item);
        } else {
            closeAsideDropdown(item);
        };
    });
});

const openAsideDropdown = (item) => {
    item.classList.add('show-aside-dropdown');
    const dropdownContainer = item.querySelector('.aside-dropdown__container');
    const dropdownList = item.querySelector('.aside-dropdown__list');
    const dropdownListHeight = dropdownList.getBoundingClientRect().height;
    dropdownContainer.style.height = `${dropdownListHeight}px`;
};

const closeAsideDropdown = (item) => {
    item.classList.remove('show-aside-dropdown');
    const dropdownContainer = item.querySelector('.aside-dropdown__container');
    dropdownContainer.style.height = 0;
};

const openDropdown = (item) => {
    item.classList.add('show-list');
    const dropdownContainer = item.querySelector('.dropdown__container');
    const dropdownList = item.querySelector('.dropdown__list');
    const dropdownListHeight = dropdownList.getBoundingClientRect().height;
    dropdownContainer.style.height = `${dropdownListHeight}px`;
};

const closeDropdown = (item) => {
    item.classList.remove('show-list');
    const dropdownContainer = item.querySelector('.dropdown__container');
    dropdownContainer.style.height = 0;
};
