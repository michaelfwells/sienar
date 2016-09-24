import alt from '../alt';

class AddShipActions {
  constructor() {
    this.generateActions(
      'addShipSuccess',
      'addShipFail',
      'updateName',
      'updateGender',
      'invalidName',
      'invalidGender'
    );
  }

  addShip(shipInfo) {
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