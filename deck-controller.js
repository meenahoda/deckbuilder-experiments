const unitList = require('./deck/units.json')

module.exports = class DeckController {
    constructor () {
        this.unitList = unitList
    }

    generateDeck (deckSize) {
        const thisDeck = []
        console.log('\nGenerating deck of size ', deckSize)
        console.log(`\nFrom the list of cards: `, unitList, '\n')

        while (deckSize > thisDeck.length) {
            const i =  Math.floor(Math.random() * (unitList.length))
            console.log('getting card from ', i)
            thisDeck.push(unitList[i])
        }

        console.log('\n\nHere is your deck ', thisDeck)

        return thisDeck
    }
}