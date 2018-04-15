function trafficLightSwitcher() {
    const onOffButton = document.querySelector('.toggle_button');
    const greenLight = document.querySelector(".green");
    const yellowLight = document.querySelector(".yellow");
    const redLight = document.querySelector(".red");

    let isEnabled = true;

    onOffButton.addEventListener('click', toggleTrafficLight);

    function toggleTrafficLight() {
        if (isEnabled){
            switchOffAll();
        } else {
            switchOn();
        }
    }

    function switchOffAll() {
        greenLight.classList.add('disable');
        yellowLight.classList.add('disable');
        redLight.classList.add('disable');
        onOffButton.classList.add('disable');

        isEnabled = false;
    }

    function switchOn() {
        onOffButton.classList.remove('disable');

        isEnabled = true;

    }
    // должен быть другой способ вызова этих функций
    greenLight.addEventListener('click', (el) => {
        switchLight(el, [yellowLight, redLight]);
    });
    yellowLight.addEventListener('click', (el) => {
        switchLight(el, [redLight, greenLight]);
    });
    redLight.addEventListener('click', (el) => {
        switchLight(el, [yellowLight, greenLight]);
    });

    function switchLight(el, addlels) {
        if (isEnabled){
            el.path[0].classList.remove('disable');

            addlels.forEach((e) => {
                console.log(e);
                e.classList.add('disable');

            });
        }
    }
}
trafficLightSwitcher();