import alt from '../alt';

class AddShipActions {
  constructor() {
    this.generateActions(
      'addShipSuccess',
      'addShipFail',
      'updateName',
      'invalidName',
        'updateFaction',
        'updateCommand',
        'updateSquadron',
        'updateEngineering',
        'updateFrontShield',
        'updateRightShield',
        'updateRearShield',
        'updateLeftShield',
        'updateMovement',
        'updateRedirect',
        'updateEvade',
        'updateBrace',
        'updateScatter',
        'updateContain',
        'updateLeftRed',
        'updateLeftBlue',
        'updateLeftBlack',
        'updateRearRed',
        'updateRearBlue',
        'updateRearBlack',
        'updatetRightRed',
        'updateRightBlue',
        'updateRightBlack',
        'updatetFrontRed',
        'updateFrontBlue',
        'updateFrontBlack',
        'updateAntiSquadron',
        'updateHullPoints',
        'updateBaseCost',
        'updateCommander',
        'updateDefensiveRetrofit',
        'updateIonCanons',
        'updateOffensiveRetrofit',
        'updateOfficer',
        'updateOrdinance',
        'updateSupportTeam',
        'updateTitle',
        'updateTurbolaser',
        'updateWeaponsTeam'
    );
  }

  addShip(shipInfo) {
    console.log('test');
    $.ajax({
      type: 'POST',
      url: '/api/Ships',
      data: shipInfo
    })
      .done((data) => {
        this.actions.addShipSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addShipFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddShipActions);