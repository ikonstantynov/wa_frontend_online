function dropdown(el) {
    const titleEl = el.querySelector('.dropdown__title');
    const options = el.querySelector('.dropdown__options');

    function toggleMenu() {
        el.classList.toggle('opened');
    }

    el.addEventListener('click', (e) => {
        if (e.target.classList.contains('dropdown__options')){
            titleEl.textContent = e.target.textContent;
        }
        toggleMenu();

    });

    // options.addEventListener('click', (e) => {
    //     titleEl.textContent = e.target.textContent;
    // });
    //
    // el.addEventListener('blur', () => {
    //     console.log('closing');
    // })

    // var 1
    // options.forEach((option) => {
    //     option.addEventListener('click', (eventObject) => {
    //         console.log('Target: ', eventObject.target);
    //         console.log('Handler: ', el);
    //         titleEl.textContent = option.textContent;
    //     });
    // });


}

dropdown(document.querySelector('#moviesDropDown'));
dropdown(document.querySelector('#countriesDropDown'));