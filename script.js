function convert() {
    const inputNumber = document.getElementById('inputNumber').value;
    const fromBase = parseInt(document.getElementById('fromBase').value);
    const toBase = parseInt(document.getElementById('toBase').value);
    
    if (inputNumber === '') {
        alert('Please enter a number');
        return;
    }
    
    const result = parseInt(inputNumber, fromBase).toString(toBase).toUpperCase();
    document.getElementById('result').innerText = result;
}