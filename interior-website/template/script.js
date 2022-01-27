// aos animation
AOS.init();

// navbar animation
let header = document.querySelector('.header');
let carousel = document.querySelector('.carousel');
let breadCrumb = document.querySelector('.breadcrumb-area');
let topbar = document.querySelector('.topbar');

window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > header.offsetHeight) {
        header.classList.add('active');
        topbar.classList.add('d-none');

        if (carousel !== null) {
            carousel.style.marginTop = header.offsetHeight + 'px';
        } else if (breadCrumb !== null) {
            breadCrumb.style.marginTop = header.offsetHeight + 'px';
        }
    } else {
        header.classList.remove('active');
        topbar.classList.remove('d-none');


        if (carousel !== null) {
            carousel.style.marginTop = 0 + 'px';
        } else if (breadCrumb !== null) {
            breadCrumb.style.marginTop = 0 + 'px';
        }
    }
}

// selecting filter menu and filter items
let filterMenu = document.querySelectorAll('.filter-menu li');
let filterContents = document.querySelectorAll('.filter-content');

// delete construction projects
for (let i = 0; i < filterContents.length; i++) {
    if (filterContents[i].getAttribute('data-item') === 'construction') {
        filterContents[i].classList.add('deleteContents');
    }
}

// filter construction and interior projects
for (let i = 0; i < filterMenu.length; i++) {
    filterMenu[i].addEventListener('click', () => {
        // delete active menu
        for (let j = 0; j < filterMenu.length; j++) {
            filterMenu[j].classList.remove('active-menu');
        }

        // select active menu
        filterMenu[i].classList.add('active-menu');
        let attrValue = filterMenu[i].getAttribute('data-list');

        for (let k = 0; k < filterContents.length; k++) {
            // delete all active contents 
            filterContents[k].classList.add('deleteContents');
            filterContents[k].classList.remove('activeContents');

            // display filter contents
            if (filterContents[k].getAttribute('data-item') === attrValue) {
                filterContents[k].classList.add('activeContents');
                filterContents[k].classList.remove('deleteContents');
            }
        }
    });
}

// selecting lightbox elements
let lightBox = document.querySelector('.lightbox');
let closeBtn = document.querySelector('.lightbox-close-btn');
let lightBoxImage = document.querySelector('.image-wrapper img');
let lightBoxShadow = document.querySelector('.lightbox-shadow');
let controlScrolling = document.querySelector('body');

let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');

// close lightbox for home page gallery
if (closeBtn !== null) {
    closeBtn.onclick = () => {
        lightBox.classList.remove('show-lightbox');
        lightBoxShadow.classList.remove('show-shadow');
        controlScrolling.style.overflow = 'auto';
    }
}

for (let i = 0; i < filterContents.length; i++) {
    // lightbox show, slide, close
    filterContents[i].addEventListener('click', () => {

        if (lightBox !== null) {
            let getImg = filterContents[i].querySelector('img').src;

            lightBoxImage.src = getImg;

            // show lightbox
            lightBox.classList.add('show-lightbox');
            lightBoxShadow.classList.add('show-shadow');
            controlScrolling.style.overflow = 'hidden';
        } else {
            // go to project page
            window.location = "project.html";
        }

        // slide image
        function slideImage(index) {
            // getCategory = filterContents[index].getAttribute('data-item');
            getImg = filterContents[index].querySelector('img').src;

            // imgCategory.textContent = getCategory;
            lightBoxImage.src = getImg;
        }

        let leftIndex = i - 1;

        // slide left
        leftArrow.onclick = () => {
            if (leftIndex < 0) {
                leftIndex = filterContents.length - 1;
            }

            slideImage(leftIndex);

            leftIndex--;
        }


        let rightIndex = i + 1;

        // slide right
        rightArrow.onclick = () => {
            if (rightIndex >= filterContents.length) {
                rightIndex = 0;
            }

            slideImage(rightIndex);

            rightIndex++;
        }

        // slide when arrow key down
        document.onkeydown = (event) => {
            // slide left
            if (event.keyCode === 37) {
                if (leftIndex < 0) {
                    leftIndex = filterContents.length - 1;
                }

                slideImage(leftIndex);

                leftIndex--;
            }

            // slide right
            if (event.keyCode === 39) {
                if (rightIndex >= filterContents.length) {
                    rightIndex = 0;
                }

                slideImage(rightIndex);

                rightIndex++;
            }
        }

        // close lightbox
        closeBtn.onclick = () => {
            lightBox.classList.remove('show-lightbox');
            lightBoxShadow.classList.remove('show-shadow');
            controlScrolling.style.overflow = 'auto';
        }
    });
}

// service gallery
let galleryContent = document.querySelectorAll('.service-gallery-content');

for (let i = 0; i < galleryContent.length; i++) {
    // when onclick then go to project page
    galleryContent[i].onclick = () => {
        window.location = "project.html";
    }
}