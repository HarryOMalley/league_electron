let $ = require('jquery')  // jQuery now loaded and assigned to $
let count = 0

$('#btn').on('click', () => {
    console.log("Clicked");
    var input_value = document.getElementById('data').value;
    document.getElementById('display').innerHTML = input_value;
}) 