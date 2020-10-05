const unitList = require('./cardHoard/units.json')

module.exports = class DeckController {
    constructor ({ startDeckSize, handSize }) {
        this.unitList = unitList
        this.deck = []
        this.startDeckSize = startDeckSize || 5
        this.handSize = handSize || 3
    }

    generateDeck () {
        const thisDeck = []
        console.log('\nGenerating deck of size ', this.startDeckSize)
        console.log(`\nFrom the list of cards: `, unitList, '\n')

        while (this.startDeckSize > thisDeck.length) {
            const i =  Math.floor(Math.random() * (unitList.length))
            console.log('getting card from ', i)
            thisDeck.push(unitList[i])
        }

        console.log('\n\nHere is your deck ', thisDeck)

        this.deck = thisDeck
    }

    refreshHand (deck) {
        console.log('\nFirst turn OR end of turn, time to get a hand')
    }
}