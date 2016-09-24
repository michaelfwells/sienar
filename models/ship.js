var mongoose = require('mongoose');

var attackDiceSchema = new mongoose.Schema({ 
  red: { type: Number, default: 0 },
  blue: { type: Number, default: 0 },
  black: { type: Number, default: 0 }
});

var upgradeSlotSchema = new mongoose.Schema({ 
  commander: { type: Number, default: 0 },
  defensiveRetrofit: { type: Number, default: 0 },
  ionCanons: { type: Number, default: 0 },
  offensiveRetrofit: { type: Number, default: 0 },
  officer: { type: Number, default: 0 },
  ordinance: { type: Number, default: 0 },
  supportTeam: { type: Number, default: 0 },
  title: { type: Number, default: 0 },
  turbolaser: { type: Number, default: 0 },
  weaponsTeam: { type: Number, default: 0 }
});

var shipSchema = new mongoose.Schema({
  name: String,
  faction: String,
  command: { type: Number, default: 0 },
  squadron: { type: Number, default: 0 },
  engineering: { type: Number, default: 0 },
  frontShield: { type: Number, default: 0 },
  rightShield: { type: Number, default: 0 },
  rearShield: { type: Number, default: 0 },
  leftShield: { type: Number, default: 0 },
  movement: { type: Number, default: 0 },
  redirect: { type: Boolean },
  evade: {type: Boolean },
  brace: { type: Boolean },
  Scatter: { type: Boolean },
  contain: { type: Boolean },
  frontAttackDice: [attackDiceSchema],
  rightAttackDice: [attackDiceSchema],
  rearAttackDice: [attackDiceSchema],
  leftAttackDice: [attackDiceSchema],
  antiSquadronDice: { type: Number, default: 0 },
  hullPoints: { type: Number, default: 0 },
  baseCost: { type: Boolean, default: false },
  upgrades: [upgradeSlotSchema]
});

module.exports = mongoose.model('Ship', shipSchema);