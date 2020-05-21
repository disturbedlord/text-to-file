let text = document.getElementById("textarea");
let filename = document.getElementById('fileName');

// Downloading the file
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Download Button working
document.getElementById("download_btn").addEventListener("click", function(){
    if(fileName.value != "" && text.value != ""){
      download(fileName.value, text.value);
    }
}, false);

// reset Button working
document.getElementById("reset_btn").addEventListener("click" , () => {
  text.value = "";
  fileName.value = "";
} , false);
