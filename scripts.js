// Write your JavaScript code here.
// Remember to pay attention to page loading!



function init () {
    let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = "0px";
    imgObj.style.bottom = "0px";
    let status = document.getElementById('flightStatus');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let bg = document.getElementById('shuttleBackground');

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function() {
        // confirm that shuttle is ready
        let takeoffReadyBool = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (takeoffReadyBool === true) {
            status.innerHTML = "Shuttle in Flight";
            bg.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
            movement = parseInt(imgObj.style.bottom) + 50 + 'px';
            imgObj.style.bottom = movement;
        }

        let missionAbort = document.getElementById("missionAbort");
        missionAbort.addEventListener("click", function() {
            let abortBool = window.confirm("Confirm that you want to abort the mission.");
            if (abortBool === true) {
                status.innerHTML = "Mission aborted.";
                bg.style.backgroundColor = "green";
                shuttleHeight.innerHTML = 0;
            }

        })

        let landing = document.getElementById("landing");
        landing.addEventListener("click", function() {
            window.alert("The shuttle is landing. Landing gear engaged.");
            status.innerHTML = "The shuttle has landed.";
            bg.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            imgObj.style.bottom = "0px";
            imgObj.style.left = "0px";
        })

        let upButton = document.getElementById("upButton");
        upButton.addEventListener("click", function() {
            movement = parseInt(imgObj.style.bottom) + 10 + 'px';
            imgObj.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) +10000;
        })

        let down = document.getElementById('down');
        down.addEventListener("click", function() {
            movement = parseInt(imgObj.style.bottom) - 10 + 'px';
            imgObj.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        })

        let left = document.getElementById('left');
        left.addEventListener("click", function() {
            movement = parseInt(imgObj.style.left) - 10 + 'px';
            imgObj.style.left = movement;
        })

        let right = document.getElementById('right');
        right.addEventListener("click", function() {
            movement = parseInt(imgObj.style.left) + 10 + 'px';
            imgObj.style.left = movement;
        })
       
    })
}

window.onload = init; // ensure all elements have loaded