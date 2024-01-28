import {addComponent} from './features/component-loader.js';
import {contentClasses} from './features/content-classes.js';


async function features () {
    await addComponent("nav", "nav");
    await addComponent("hero", "section-hero");
    await addComponent("teaser", "section-teaser");
    await addComponent("grid", "section-grid");
    await addComponent("about", "section-about");
    await addComponent("about-teaser", "section-about-teaser");
    await addComponent("footer", "footer");
    contentClasses();
}



export {features};