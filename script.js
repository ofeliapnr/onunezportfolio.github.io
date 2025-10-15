//events blah blah
// https://www.youtube.com/watch?v=gHMBdpTx-Ys (tutorial I used)

//get button & dropdown content elements
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

//listen for clicks on the dropdown button
dropdownButton.addEventListener('click', ()=>{
    //toggle visibility of dropdown content
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', (event) => {
    //close dropdown if click is outside
    dropdownContent.style.display = 'none';
});
