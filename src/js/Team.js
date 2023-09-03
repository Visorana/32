export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(char) {
    this.characters.push(char);
  }

  [Symbol.iterator]() {
    this.currentIndex = 0;
    return {
      next: () => {
        if (this.currentIndex < this.characters.length) {
          const character = this.characters[this.currentIndex++];
          return { value: character, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}
