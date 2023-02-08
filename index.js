let unitsList = [
  {
    unit: 'Length (Meter/Feet)',
    metricUnit: 'meter',
    imperialUnit: 'feet',
    convertedData: '',
    converter: 3.281,
  },
  {
    unit: 'Volume (Liters/Gallons)',
    metricUnit: 'liter',
    imperialUnit: 'gallon',
    convertedData: '',
    converter: 0.264,
  },
  {
    unit: 'Mass (Kilograms/Pounds)',
    metricUnit: 'kilo',
    imperialUnit: 'pound',
    convertedData: '',
    converter: 2.204,
  },
];

const inputEl = document.getElementById('number-input');
const convertBtnEl = document.getElementById('convert-btn');
const ulEl = document.getElementById('list-el');

let unitItem = [];

unitsList.forEach((e) => {
  unitItem.push(`<li><h3>${e.unit}</h3></li>`);
});

ulEl.innerHTML = unitItem;

convertBtnEl.addEventListener('click', () => {
  const numToConvert = inputEl.value;

  if (numToConvert) {
    unitItem = [];
    unitsList.forEach((e) => {
      const metricToImperial = Number(numToConvert * e.converter).toFixed(3);
      const imperialToMetric = Number(numToConvert / e.converter).toFixed(3);

      if (numToConvert !== '1') {
        unitItem.push(`<li>
          <h3>${e.unit}</h3>
          <p>${numToConvert} ${e.metricUnit}s = ${metricToImperial} ${
          e.imperialUnit !== 'feet' ? e.imperialUnit + 's' : e.imperialUnit
        } | ${numToConvert} ${
          e.imperialUnit !== 'feet' ? e.imperialUnit + 's' : e.imperialUnit
        } = ${imperialToMetric} ${e.metricUnit}s</p>
        </li>`);
        ulEl.innerHTML = unitItem;
      } else {
        unitItem.push(`<li>
          <h3>${e.unit}</h3>
          <p>${numToConvert} ${e.metricUnit} = ${metricToImperial} ${
          e.imperialUnit !== 'feet' ? e.imperialUnit + 's' : e.imperialUnit
        } | ${numToConvert} ${e.imperialUnit} = ${imperialToMetric} ${
          e.metricUnit
        }s</p>
        </li>`);
        ulEl.innerHTML = unitItem;
      }
    });
  }
});
