const termperatureInput = document.getElementById('termperatureInput');
  const addtemperatureButton = document.getElementById('addtemperatureButton');
  const removetemperatureButton = document.getElementById('removetemperatureButton');
  const temperaturedivision = document.getElementById('temperaturedivision');

const countryInput = document.getElementById('countryInput');
  const addcountryButton = document.getElementById('addcountryButton');
  const removecountryButton = document.getElementById('removecountryButton');
  const countrydivision = document.getElementById('countrydivision');


  addtemperatureButton.addEventListener('click', function() {
    const text = temperatureInput.value;

    // Check if the input is not empty
    if (text) {
      const divItem = document.createElement('p');
      divItem.textContent = text;

      divItem.addEventListener('mouseover', function() {
        divItem.style.backgroundColor = 'lightgrey';
        divItem.style.fontWeight = 'bold';
        divItem.style.transition = '.5s'
        
      });

      divItem.addEventListener('mouseout', function() {
        divItem.style.backgroundColor = '';
        divItem.style.fontWeight = '';
      });

      temperaturedivision.appendChild(divItem);
      temperatureInput.value = '';
    }
  });

  removetemperatureButton.addEventListener('click', function() {
    const divItems = temperaturedivision.getElementsByTagName('p');

    if (divItems.length > 0) {
        temperaturedivision.removeChild(divItems[divItems.length - 1]);
    }
  });


addcountryButton.addEventListener('click', function() {
    const text = countryInput.value;

    // Check if the input is not empty
    if (text) {
      const divItem = document.createElement('p');
      divItem.textContent = text;

      divItem.addEventListener('mouseover', function() {
        divItem.style.backgroundColor = 'mediumpurple';
        divItem.style.fontWeight = 'bold';
        divItem.style.fontStyle = 'italic';
        divItem.style.transition = '.5s'
        
      });

      divItem.addEventListener('mouseout', function() {
        divItem.style.backgroundColor = '';
        divItem.style.fontWeight = 'normal';
        divItem.style.fontStyle = 'normal';
      });

      countrydivision.appendChild(divItem);
      countryInput.value = '';
    }
  });

  removecountryButton.addEventListener('click', function() {
    const divItems = countrydivision.getElementsByTagName('p');

    if (divItems.length > 0) {
        countrydivision.removeChild(divItems[divItems.length - 1]);
    }
  });