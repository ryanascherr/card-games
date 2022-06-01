const gamesList = [
    {
        name: "Spades",
        description: "A trick-taking game in which players bid on how mant 'tricks' they can win based on the cards in their hand. The first card played each round sets the lead suit. All following players must play a card of that suit if able. The highest card of the lead suit that is played (or Spade, which trumps the lead suit) wins the trick.",
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
        description: "A solitary game where the player must into position certain cards to build up each foundation (pile), in sequence and in suit, from the ace through the king.",
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
        description: "Each player tries to form matched sets consisting of groups of three or four of a kind, or sequences of three or more cards of the same suit. Each player in turn must either draw from the stock or take the top discard, followed by discarding. Only the player on the dealer's left, whose turn comes first, may take the first upcard. Before discarding, the player may 'tunk' (knock) if their unmatched cards count five or less.",
        rules: "https://bicyclecards.com/how-to-play/tunk/",
        img: "./img/tonk.png",
    },
    {
        name: "Six Card Golf",
        description: "In this game, players have two rows of three cards in front of them (only two of which are face up), with the goal being to end each round with the lowest value of cards. Players will take turns drawing from the deck or discard piles, and can replace one of the cards in front of them. Play ends after 9 'holes' (rounds).",
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
        description: "Each player tries to make four of a kind. The dealer takes a card off the top of the deck to have five cards in their hand, removes one and passes it face down to the left. Each player discards to the person on their left. Cards are picked up and passed quickly around the table until someone gets four of a kind and takes a spoon from the center. Once the player with four of a kind takes a spoon, anyone can take a spoon. The player left without a spoon gets a letter, and with five letters you lose.",
        rules: "https://bicyclecards.com/how-to-play/spoons/",
        img: "./img/spoons.png",
    }
    
]

let sortedArray = gamesList.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

$.each(sortedArray, function() {
    $(".recent-container").append(
    `<div class="game">
    <div class="game-head">
    <h3><a href="${this.rules}">${this.name}</a></h3>
    </div>
    <div class="game-body">
    <div class="img-container"><img src="${this.img}"></div>
    <h4>Summary:</h4>
    <p class="description">${this.description}</p>
    </div>
    </div>`)
});

$(".recent").addClass("selected");

$(".nav-item").click(function() {
    $(".nav-item").removeClass("selected");
    $(this).addClass("selected");
})

$(".recent").click(function() {
    $(".parent-container").addClass("hidden");
    $(".recent-parent-container").removeClass("hidden");
})

$(".favorites").click(function() {
    $(".parent-container").addClass("hidden");
    $(".favorites-parent-container").removeClass("hidden");
})

$(".all").click(function() {
    $(".parent-container").addClass("hidden");
    $(".all-parent-container").removeClass("hidden");
})

$(".wishlist").click(function() {
    $(".parent-container").addClass("hidden");
    $(".wishlist-parent-container").removeClass("hidden");
})

$(".search").click(function() {
    $(".parent-container").addClass("hidden");
    $(".tag").removeClass("selected-tag");
    $(".search-parent-container").removeClass("hidden");
})

// let arrayOfTags = [];
$(".tag").click(function() {
    let tag = $(this).data("tag");

    $(".search-container").empty();

    // if ($(this).hasClass("selected-tag")) {
    //     $(this).removeClass("selected-tag");
    //     arrayOfTags.splice($.inArray(tag, arrayOfTags), 1 );
    //     console.log(arrayOfTags);
    // } else {
    //     $(this).addClass("selected-tag");
    //     arrayOfTags.push(tag);
    //     console.log(arrayOfTags); 
    // }

    $(".tag").removeClass("selected-tag");
    $(this).addClass("selected-tag");

    $.each(sortedArray, function() {
        if (tag == this.genre && !this.wishlist && !this.favorite) {
            $(".search-container").append(
                `<div class="game">
                <div class="game-head">
                <h3>${this.name}</h3>
                </div>
                <div class="game-body">
                <div class="img-container"><img src="${this.img}"></div>
                <ul>
                <li>Player Count: ${this.playerCount}</li>
                <li>Play Time: ${this.playTime} minutes</li>
                <li>Genre: ${this.genre}</li>
                </ul>
                <p class="description">${this.description}</p>
                </div>
                </div>`)
        }
        if (tag == this.genre && !this.wishlist && this.favorite) {
            $(".search-container").append(
                `<div class="game">
                <div class="game-head">
                <h3>${this.name}</h3>
                </div>
                <div class="game-body">
                <div class="img-container"><img class="favorite" src="${this.img}"></div>
                <ul>
                <li>Player Count: ${this.playerCount}</li>
                <li>Play Time: ${this.playTime} minutes</li>
                <li>Genre: ${this.genre}</li>
                </ul>
                <p class="description">${this.description}</p>
                </div>
                </div>`)
        }
    })

    // $.each(sortedArray, function () {
    //     let matchesAll = true;
    //     $.each(this.genre, function () {
    //         if (arrayOfTags.includes(this)) return;
    //         if (!arrayOfTags.includes(this)) {
    //             matchesAll = false;
    //         }
    //     })
    //     if (matchesAll) {
    //         $(".search-container").append(
    //             `<div class="game">
    //             <div class="game-head">
    //             <h3>${this.name}</h3>
    //             </div>
    //             <div class="game-body">
    //             <div class="img-container"><img src="${this.img}"></div>
    //             <ul>
    //             <li>Player Count: ${this.playerCount}</li>
    //             <li>Play Time: ${this.playTime} minutes</li>
    //             <li>Genre: ${this.genre}</li>
    //             </ul>
    //             <p class="description">${this.description}</p>
    //             </div>
    //             </div>`)
    //     }
    // })
})