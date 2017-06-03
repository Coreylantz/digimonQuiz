import {Map, List} from 'immutable';

const baseUser = new Map({
  hp: 0,
  atk: 0,
  def: 0,
  sp: 0,
  int: 0,
  spd: 0,
  digimon: new List()
});

export default baseUser;
