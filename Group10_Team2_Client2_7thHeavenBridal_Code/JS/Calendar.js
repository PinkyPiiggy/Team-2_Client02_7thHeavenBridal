let active;
function collapseA() {

    if (active) {
        document.getElementById('collapseAppointment').classList.replace('bi-chevron-down', 'bi-dash-lg');
        active = false;
    }
    else {
        document.getElementById('collapseAppointment').classList.replace('bi-dash-lg', 'bi-chevron-down');
        active = true;

    }

}

let active2;
function collapseB() {

    if (active) {
        document.getElementById('collapseSize').classList.replace('bi-chevron-down', 'bi-dash-lg');
        active = false;
    }
    else {
        document.getElementById('collapseSize').classList.replace('bi-dash-lg', 'bi-chevron-down');
        active = true;

    }

}

function ChangeSelected(current) {

    for (let i = 0; i < 6; i++) {
        document.getElementById('content' + i).style.width = 250 + 'px';
    }

    document.getElementById('content' + current).style.width = 600 + 'px';

}

function SelectBTN(event) {
    target = event.target;  
    const boxes = document.querySelectorAll('.btns');

    for (const box of boxes) {
        box.classList.remove('border', 'border-black', 'border-3',);
    }
    
    target.classList.add('border', 'border-black', 'border-3',);

}