import React from 'react';
import AddShipStore from '../stores/AddShipStore';
import AddShipActions from '../actions/AddShipActions';

class AddShip extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddShipStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddShipStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddShipStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
      event.preventDefault();

    var ship = {
        name: this.state.name.trim(),
        faction: this.state.faction,
        command: this.state.command,
        squadron: this.state.squadron,
        engineering: this.state.engineering,
        frontShield: this.state.frontShield,
        rightShield: this.state.rightShield,
        rearShield: this.state.rearShield,
        leftShield: this.state.leftShield,
        movement: this.state.movement,
        redirect: this.state.redirect,
        evade: this.state.evade,
        brace: this.state.brace,
        scatter: this.state.scatter,
        contain: this.state.contain,
        frontAttackDice: this.state.frontDice,
        rightAttackDice: this.state.rightDice,
        rearAttackDice: this.state.rearDice,
        leftAttackDice: this.state.leftDice,
        antiSquadronDice: this.state.antiSquadron,
        hullPoints: this.state.hullPoints,
        baseCost: this.state.cost,
        upgrades: this.state.upgrades
    }

      AddShipActions.addShip(ship);

  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Ship</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>Ship Name</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddShipActions.updateName} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Ship Faction (rebel/empire)</label>
                    <input type='text' className='form-control' ref='factionTextField' value={this.state.faction}
                    onChange={AddShipActions.updateFaction} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Command Value </label>
                    <input type='number' className='form-control' ref='commandTextField' value={this.state.command}
                    onChange={AddShipActions.updateCommandValue} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Squadron Value </label>
                    <input type='number' className='form-control' ref='squadronTextField' value={this.state.squadron}
                    onChange={AddShipActions.updateSquadronValue} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Engineering Value </label>
                    <input type='number' className='form-control' ref='engineeringTextField' value={this.state.engineering}
                    onChange={AddShipActions.updateEngineeringValue} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Front Shield </label>
                    <input type='number' className='form-control' ref='frontShieldTextField' value={this.state.frontShield}
                    onChange={AddShipActions.updateFrontShield} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Right Shield </label>
                    <input type='number' className='form-control' ref='rightShieldTextField' value={this.state.rightShield}
                    onChange={AddShipActions.updateRightShield} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Rear Shield </label>
                    <input type='number' className='form-control' ref='rearShieldTextField' value={this.state.rearShield}
                    onChange={AddShipActions.updateRearShield} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Left Shield </label>
                    <input type='number' className='form-control' ref='leftShieldTextField' value={this.state.leftShield}
                    onChange={AddShipActions.updateLeftShield} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Movement </label>
                    <input type='number' className='form-control' ref='movementTextField' value={this.state.movement}
                    onChange={AddShipActions.updateMovement} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Redirect </label>
                    <input type='checkbox' className='form-control' ref='redirectField' value={this.state.redirect}
                    onChange={AddShipActions.updateRedirect} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Evade </label>
                    <input type='checkbox' className='form-control' ref='evadeField' value={this.state.evade}
                    onChange={AddShipActions.updateEvade} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Brace </label>
                    <input type='checkbox' className='form-control' ref='braceField' value={this.state.brace}
                    onChange={AddShipActions.updateBrace} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Scatter </label>
                    <input type='checkbox' className='form-control' ref='scatterField' value={this.state.scatter}
                    onChange={AddShipActions.updateScatter} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Contain </label>
                    <input type='checkbox' className='form-control' ref='containField' value={this.state.contain}
                    onChange={AddShipActions.updateContain} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Front Dice - Red </label>
                    <input type='number' className='form-control' ref='frontRedTextField' value={this.state.frontDice.red}
                    onChange={AddShipActions.updateFrontRed} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Front Dice - Blue </label>
                    <input type='number' className='form-control' ref='frontBlueTextField' value={this.state.frontDice.blue}
                    onChange={AddShipActions.updateFrontBlue} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Front Dice - Black </label>
                    <input type='number' className='form-control' ref='frontBlackTextField' value={this.state.frontDice.black}
                    onChange={AddShipActions.updateFrontBlack} />
                  </div>

                   <div className={'form-group'}>
                    <label className='control-label'>Right Dice - Red </label>
                    <input type='number' className='form-control' ref='rightRedTextField' value={this.state.rightDice.red}
                    onChange={AddShipActions.updateRightRed} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Right Dice - Blue </label>
                    <input type='number' className='form-control' ref='rightBlueTextField' value={this.state.rightDice.blue}
                    onChange={AddShipActions.updateRightBlue} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Right Dice - Black </label>
                    <input type='number' className='form-control' ref='rightBlackTextField' value={this.state.rightDice.black}
                    onChange={AddShipActions.updateRightBlack} />
                  </div>

                   <div className={'form-group'}>
                    <label className='control-label'>Rear Dice - Red </label>
                    <input type='number' className='form-control' ref='rearRedTextField' value={this.state.rearDice.red}
                    onChange={AddShipActions.updateRearRed} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Rear Dice - Blue </label>
                    <input type='number' className='form-control' ref='rearBlueTextField' value={this.state.rearDice.blue}
                    onChange={AddShipActions.updateRearBlue} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Rear Dice - Black </label>
                    <input type='number' className='form-control' ref='rearBlackTextField' value={this.state.rearDice.black}
                    onChange={AddShipActions.updateRearBlack} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Left Dice - Red </label>
                    <input type='number' className='form-control' ref='leftRedTextField' value={this.state.leftDice.red}
                    onChange={AddShipActions.updateLeftRed} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Left Dice - Blue </label>
                    <input type='number' className='form-control' ref='leftBlueTextField' value={this.state.leftDice.blue}
                    onChange={AddShipActions.updateLeftBlue} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Left Dice - Black </label>
                    <input type='number' className='form-control' ref='leftBlackTextField' value={this.state.leftDice.black}
                    onChange={AddShipActions.updateLeftBlack} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Anti-Squadron Dice </label>
                    <input type='number' className='form-control' ref='antiSquadronTextField' value={this.state.antiSquadron}
                    onChange={AddShipActions.updateAntiSquadron} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Hull Points </label>
                    <input type='number' className='form-control' ref='hullPointsTextField' value={this.state.hullPoints}
                    onChange={AddShipActions.updateHullPoints} />
                  </div>
                  <div className={'form-group'}>
                    <label className='control-label'>Point Cost </label>
                    <input type='number' className='form-control' ref='costTextField' value={this.state.baseCost}
                    onChange={AddShipActions.updateBaseCost} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Commander Upgrade </label>
                    <input type='checkbox' className='form-control' ref='commanderTextField' value={this.state.upgrades.commander}
                    onChange={AddShipActions.updateCommander} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Defensive Retrofit Upgrade </label>
                    <input type='checkbox' className='form-control' ref='defensiveRetrofitTextField' value={this.state.upgrades.defensiveRetrofit}
                    onChange={AddShipActions.updateDefensiveRetrofit} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Ion Canons Upgrade </label>
                    <input type='checkbox' className='form-control' ref='ionCanonsTextField' value={this.state.upgrades.ionCanons}
                    onChange={AddShipActions.updateIonCanons} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Offensive Retrofit Upgrade </label>
                    <input type='checkbox' className='form-control' ref='commanderTextField' value={this.state.upgrades.offensiveRetrofit}
                    onChange={AddShipActions.updateOffensiveRetrofit} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Officer Upgrade </label>
                    <input type='checkbox' className='form-control' ref='commanderTextField' value={this.state.upgrades.officer}
                    onChange={AddShipActions.updateOfficer} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Ordinance Upgrade </label>
                    <input type='checkbox' className='form-control' ref='commanderTextField' value={this.state.upgrades.ordinance}
                    onChange={AddShipActions.updateOrdinance} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Support Team Upgrade </label>
                    <input type='checkbox' className='form-control' ref='commanderTextField' value={this.state.upgrades.supportTeam}
                    onChange={AddShipActions.updateSupportTeam} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Title Upgrade </label>
                    <input type='checkbox' className='form-control' ref='commanderTextField' value={this.state.upgrades.title}
                    onChange={AddShipActions.updateTitle} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Turbolaser Upgrade </label>
                    <input type='checkbox' className='form-control' ref='commanderTextField' value={this.state.upgrades.turbolaser}
                    onChange={AddShipActions.updateTurbolaser} />
                  </div>

                  <div className={'form-group'}>
                    <label className='control-label'>Weapons Team Upgrade </label>
                    <input type='checkbox' className='form-control' ref='commanderTextField' value={this.state.upgrades.weaponsTeam}
                    onChange={AddShipActions.updateWeaponsTeam} />
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddShip;