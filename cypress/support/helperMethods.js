var helperMethods = {

    clickWithXpath: (xpathElement) => {
        return cy.xpath(xpathElement).click().log('Clicked on Element->' + xpathElement);

    },
    enterTextWithXpath: (xpathElement, textData) => {
        return cy.xpath(xpathElement).type(textData).log('Entered-->' + textData + '<--->in Element-->' + xpathElement);
    },
    getTextusingXpath: (xpathElement) => {
        return cy.xpath(xpathElement).then(function (elementText) {
            elementText.Text();
            cy.log(elementText.Text())
        })

    }
}
export default { helperMethods };