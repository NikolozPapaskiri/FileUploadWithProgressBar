const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", () => {
    fileInput.click();
});

fileInput.onchange = ({target}) => {
    let file = target.files[0];//if user selected multiple files
    if(file){//if file is selected
        let fileName = file.name;//getting selected file name
        uploadFile(fileName);//calling uploadFile with passing file name as an arguent
    }
}

function uploadFile(name){
    let xhr = new XMLHttpRequest();//creating new xml onj (AJAX)
    xhr.open("POST", "php.upload.php");//sending post request to the specific URL/File
    
    xhr.send();
}