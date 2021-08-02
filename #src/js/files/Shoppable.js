
let render = (component, initState = {}, mountNode = 'app') => {
    initState.render = (stateRepresentation, options = {}) => {

        const start = (options.focus) ? document.getElementById(options.focus).selectionStart : 0;
        (document.getElementById(mountNode) || {}).innerHTML = stateRepresentation

        if (options.focus) {
            let f = document.getElementById(options.focus)
            f.selectionStart = start
            f.focus()
        }
    }

    let stateRepresentation = component(initState)

    initState.render((typeof stateRepresentation === 'function') ? stateRepresentation() : stateRepresentation)
}

let Shoppable = ({image, hotspots}) =>
    `<div class="first-screen-slider _swiper">
        <div class="first-screen-slider__slide" style="background-image: url(${image});">
            <div class="hints">
                ${hotspots.map(({title, old_price, new_price, coordinates, url}, hotspotIndex) =>
        `<div id="hint--${hotspotIndex}" class="hint" style="top:${coordinates[0]}%;left:${coordinates[1]}%;z-index:${hotspotIndex + 1}">
                    <div class="hint__point">
                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30.5" cy="26.5" r="15.5" fill="#DF0303"/>
                            <path d="M37.4821 24.9821H32.3214C32.1538 24.9821 32.0179 24.8462 32.0179 24.6786V19.5179C32.0179 18.6796 31.3382 18 30.5 18C29.6618 18 28.9821 18.6796 28.9821 19.5179V24.6786C28.9821 24.8462 28.8462 24.9821 28.6786 24.9821H23.5179C22.6796 24.9821 22 25.6618 22 26.5C22 27.3382 22.6796 28.0179 23.5179 28.0179H28.6786C28.8462 28.0179 28.9821 28.1538 28.9821 28.3214V33.4821C28.9821 34.3204 29.6618 35 30.5 35C31.3382 35 32.0179 34.3204 32.0179 33.4821V28.3214C32.0179 28.1538 32.1538 28.0179 32.3214 28.0179H37.4821C38.3204 28.0179 39 27.3382 39 26.5C39 25.6618 38.3204 24.9821 37.4821 24.9821Z" fill="white"/>
                        </svg>
                    </div>
                    <a href="${url}" class="hint__link" target="_blank">
                        <div class="hint__body">
                            <div class="hint__title">${title.replace(/^(.{16}).+/, "$1…")}</div>
                            <div class="hint__price">
                                <div class="hint__old-price">${old_price}</div>
                                <div class="hint__new-price">${new_price}</div>
                            </div>
                            <div class="hint__ic">
                                <svg width="36" height="36" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="33.3845" cy="33.5" rx="33.3845" ry="33.5" fill="#DF0303"/>
                                    <path d="M18.8789 21.5742H24.2695C24.7541 21.5742 25.1484 21.9686 25.1484 22.4531C25.1484 22.5289 25.0372 21.5003 26.8234 37.577C25.844 37.9622 25.1484 38.9166 25.1484 40.0312C25.1484 41.4851 26.3313 42.6673 27.7852 42.6673H28.8151C28.7176 42.9424 28.6641 43.2388 28.6641 43.5469C28.6641 45.0007 29.8469 46.1836 31.3008 46.1836C32.7546 46.1836 33.9375 45.0007 33.9375 43.5469C33.9375 43.2388 33.8839 42.9424 33.7864 42.6673H39.3622C39.2645 42.9424 39.2109 43.2388 39.2109 43.5469C39.2109 45.0007 40.3938 46.1836 41.8476 46.1836C43.3015 46.1836 44.4844 45.0007 44.4844 43.5469C44.4844 42.093 43.3015 40.9102 41.8476 40.9102H27.7852C27.3006 40.9102 26.9062 40.5158 26.9062 40.0312C26.9062 39.5467 27.3006 39.1523 27.7852 39.1523H43.8742C45.1685 39.1523 46.2623 38.2258 46.4749 36.9491L47.9881 27.871C48.0304 27.6162 47.9588 27.3555 47.7917 27.1585C47.6246 26.9614 47.3795 26.8477 47.1211 26.8477H44.4844V22.4531C44.4844 21.9677 44.0909 21.5742 43.6055 21.5742H36.5742C36.0888 21.5742 35.6953 21.9677 35.6953 22.4531V23.332H31.3008C30.8153 23.332 30.4219 23.7255 30.4219 24.2109V26.8477H27.3999L26.9058 22.3996C26.8769 20.9704 25.7055 19.8164 24.2695 19.8164H18.8789C18.3934 19.8164 18 20.2099 18 20.6953C18 21.1808 18.3934 21.5742 18.8789 21.5742ZM32.1797 43.5469C32.1797 44.0314 31.7853 44.4258 31.3008 44.4258C30.8162 44.4258 30.4219 44.0314 30.4219 43.5469C30.4219 43.0623 30.8162 42.6673 31.3008 42.6673C31.7853 42.6673 32.1797 43.0623 32.1797 43.5469ZM41.8476 44.4258C41.3631 44.4258 40.9687 44.0314 40.9687 43.5469C40.9687 43.0607 41.3631 42.668 41.8476 42.668C42.3322 42.668 42.7265 43.0623 42.7265 43.5469C42.7265 44.0314 42.3322 44.4258 41.8476 44.4258ZM37.4531 23.332H42.7265V26.8477H37.4531V23.332ZM32.1797 25.0898H35.6953V26.8477H32.1797V25.0898ZM46.0836 28.6055L44.7412 36.66C44.6702 37.0858 44.3056 37.3945 43.8742 37.3945H28.5718L27.5952 28.6055H46.0836Z" fill="white"/>
                                    <path d="M31.3008 35.6367C31.7862 35.6367 32.1797 35.2433 32.1797 34.7578V31.2422C32.1797 30.7567 31.7862 30.3633 31.3008 30.3633C30.8153 30.3633 30.4219 30.7567 30.4219 31.2422V34.7578C30.4219 35.2433 30.8153 35.6367 31.3008 35.6367Z" fill="white"/>
                                    <path d="M36.5742 35.6367C37.0597 35.6367 37.4531 35.2433 37.4531 34.7578V31.2422C37.4531 30.7567 37.0597 30.3633 36.5742 30.3633C36.0888 30.3633 35.6953 30.7567 35.6953 31.2422V34.7578C35.6953 35.2433 36.0888 35.6367 36.5742 35.6367Z" fill="white"/>
                                    <path d="M41.8477 35.6367C42.3331 35.6367 42.7266 35.2433 42.7266 34.7578V31.2422C42.7266 30.7567 42.3331 30.3633 41.8477 30.3633C41.3622 30.3633 40.9688 30.7567 40.9688 31.2422V34.7578C40.9688 35.2433 41.3622 35.6367 41.8477 35.6367Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>`).join('')
    }
            </div>
            <div class="_container">
                    <div class="first-screen-slider__slide-content">
                        <ul>
                            <li>Надежно</li>
                            <li>Качественно</li>
                            <li>Доступно</li>
                        </ul>
                        <h1>Лучшая кухонная техника</h1>
                        <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
                            абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору</p>
                        <div class="button first-screen__btn">Подробнее</div>
                        <div class="first-screen-slider__nav first-screen-slider-nav">
                            <div class="first-screen-slider-nav__pagination"></div>
                            <div class="first-screen-slider-nav__prev">
                                <picture>
                                    <source srcset="img/icons/FS-arrow-l.svg" type="image/webp">
                                    <img src="img/icons/FS-arrow-l.svg" alt="стрелка на лево"></picture>
                            </div>
                            <div class="first-screen-slider-nav__next">
                                <picture>
                                    <source srcset="img/icons/FS-arrow-r.svg" type="image/webp">
                                    <img src="img/icons/FS-arrow-r.svg" alt="стрелка направо"></picture>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="first-screen-slider__slide" style="background-image: url(${image});">
            <div class="hints">
                ${hotspots.map(({title, old_price, new_price, coordinates, url}, hotspotIndex) =>
        `<div id="hint--${hotspotIndex}" class="hint" style="top:${coordinates[0]}%;left:${coordinates[1]}%;z-index:${hotspotIndex + 1}">
                    <div class="hint__point">
                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30.5" cy="26.5" r="15.5" fill="#DF0303"/>
                            <path d="M37.4821 24.9821H32.3214C32.1538 24.9821 32.0179 24.8462 32.0179 24.6786V19.5179C32.0179 18.6796 31.3382 18 30.5 18C29.6618 18 28.9821 18.6796 28.9821 19.5179V24.6786C28.9821 24.8462 28.8462 24.9821 28.6786 24.9821H23.5179C22.6796 24.9821 22 25.6618 22 26.5C22 27.3382 22.6796 28.0179 23.5179 28.0179H28.6786C28.8462 28.0179 28.9821 28.1538 28.9821 28.3214V33.4821C28.9821 34.3204 29.6618 35 30.5 35C31.3382 35 32.0179 34.3204 32.0179 33.4821V28.3214C32.0179 28.1538 32.1538 28.0179 32.3214 28.0179H37.4821C38.3204 28.0179 39 27.3382 39 26.5C39 25.6618 38.3204 24.9821 37.4821 24.9821Z" fill="white"/>
                        </svg>
                    </div>
                    <a href="${url}" class="hint__link" target="_blank">
                        <div class="hint__body">
                            <div class="hint__title">${title.replace(/^(.{16}).+/, "$1…")}</div>
                            <div class="hint__price">
                                <div class="hint__old-price">${old_price}</div>
                                <div class="hint__new-price">${new_price}</div>
                            </div>
                            <div class="hint__ic">
                                <svg width="36" height="36" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="33.3845" cy="33.5" rx="33.3845" ry="33.5" fill="#DF0303"/>
                                    <path d="M18.8789 21.5742H24.2695C24.7541 21.5742 25.1484 21.9686 25.1484 22.4531C25.1484 22.5289 25.0372 21.5003 26.8234 37.577C25.844 37.9622 25.1484 38.9166 25.1484 40.0312C25.1484 41.4851 26.3313 42.6673 27.7852 42.6673H28.8151C28.7176 42.9424 28.6641 43.2388 28.6641 43.5469C28.6641 45.0007 29.8469 46.1836 31.3008 46.1836C32.7546 46.1836 33.9375 45.0007 33.9375 43.5469C33.9375 43.2388 33.8839 42.9424 33.7864 42.6673H39.3622C39.2645 42.9424 39.2109 43.2388 39.2109 43.5469C39.2109 45.0007 40.3938 46.1836 41.8476 46.1836C43.3015 46.1836 44.4844 45.0007 44.4844 43.5469C44.4844 42.093 43.3015 40.9102 41.8476 40.9102H27.7852C27.3006 40.9102 26.9062 40.5158 26.9062 40.0312C26.9062 39.5467 27.3006 39.1523 27.7852 39.1523H43.8742C45.1685 39.1523 46.2623 38.2258 46.4749 36.9491L47.9881 27.871C48.0304 27.6162 47.9588 27.3555 47.7917 27.1585C47.6246 26.9614 47.3795 26.8477 47.1211 26.8477H44.4844V22.4531C44.4844 21.9677 44.0909 21.5742 43.6055 21.5742H36.5742C36.0888 21.5742 35.6953 21.9677 35.6953 22.4531V23.332H31.3008C30.8153 23.332 30.4219 23.7255 30.4219 24.2109V26.8477H27.3999L26.9058 22.3996C26.8769 20.9704 25.7055 19.8164 24.2695 19.8164H18.8789C18.3934 19.8164 18 20.2099 18 20.6953C18 21.1808 18.3934 21.5742 18.8789 21.5742ZM32.1797 43.5469C32.1797 44.0314 31.7853 44.4258 31.3008 44.4258C30.8162 44.4258 30.4219 44.0314 30.4219 43.5469C30.4219 43.0623 30.8162 42.6673 31.3008 42.6673C31.7853 42.6673 32.1797 43.0623 32.1797 43.5469ZM41.8476 44.4258C41.3631 44.4258 40.9687 44.0314 40.9687 43.5469C40.9687 43.0607 41.3631 42.668 41.8476 42.668C42.3322 42.668 42.7265 43.0623 42.7265 43.5469C42.7265 44.0314 42.3322 44.4258 41.8476 44.4258ZM37.4531 23.332H42.7265V26.8477H37.4531V23.332ZM32.1797 25.0898H35.6953V26.8477H32.1797V25.0898ZM46.0836 28.6055L44.7412 36.66C44.6702 37.0858 44.3056 37.3945 43.8742 37.3945H28.5718L27.5952 28.6055H46.0836Z" fill="white"/>
                                    <path d="M31.3008 35.6367C31.7862 35.6367 32.1797 35.2433 32.1797 34.7578V31.2422C32.1797 30.7567 31.7862 30.3633 31.3008 30.3633C30.8153 30.3633 30.4219 30.7567 30.4219 31.2422V34.7578C30.4219 35.2433 30.8153 35.6367 31.3008 35.6367Z" fill="white"/>
                                    <path d="M36.5742 35.6367C37.0597 35.6367 37.4531 35.2433 37.4531 34.7578V31.2422C37.4531 30.7567 37.0597 30.3633 36.5742 30.3633C36.0888 30.3633 35.6953 30.7567 35.6953 31.2422V34.7578C35.6953 35.2433 36.0888 35.6367 36.5742 35.6367Z" fill="white"/>
                                    <path d="M41.8477 35.6367C42.3331 35.6367 42.7266 35.2433 42.7266 34.7578V31.2422C42.7266 30.7567 42.3331 30.3633 41.8477 30.3633C41.3622 30.3633 40.9688 30.7567 40.9688 31.2422V34.7578C40.9688 35.2433 41.3622 35.6367 41.8477 35.6367Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>`).join('')
    }
            </div>
            <div class="_container">
                    <div class="first-screen-slider__slide-content">
                        <ul>
                            <li>Надежно</li>
                            <li>Качественно</li>
                            <li>Доступно</li>
                        </ul>
                        <h1>Лучшая кухонная техника</h1>
                        <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
                            абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору</p>
                        <div class="button first-screen__btn">Подробнее</div>
                        <div class="first-screen-slider__nav first-screen-slider-nav">
                            <div class="first-screen-slider-nav__pagination"></div>
                            <div class="first-screen-slider-nav__prev">
                                <picture>
                                    <source srcset="img/icons/FS-arrow-l.svg" type="image/webp">
                                    <img src="img/icons/FS-arrow-l.svg" alt="стрелка на лево"></picture>
                            </div>
                            <div class="first-screen-slider-nav__next">
                                <picture>
                                    <source srcset="img/icons/FS-arrow-r.svg" type="image/webp">
                                    <img src="img/icons/FS-arrow-r.svg" alt="стрелка направо"></picture>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>`;


render(
    Shoppable,
    {
        image: "img/FS1.png",
        hotspots: [
            {
                title: "Простая плита",
                old_price: "19 999 р.",
                new_price: "16 999 р.",
                url: "https://eightouncecoffee.ca/products/hario-v60-02-matte-black-metal",
                coordinates: [60, 70]
            },
            {
                title: "Духовка Гореие",
                old_price: "19 999 р.",
                new_price: "16 999 р.",
                url: "https://eightouncecoffee.ca/products/hario-matte-black-scoop",
                coordinates: [80, 70]
            },
            {
                title: "Дорогая вытяжка",
                old_price: "19 999 р.",
                new_price: "16 999 р.",
                url: "https://eightouncecoffee.ca/products/hario-matte-black-scoop",
                coordinates: [15, 71]
            },
            {
                title: "Краная Раковина ",
                old_price: "19 999 р.",
                new_price: "16 999 р.",
                url: "https://eightouncecoffee.ca/products/hario-scale-timer",
                coordinates: [68, 35]
            }
        ],
        options: {
            theme: "white"
        }
    },
    "slider"
);
