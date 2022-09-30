var helperMethods = {

    clickWithXpath: (xpathElement) => {
        return cy.xpath(xpathElement).click().log('Clicked on Element->' + xpathElement);

    },
    enterTextWithXpath: (xpathElement, textData) => {
        return cy.xpath(xpathElement).type(textData).log('Entered-->' + textData + '<--->in Element-->' + xpathElement);
    }

}
export default { helperMethods };