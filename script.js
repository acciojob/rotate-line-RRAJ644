  let angle = 0;
        const line = document.getElementById("line");

        function rotateLine() {
            angle += 2; // Increment the angle by 2 degrees
            line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }

        setInterval(rotateLine, 20); // Update rotation every 20ms