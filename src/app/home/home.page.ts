import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor } from '@angular/common';

type Card = {
  id: number;
  key: string;
  image: string;
  revealed: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonicModule,
    NgIf,
    NgFor,
  ],
})
export class HomePage {

  pairs = 8;
  image = [
    'assets/icon/1.png', 'assets/icon/2.webp', 'assets/icon/3.png', 'assets/icon/4.jpg',
    'assets/icon/5.png', 'assets/icon/6.webp', 'assets/icon/7.svg', 'assets/icon/8.png',
    'assets/icon/9.png', 'assets/icon/10.webp', 'assets/icon/11.png', 'assets/icon/12.png',
    'assets/icon/13.jpg', 'assets/icon/14.png', 'assets/icon/15.webp', 'assets/icon/16.jpg'
  ]

  cards: Card[] = [];
  firstPick: Card | null = null;
  secondPick: Card | null = null;
  boardLocked = false;
  attempts: number = 0;
  matches: number = 0;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.attempts = 0;
    this.matches = 0;
    this.firstPick = null;
    this.secondPick = null;
    this.boardLocked = false;
    const selected: string[] = this.image.slice(0, this.pairs);

    const deck: Card[] = selected.flatMap<Card>((e: string, i: number) => ([
      { id: i * 2, key: 'k' + i, image: e, revealed: false, matched: false },
      { id: i * 2 + 1, key: 'k' + i, image: e, revealed: false, matched: false }
    ]));

    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    this.cards = deck;
  }

  onCardClick(card: Card) {
    if (card.revealed || card.matched) {
      return;
    }

    card.revealed = true;

    if (!this.firstPick) {
      this.firstPick = card;
      return;
    }


    if (!this.secondPick) {
      this.secondPick = card;
      this.attempts++;

      this.boardLocked = true;

      const match = this.firstPick.key === this.secondPick.key;

      if (match) {
        this.firstPick.matched = true;
        this.secondPick.matched = true;
        this.matches++;
        this.resetPick();
      } else {

        setTimeout(() => {
          if (this.firstPick) this.firstPick.revealed = false;
          if (this.secondPick) this.secondPick.revealed = false;
          this.resetPick()
        }, 800)
      }
    }
  }

  resetPick() {
    this.firstPick = null;
    this.secondPick = null;
    this.boardLocked = false;
  }
  get finished() {
    return this.matches === this.pairs;
  }
}
