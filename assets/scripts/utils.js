import { Container } from '../models/page';
export class BuildDirector {
    constructor() { }
    buildPage(page) {
        let builtPage = new Container();
        page.content.forEach((e) => {
            this.buildElement(e);
        });
        return builtPage;
    }
    buildElement(prop) {
        let element = document.createElement(prop.tag);
        this.buildClasses(prop.classes, element);
        if (prop.hasOwnProperty("id")) {
            element.setAttribute("id", prop.idHtml);
        }
        return element;
    }
    buildContent(content) {
        if (!content)
            return null;
        content.forEach((e) => {
            this.buildElement(e);
        });
    }
    recursiveBuild(args) {
        if (!args)
            return null;
        args.forEach(e => {
            this.buildPage(e);
        });
    }
    buildClasses(classes, element) {
        if (classes.length < 1)
            return null;
        classes.forEach(e => {
            element.classList.add(e);
        });
    }
    static getInstance() {
        if (!BuildDirector.instance) {
            BuildDirector.instance = new BuildDirector();
        }
        return BuildDirector.instance;
    }
}
//# sourceMappingURL=utils.js.map