// function saklar() {
//     let lampuoff = document.getElementById("lampu1");
//     lampuoff.src = "/aset/on.gif";
// }
// function saklar1 () {
//     let lampuon = document.getElementById("lampu1");
//     lampuon.src = "/aset/off.gif";
// }

// function saklar(params) {
//     let lampu = document.getElementById("lampu1");
//     if (params == "on"){
//         lampu.src = "/aset/on.gif";
//     } else{
//         lampu.src = "/aset/off.gif"
//     }
//     return lampu;
// }

function saklar(a, b) {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (a == 'on') {
        switch (b) {
            case 1:
                lampu1.src = "/aset/on.gif";
                break;
            case 2:
                lampu2.src = "/aset/on.gif";
                break;
            case 3:
                lampu3.src = "/aset/on.gif";
                break;
        }
    } else if (a == 'off') {
        switch (b) {
            case 1:
                lampu1.src = "/aset/off.gif";
                break;
            case 2:
                lampu2.src = "/aset/off.gif";
                break;
            case 3:
                lampu3.src = "/aset/off.gif";
                break;
        }
    }
}

function saklar1() {
    let toggle = document.getElementById("default-toggle");

    if (toggle.checked) {
        lampu1.src = "/aset/on.gif";
    } else {
        lampu1.src = "/aset/off.gif";
    }
}





