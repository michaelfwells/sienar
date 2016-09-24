import alt from '../alt';
import AddShipActions from '../actions/AddShipActions';

class AddShipStore {
  constructor() {
    this.bindActions(AddShipActions);
    this.name = '';
    this.faction = '';
    this.command = 0;
    this.squadron = 0;
    this.engineering = 0;
    this.frontShield = 0;
    this.rightShield = 0;
    this.rearShield = 0;
    this.leftShield = 0;
    this.movement = 0;
    this.redirect = false;
    this.evade = false;
    this.brace = false;
    this.scatter = false;
    this.contain = false;
    this.frontDice = {red: 0, blue: 0, black: 0};
    this.rightDice = {red: 0, blue: 0, black: 0};
    this.rearDice = {red: 0, blue: 0, black: 0};
    this.leftDice = {red: 0, blue: 0, black: 0};
    this.antiSquadron = 0;
    this.hullPoints = 0;
    this.cost = 0;
    this.upgrades = {
        commander: 0,
        defensiveRetrofit: 0,
        ionCanons:  0,
        offensiveRetrofit:  0,
        officer: 0,
        ordinance: 0,
        supportTeam: 0,
        title:  0,
        turbolaser: 0,
        weaponsTeam: 0 
    }
    this.helpBlock = '';
    this.nameValidationState = '';
    this.genderValidationState = '';
  }

  onAddCharacterSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddCharacterFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateFaction(event) {
      this.faction = event.target.value;
  }

  onUpdateCommand(event) {
      this.command = event.target.value;
  }

  onUpdateSquadron(event) {
      this.squadron = event.target.value;
  }

  onUpdateEngineering(event) {
      this.engineering = event.target.value;
  }

  onUpdateFrontShield(event) {
      this.frontShield = event.target.value;
  }

  onUpdateRightShield(event) {
      this.rightShield = event.target.value;
  }

  onUpdateRearShield(event) {
      this.rearShield = event.target.value;
  }

  onUpdateLeftShield(event) {
      this.leftShield = event.target.value;
  }

  onUpdateMovement(event) {
      this.movement = event.target.value;
  }

  onUpdateRedirect(event) {
      this.redirect = event.target.value;
  }

  onUpdateEvade(event) {
      this.evade = event.target.value;
  }

  onUpdateBrace(event) {
      this.brace = event.target.value;
  }

  onUpdateScatter(event) {
      this.scatter = event.target.value;
  }

  onUpdateContain(event) {
      this.contain = event.target.value;
  }

  onUpdateFrontRed(event) {
      this.frontDice.red = event.target.value;
  }
  onUpdateFrontBlue(event) {
      this.frontDice.blue = event.target.value;
  }
  onUpdateFrontBlack(event) {
      this.frontDice.black = event.target.value;
  }

  onUpdateRightRed(event) {
      this.rightDice.red = event.target.value;
  }
  onUpdateRightBlue(event) {
      this.rightDice.blue = event.target.value;
  }
  onUpdateRightBlack(event) {
      this.rightDice.black = event.target.value;
  }


  onUpdateRearRed(event) {
      this.rearDice.red = event.target.value;
  }
  onUpdateRearBlue(event) {
      this.rearDice.blue = event.target.value;
  }
  onUpdateRearBlack(event) {
      this.rearDice.black = event.target.value;
  }

  onUpdateLeftRed(event) {
      this.leftDice.red = event.target.value;
  }
  onUpdateLeftBlue(event) {
      this.leftDice.blue = event.target.value;
  }
  onUpdateLeftBlack(event) {
      this.leftDice.black = event.target.value;
  }

  onUpdateAntiSquadron(event) {
      this.antiSquadron = event.target.value;
  }

  onUpdateHullPoints(event) {
      this.hullPoints = event.target.value;
  }

  onUpdateBaseCost(event) {
      this.baseCost = event.target.value;
  }

  onUpdateCommander(event) {
      this.upgrades.commander = event.target.value;
  }

  onUpdateDefensiveRetrofit(event) {
      this.upgrades.defensiveRetrofit = event.target.value;
  }

  onUpdateIonCanons(event) {
      this.upgrades.ionCanons = event.target.value;
  }

  onUpdateOffensiveRetrofit(event) {
      this.upgrades.offensiveRetrofit = event.target.value;
  }

  onUpdateOfficer(event) {
      this.upgrades.officer = event.target.value;
  }

  onUpdateOrdinance(event) {
      this.upgrades.ordinance = event.target.value;
  }

  onUpdateSupportTeam(event) {
      this.upgrades.supportTeam = event.target.value;
  }

  onUpdateTitle(event) {
      this.upgrades.title = event.target.value;
  }

  onUpdateTurbolaser(event) {
      this.upgrades.turbolaser = event.target.value;
  }

  onUpdateWeaponsTeam(event) {
      this.upgrades.weaponsTeam = event.target.value;
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a character name.';
  }

  onInvalidGender() {
    this.genderValidationState = 'has-error';
  }
}

export default alt.createStore(AddShipStore);