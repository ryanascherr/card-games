const gamesList = [
    {
        name: "Spades",
        description: "A trick-taking game in which players bid on how many 'tricks' they can win based on the cards in their hand. The first card played each round sets the lead suit. All following players must play a card of that suit if able. The highest card of the lead suit that is played (or Spade, which trumps the lead suit) wins the trick.",
        rules: "https://bicyclecards.com/how-to-play/spades/",
        img: "./img/spades.png",
    },
    {
        name: "Texas Hold'em Poker",
        description: "Before and after each card(s) is revealed, players take turns to bet. To stay in the hand and see the next card, all players must have put the same amount of chips in the pot as each other. The best poker hand wins the pot.",
        rules: "https://bicyclecards.com/how-to-play/texas-holdem-poker/",
        img: "./img/texas.png",
    },
    {
        name: "Solitaire",
        description: "A solitary game where the player must position certain cards to build up each pile, in sequence and in suit, from the ace through the king.",
        rules: "https://bicyclecards.com/how-to-play/solitaire/",
        img: "./img/solitaire.png",
    },
    {
        name: "Slapjack",
        description: "A simple game where players take turns placing a card from their pile face up. If that card is a jack, all players must attempt to slap their hand down on it. The first player to do so wins all the cards under their hand. The first player to win all the cards wins the game.",
        rules: "https://bicyclecards.com/how-to-play/slapjack/",
        img: "./img/slapjack.png",
    },
    {
        name: "Tonk/Tunk",
        description: "Each player tries to form matched sets consisting of groups of three or four of a kind, or sequences of three or more cards of the same suit. Each player in turn must either draw from the stock or take the top discard. Before discarding, the player may 'tunk' (knock) if their unmatched cards count five or less.",
        rules: "https://bicyclecards.com/how-to-play/tunk/",
        img: "./img/tonk.png",
    },
    {
        name: "Six Card Golf",
        description: "In this game, players have several cards in front of them, only two of which are face up. Players will take turns drawing from the deck or discard piles, and can replace one of the cards in front of them, with the goal being to end each round with the lowest value of cards. Play ends after 9 'holes' (rounds).",
        rules: "https://bicyclecards.com/how-to-play/six-card-golf/",
        img: "./img/golf.png",
    },
    {
        name: "Spit",
        description: "Spit is a game played simultaneously by two players. Each player will have four piles of cards in front of them. When the game begins, players can put down cards if they are valued one higher or lower than the top card of a pile. The first player to get rid of all of their cards wins.",
        rules: "https://bicyclecards.com/how-to-play/spit/",
        img: "./img/spit.png",
    },
    {
        name: "Spoons",
        description: "Each player tries to make four of a kind. The dealer takes a card off the top of the deck, and then removes one card from their hand and passes it face down to the left. Cards are picked up and passed quickly around the table until someone gets four of a kind and takes a spoon from the center. Once the player with four of a kind takes a spoon, anyone can take a spoon. The player left without a spoon loses the round.",
        rules: "https://bicyclecards.com/how-to-play/spoons/",
        img: "./img/spoons.png",
    },
    {
        name: "Regicide",
        description: "Regicide is a cooperative game where players work together to defeat 12 powerful enemies. Players take turns to play cards to the table to attack the enemy and once enough damage is dealt, the enemy is defeated. The players win when the last King is defeated. But beware! Each turn the enemy strikes back. Players will discard cards to satisfy the damage and if they can't discard enough, everyone loses!",
        rules: "https://www.badgersfrommars.com/assets/RegicideRulesA4.pdf",
        img: "./img/regicide.png",
    }
]

let sortedArray = gamesList.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

$.each(sortedArray, function() {
    $(".all-container").append(
    `<div class="game">
    <div class="game-head">
    <h3>${this.name}</h3>
    </div>
    <div class="game-body">
    <a href="${this.rules}" target="_blank"><div class="img-container"><img src="${this.img}"></div></a>
    <h4>Summary:</h4>
    <p class="description">${this.description}</p>
    </div>
    </div>`)
});