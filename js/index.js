import { initStartScreen } from "./helpers/startScreen.js";
import { initLevel1 } from "./helpers/level1.js";
import { initLevel2 } from "./helpers/level2.js";
import { initLevel3 } from "./helpers/level3.js";

document.addEventListener("DOMContentLoaded", () => {
    initStartScreen();
    initLevel1();
    initLevel2();
    initLevel3();
});

