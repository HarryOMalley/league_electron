const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}


$('#search').on('click', () => {
    console.log("Clicked");
    var input_value = document.getElementById('data').value;
    win.getElementById('display').innerHTML = input_value;
}) 

app.on('ready', createWindow)