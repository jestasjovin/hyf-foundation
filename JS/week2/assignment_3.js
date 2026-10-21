

  // Weather wear
  function clothesForForecast(temperature) {
    if (temperature <= 3) return "a thick coat, gloves and boots";
    if (temperature <= 13) return "a hoodie and a rain jacket";
    if (temperature <= 21) return "jeans and a light sweater";
    return "shorts and a t-shirt";
  }

  const clothesToWear = clothesForForecast(18);
  console.log(clothesToWear);
