function calculateSum() {
    // Mendapatkan nilai dari input
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;

    // Mengonversi nilai input menjadi bilangan bulat
    var intNumber1 = parseInt(number1);
    var intNumber2 = parseInt(number2);

    // Menghitung jumlah
    var sum = intNumber1 + intNumber2;

    // Menampilkan hasil
    document.getElementById('result').textContent = sum;
}