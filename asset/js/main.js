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

for (let i = 1; i <= 100; i++) {

    if (i % 15 === 0) {

        dGrid.insertAdjacentHTML("beforeend", `<div class="cell times15">fizzbuzz</div>`);
    } else if (i % 5 === 0) {
        dGrid.insertAdjacentHTML("beforeend", `<div class="cell times5">buzz</div>`);
    } else if (i % 3 === 0) {
        dGrid.insertAdjacentHTML("beforeend", `<div class="cell times3">fizz</div>`);
    } else {
        dGrid.insertAdjacentHTML("beforeend", `<div class="cell">${i}</div>`);
    }

}

