/*

Step 1 - Create a cycle that writes numbers from 1 to 100
Step 2 - Append those items to a container
Step 3 - Give some items (determined by a condition) a different style

#Tools
    - For
    - insertAdjacentHTML
    - Ifs (for style control)
    - CSS for page layout


*/


//Variables init

const dGrid = document.getElementById("dynamicGrid");

//Cycle

for (let i = 1; i <= 5; i++) {
    //Append to html element
    dGrid.insertAdjacentHTML("beforeend", `<div>${i}</div>`)
    //  cell.append(i);
}