  const bulb = document.querySelector('.ampoule');
  const light = document.querySelector('.interrupteur');
  const switchButton = document.querySelector('#switch');

   light.addEventListener('click', () => {
      bulb.classList.toggle('on');
        });

    switchButton.addEventListener('change', () => {
            if (switchButton.checked) {
                light.style.display = 'block';
            } else {
                light.style.display = 'none';
                bulb.classList.remove('on');
            }
        });