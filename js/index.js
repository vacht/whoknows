import { initStartScreen } from "./helpers/startScreen.js";
import { initLevel1 } from "./helpers/level1.js";
import { initLevel2 } from "./helpers/level2.js";
import { initLevel3 } from "./helpers/level3.js";
import { initLevel4 } from "./helpers/level4.js";
import { initFinal } from "./helpers/final.js";

document.addEventListener("DOMContentLoaded", () => {
    initStartScreen();
    initLevel1();
    initLevel2();
    initLevel3();
    initLevel4();
    initFinal();
});

