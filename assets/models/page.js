/**
  * Database object from where the page is drawn
  *
  * The properties recursively hold Array<Container> elements altho
  * one has elements to be drawn on screen while the other directly holds
  * the elements to be drawn as children.
  */
export class Container {
    constructor(id, content) {
        this.id = id;
        this.content = content;
    }
}
;
/**
 * Contains elements needed to build an HTML section.
 *
 * Allows id, classes, HTML content as well as childrens.
 * Requires an HTML tag.
 */
export class HTMLContent {
    constructor(tag, idHtml, classes, content, children) {
        this.tag = tag;
        this.idHtml = idHtml;
        this.classes = classes;
        this.content = content;
        this.children = children;
    }
}
;
export class HTMLContentImg extends HTMLContent {
    constructor(tag, alt, src, format, idHtml, classes, content, children) {
        super(tag, idHtml, classes, content, children);
        this.tag = tag;
        this.alt = alt;
        this.src = src;
        this.format = format;
        this.idHtml = idHtml;
        this.classes = classes;
        this.content = content;
        this.children = children;
    }
}
//# sourceMappingURL=page.js.map