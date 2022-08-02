var helperMethods = {

    clickWithXpath: (xpathElement) => {
        return cy.xpath(xpathElement).click().log('Click on Element->', xpathElement);

    },


}
export default { helperMethods };