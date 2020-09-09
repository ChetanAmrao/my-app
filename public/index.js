$(document).ready(function(){
    $("#fileInputControl").on("change", fileInputControlChangeEventHandler);
});

function fileInputControlChangeEventHandler(event){
    let fileInputControl = event.target;
    let files = fileInputControl.files;

    let firstFile = files[0];

    let fileReader = new FileReader;

    fileReader.onload = function(event){
        let fileContents = event.target.result;
        if( fileContents == 'D'){
            $("#preview").image('./dairy.svg')
        }
            
    }
    fileReader.readAsText(firstFile);


}