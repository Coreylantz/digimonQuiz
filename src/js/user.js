import {Seq} from 'immutable';

const baseUser = new Seq({
  hp: 0,
  atk: 0,
  def: 0,
  sp: 0,
  int: 0,
  spd: 0,
  digimon: [`egg`]
});

export default baseUser;
