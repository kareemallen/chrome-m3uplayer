/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log("Background.js loaded");

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("fileContents").hidden = true;
    document.getElementById('open-button').addEventListener('click', function () {
        chrome.fileSystem.chooseEntry({type: "openFile"}, getFile);
    });
});

function getFile(readOnlyEntry) {
    if (!readOnlyEntry) {
        console.log("User did not choose a file");
        return;
    }
    readOnlyEntry.file(function (file) {
        var reader = new FileReader();
//        reader.onerror = errorHandler;
        reader.onloadend = function (e) {
            document.getElementById("fileContents").value = e.target.result;
            console.log(e.target.result);
        };
        console.log('Reading file');
        reader.readAsText(file);
        document.getElementById("fileContents").hidden = false;
        document.getElementById("open-button").hidden = true;
    });
}
