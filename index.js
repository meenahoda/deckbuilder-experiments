const deckController = require("./deck-controller")

const DeckController = require('./deck-controller')

module.exports = function gameplayLoop () {
    const deckController = new DeckController()
    deckController.generateDeck(5)
}()



// Each turn getHand is called to get a hand of 5 cards, which is then discarded at the end of the turn
function getHand () {
    console.log('Getting a fresh hand of cards')
}
