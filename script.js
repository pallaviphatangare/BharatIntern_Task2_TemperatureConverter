    function convertTemperature() {
      const temperatureInput = document.getElementById('temperature');
      const fromUnit = document.getElementById('from-unit').value;
      const toUnit = document.getElementById('to-unit').value;
      const resultInput = document.getElementById('result');

      const temperature = parseFloat(temperatureInput.value);
      let result;

      if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperature - 32) * (5/9);
      } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (temperature - 32) * (5/9) + 273.15;
      } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperature * 9/5) + 32;
      } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperature + 273.15;
      } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (temperature - 273.15) * 9/5 + 32;
      } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperature - 273.15;
      } else {
        result = temperature; // Same unit conversion
      }

      resultInput.value = result.toFixed(2);
    }
