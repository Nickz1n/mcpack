        // =====
        // =====    HAMBURGER NAV - OPEN/CLOSE
        // =====

        function hamburger() {
            var items = document.getElementById("list")
            if (items.style.opacity == 0) {
                items.style.opacity = 1;
                items.style.height = "50vh";
                items.style.pointerEvents = "visible";
            } else {
                items.style.opacity = 0;
                items.style.height = "0px";
                items.style.pointerEvents = "none";
            }
        }