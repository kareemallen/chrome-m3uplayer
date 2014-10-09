/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log ("Background.js loaded");

function myAlert() {
    console.log("My alert");
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('open-button').addEventListener('click', function() {
        chrome.fileSystem.chooseEntry({ type: "openFile" }, myAlert);
    });
});