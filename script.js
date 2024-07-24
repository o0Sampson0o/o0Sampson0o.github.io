
window.onload = function () {
    const hero = document.querySelector('#hero');
    document.onscroll = function () {
        const rescaledScroll = window.scrollY / 100;
        let translate = 30 * (4 * rescaledScroll - rescaledScroll * rescaledScroll);
        translate = Math.max(translate, 0);
        hero.setAttribute('style', `transform: translateY(${(Math.round(translate))}px)`);
    };
};