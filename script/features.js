import {addComponent} from './features/component-loader.js';
import {contentClasses} from './features/content-classes.js';
import {observeColor, observeProjects, observeSection} from './features/observer.js';


async function features() {
    await addComponent("nav", "nav");
    await addComponent("hero", "section-hero");
    await addComponent("teaser", "section-teaser");
    await addComponent("grid", "section-grid");
    await addComponent("about", "section-about");
    await addComponent("about-teaser", "section-about-teaser");
    await addComponent("footer", "footer");
    contentClasses();
    observeColor(document.querySelector(".section-grid"));
    let getProjectItems = document.querySelectorAll(".project");
    let getSections = document.querySelector(".section-about-teaser .columns");

    getProjectItems.forEach(project => {
       observeProjects(project);
    });
    observeSection(getSections);
}

export {features};
