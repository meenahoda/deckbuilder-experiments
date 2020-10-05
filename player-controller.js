const DeckController = require('./deck-controller')

module.exports = class PlayerController {
    constructor(type) {
        this.type = type
        this.deck = []
        this.deckController = new DeckController({ startDeckSize: 5, handSize: 3 })
        this.deckController.generateDeck()
    }
}