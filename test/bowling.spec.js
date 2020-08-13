import { Bowling } from '../src/bowling';

describe('Bowling', () => {
  it('should be able to score a game with all zeros', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const bowling = new Bowling();

    rolls.forEach(roll => bowling.roll(roll));

    expect(bowling.score()).toEqual(0);
  });
});

