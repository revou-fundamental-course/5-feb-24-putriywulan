function celsiusToFahrenheit() {
  let suhuCelcius = document.getElementById("input-celcius").value;
  let suhuFahrenheit = (suhuCelcius * 9) / 5 + 32;
  let hasilKonversi = suhuFahrenheit + "°F";
  let caraKalkulasi = suhuCelcius + "°C * 9/5 + 32 = " + hasilKonversi;
  document.getElementById("hasil-fahrenheit").textContent = hasilKonversi;
  document.getElementById("hasil-kalkulasi").textContent = caraKalkulasi;
}
function resetForm() {
  // Mengatur nilai textarea input-celcius menjadi kosong
  document.getElementById("input-celcius").value = "";
  // Mengatur teks pada textarea hasil-fahrenheit menjadi kosong
  document.getElementById("hasil-fahrenheit").textContent = "";
  // Mengatur teks pada textarea hasil-kalkulasi menjadi kos
  document.getElementById("hasil-kalkulasi").textContent = "";
}
function reverseConversion() {
  // Mendapatkan nilai Fahrenheit dari textarea hasil-fahrenheit
  let suhuFahrenheit = parseFloat(
    document.getElementById("hasil-fahrenheit").textContent
  );

  // Mengonversi Fahrenheit ke Celcius
  let suhuCelcius = ((suhuFahrenheit - 32) * 5) / 9;
  console.log(suhuCelcius);
  // Mengatur nilai textarea input-celcius dengan nilai yang dikonversi
  document.getElementById("input-celcius").value = suhuCelcius.toFixed(2);
}
