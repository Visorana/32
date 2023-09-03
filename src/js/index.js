import Team from './Team.js';
import Character from './Character.js';

const char = new Character('Archer', 'Bowman', 50, 1, 40, 10);
const char2 = new Character('Warrior', 'Swordmaster', 60, 2, 50, 15);

const team = new Team();
team.addCharacter(char);
team.addCharacter(char2);

team.characters.forEach((character) => {
  console.log(character);
});
