(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddShipActions = function () {
  function AddShipActions() {
    _classCallCheck(this, AddShipActions);

    this.generateActions('addShipSuccess', 'addShipFail', 'updateName', 'invalidName', 'updateFaction', 'updateCommand', 'updateSquadron', 'updateEngineering', 'updateFrontShield', 'updateRightShield', 'updateRearShield', 'updateLeftShield', 'updateMovement', 'updateRedirect', 'updateEvade', 'updateBrace', 'updateScatter', 'updateContain', 'updateLeftRed', 'updateLeftBlue', 'updateLeftBlack', 'updateRearRed', 'updateRearBlue', 'updateRearBlack', 'updatetRightRed', 'updateRightBlue', 'updateRightBlack', 'updatetFrontRed', 'updateFrontBlue', 'updateFrontBlack', 'updateAntiSquadron', 'updateHullPoints', 'updateBaseCost', 'updateCommander', 'updateDefensiveRetrofit', 'updateIonCanons', 'updateOffensiveRetrofit', 'updateOfficer', 'updateOrdinance', 'updateSupportTeam', 'updateTitle', 'updateTurbolaser', 'updateWeaponsTeam');
  }

  _createClass(AddShipActions, [{
    key: 'addShip',
    value: function addShip(shipInfo) {
      var _this = this;

      console.log('test');
      $.ajax({
        type: 'POST',
        url: '/api/Ships',
        data: shipInfo
      }).done(function (data) {
        _this.actions.addShipSuccess(data.message);
      }).fail(function (jqXhr) {
        _this.actions.addShipFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddShipActions;
}();

exports.default = _alt2.default.createActions(AddShipActions);

},{"../alt":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = function () {
  function FooterActions() {
    _classCallCheck(this, FooterActions);

    this.generateActions('getTopCharactersSuccess', 'getTopCharactersFail');
  }

  _createClass(FooterActions, [{
    key: 'getTopCharacters',
    value: function getTopCharacters() {
      var _this = this;

      $.ajax({ url: '/api/characters/top' }).done(function (data) {
        _this.actions.getTopCharactersSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getTopCharactersFail(jqXhr);
      });
    }
  }]);

  return FooterActions;
}();

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function () {
  function NavbarActions() {
    _classCallCheck(this, NavbarActions);

    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getCharacterCountSuccess', 'getCharacterCountFail', 'findCharacterSuccess', 'findCharacterFail');
  }

  _createClass(NavbarActions, [{
    key: 'findCharacter',
    value: function findCharacter(payload) {
      var _this = this;

      $.ajax({
        url: '/api/characters/search',
        data: { name: payload.searchQuery }
      }).done(function (data) {
        (0, _underscore.assign)(payload, data);
        _this.actions.findCharacterSuccess(payload);
      }).fail(function () {
        _this.actions.findCharacterFail(payload);
      });
    }
  }, {
    key: 'getCharacterCount',
    value: function getCharacterCount() {
      var _this2 = this;

      $.ajax({ url: '/api/characters/count' }).done(function (data) {
        _this2.actions.getCharacterCountSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getCharacterCountFail(jqXhr);
      });
    }
  }]);

  return NavbarActions;
}();

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":4,"underscore":"underscore"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddShipStore = require('../stores/AddShipStore');

var _AddShipStore2 = _interopRequireDefault(_AddShipStore);

var _AddShipActions = require('../actions/AddShipActions');

var _AddShipActions2 = _interopRequireDefault(_AddShipActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddShip = function (_React$Component) {
  _inherits(AddShip, _React$Component);

  function AddShip(props) {
    _classCallCheck(this, AddShip);

    var _this = _possibleConstructorReturn(this, (AddShip.__proto__ || Object.getPrototypeOf(AddShip)).call(this, props));

    _this.state = _AddShipStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AddShip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddShipStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddShipStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      console.log('handle submit');
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
      };

      _AddShipActions2.default.addShip(ship);
    }
  }, {
    key: 'render',
    value: function render() {
      var handleSubmit = this.handleSubmit;
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                'Add Ship'
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit.bind(this) },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.nameValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Ship Name'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                      onChange: _AddShipActions2.default.updateName, autoFocus: true }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Ship Faction (rebel/empire)'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'factionTextField', value: this.state.faction,
                      onChange: _AddShipActions2.default.updateFaction })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Command Value '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'commandTextField', value: this.state.command,
                      onChange: _AddShipActions2.default.updateCommandValue })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Squadron Value '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'squadronTextField', value: this.state.squadron,
                      onChange: _AddShipActions2.default.updateSquadronValue })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Engineering Value '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'engineeringTextField', value: this.state.engineering,
                      onChange: _AddShipActions2.default.updateEngineeringValue })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Front Shield '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'frontShieldTextField', value: this.state.frontShield,
                      onChange: _AddShipActions2.default.updateFrontShield })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Right Shield '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'rightShieldTextField', value: this.state.rightShield,
                      onChange: _AddShipActions2.default.updateRightShield })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Rear Shield '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'rearShieldTextField', value: this.state.rearShield,
                      onChange: _AddShipActions2.default.updateRearShield })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Left Shield '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'leftShieldTextField', value: this.state.leftShield,
                      onChange: _AddShipActions2.default.updateLeftShield })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Movement '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'movementTextField', value: this.state.movement,
                      onChange: _AddShipActions2.default.updateMovement })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Redirect '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'redirectField', value: this.state.redirect,
                      onChange: _AddShipActions2.default.updateRedirect })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Evade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'evadeField', value: this.state.evade,
                      onChange: _AddShipActions2.default.updateEvade })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Brace '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'braceField', value: this.state.brace,
                      onChange: _AddShipActions2.default.updateBrace })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Scatter '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'scatterField', value: this.state.scatter,
                      onChange: _AddShipActions2.default.updateScatter })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Contain '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'containField', value: this.state.contain,
                      onChange: _AddShipActions2.default.updateContain })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Front Dice - Red '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'frontRedTextField', value: this.state.frontDice.red,
                      onChange: _AddShipActions2.default.updateFrontRed })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Front Dice - Blue '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'frontBlueTextField', value: this.state.frontDice.blue,
                      onChange: _AddShipActions2.default.updateFrontBlue })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Front Dice - Black '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'frontBlackTextField', value: this.state.frontDice.black,
                      onChange: _AddShipActions2.default.updateFrontBlack })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Right Dice - Red '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'rightRedTextField', value: this.state.rightDice.red,
                      onChange: _AddShipActions2.default.updateRightRed })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Right Dice - Blue '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'rightBlueTextField', value: this.state.rightDice.blue,
                      onChange: _AddShipActions2.default.updateRightBlue })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Right Dice - Black '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'rightBlackTextField', value: this.state.rightDice.black,
                      onChange: _AddShipActions2.default.updateRightBlack })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Rear Dice - Red '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'rearRedTextField', value: this.state.rearDice.red,
                      onChange: _AddShipActions2.default.updateRearRed })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Rear Dice - Blue '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'rearBlueTextField', value: this.state.rearDice.blue,
                      onChange: _AddShipActions2.default.updateRearBlue })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Rear Dice - Black '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'rearBlackTextField', value: this.state.rearDice.black,
                      onChange: _AddShipActions2.default.updateRearBlack })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Left Dice - Red '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'leftRedTextField', value: this.state.leftDice.red,
                      onChange: _AddShipActions2.default.updateLeftRed })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Left Dice - Blue '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'leftBlueTextField', value: this.state.leftDice.blue,
                      onChange: _AddShipActions2.default.updateLeftBlue })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Left Dice - Black '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'leftBlackTextField', value: this.state.leftDice.black,
                      onChange: _AddShipActions2.default.updateLeftBlack })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Anti-Squadron Dice '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'antiSquadronTextField', value: this.state.antiSquadron,
                      onChange: _AddShipActions2.default.updateAntiSquadron })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Hull Points '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'hullPointsTextField', value: this.state.hullPoints,
                      onChange: _AddShipActions2.default.updateHullPoints })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Point Cost '
                    ),
                    _react2.default.createElement('input', { type: 'number', className: 'form-control', ref: 'costTextField', value: this.state.baseCost,
                      onChange: _AddShipActions2.default.updateBaseCost })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Commander Upgrade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'commanderTextField', value: this.state.upgrades.commander,
                      onChange: _AddShipActions2.default.updateCommander })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Defensive Retrofit Upgrade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'defensiveRetrofitTextField', value: this.state.upgrades.defensiveRetrofit,
                      onChange: _AddShipActions2.default.updateDefensiveRetrofit })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Ion Canons Upgrade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'ionCanonsTextField', value: this.state.upgrades.ionCanons,
                      onChange: _AddShipActions2.default.updateIonCanons })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Offensive Retrofit Upgrade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'commanderTextField', value: this.state.upgrades.offensiveRetrofit,
                      onChange: _AddShipActions2.default.updateOffensiveRetrofit })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Officer Upgrade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'commanderTextField', value: this.state.upgrades.officer,
                      onChange: _AddShipActions2.default.updateOfficer })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Ordinance Upgrade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'commanderTextField', value: this.state.upgrades.ordinance,
                      onChange: _AddShipActions2.default.updateOrdinance })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Support Team Upgrade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'commanderTextField', value: this.state.upgrades.supportTeam,
                      onChange: _AddShipActions2.default.updateSupportTeam })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Title Upgrade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'commanderTextField', value: this.state.upgrades.title,
                      onChange: _AddShipActions2.default.updateTitle })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Turbolaser Upgrade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'commanderTextField', value: this.state.upgrades.turbolaser,
                      onChange: _AddShipActions2.default.updateTurbolaser })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Weapons Team Upgrade '
                    ),
                    _react2.default.createElement('input', { type: 'checkbox', className: 'form-control', ref: 'commanderTextField', value: this.state.upgrades.weaponsTeam,
                      onChange: _AddShipActions2.default.updateWeaponsTeam })
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary', onSubmit: handleSubmit },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddShip;
}(_react2.default.Component);

exports.default = AddShip;

},{"../actions/AddShipActions":1,"../stores/AddShipStore":12,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'app-container' },
        _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
        _react2.default.createElement(
          'div',
          { style: { marginTop: 50 } },
          this.props.children
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":7,"./Navbar":9,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../stores/FooterStore');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.state = _FooterStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _FooterStore2.default.listen(this.onChange);
      _FooterActions2.default.getTopCharacters();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _FooterStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      var leaderboardCharacters = this.state.characters.map(function (character) {
        return _react2.default.createElement(
          'li',
          { key: character.characterId },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/characters/' + character.characterId },
            _react2.default.createElement('img', { className: 'thumb-md', src: 'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg' })
          )
        );
      });

      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-5' },
              _react2.default.createElement(
                'h3',
                { className: 'lead' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Information'
                ),
                ' and ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Copyright'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'Powered by ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Node.js'
                ),
                ', ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'MongoDB'
                ),
                ' and ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'React'
                ),
                ' with Flux architecture and server-side rendering.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'You may view the ',
                _react2.default.createElement(
                  'a',
                  { href: 'https://github.com/sahat/newedenfaces-react' },
                  'Source Code'
                ),
                ' behind this project on GitHub.'
              ),
              _react2.default.createElement(
                'p',
                null,
                '� 2015 Sahat Yalkabov.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-7 hidden-xs' },
              _react2.default.createElement(
                'h3',
                { className: 'lead' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Leaderboard'
                ),
                ' Top 5 Characters'
              ),
              _react2.default.createElement(
                'ul',
                { className: 'list-inline' },
                leaderboardCharacters
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions":2,"../stores/FooterStore":13,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            var style = { margin: 60, fontSize: 40 };
            var viewStyle = { paddingTop: 10 };
            return _react2.default.createElement(
                'div',
                { style: viewStyle },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/rebel' },
                    _react2.default.createElement(
                        'div',
                        { style: style },
                        _react2.default.createElement('img', { src: '/rebelLogo.png' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: style },
                    'Choose your side'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/empire' },
                    _react2.default.createElement(
                        'div',
                        { style: style },
                        _react2.default.createElement('img', { src: '/imperialLogo.png' })
                    )
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

},{"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.previousState = null;
    _this.onChange = _this.onChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);
      _NavbarActions2.default.getCharacterCount();

      var socket = io.connect();

      socket.on('onlineUsers', function (data) {
        _NavbarActions2.default.updateOnlineUsers(data);
      });

      $(document).ajaxStart(function () {
        _NavbarActions2.default.updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeout(function () {
          _NavbarActions2.default.updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.previousState = this.state;
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();

      if (searchQuery) {
        _NavbarActions2.default.findCharacter({
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm,
          history: this.props.history
        });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top', style: { position: 'fixed', width: '100%', top: 0, left: 0 } },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement('div', { className: 'navbar-border' }),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            _react2.default.createElement('img', { src: "/logo.png", className: 'navbar-img' })
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', onClick: this.handleClick },
            _react2.default.createElement('img', { src: '/menuToggle.png' })
          ),
          _react2.default.createElement(
            'div',
            { id: 'menu', className: this.state.open ? 'open' : '' },
            _react2.default.createElement(
              'div',
              { style: { height: '100%', width: '100%', color: 'white', fontSize: 42, textAlign: 'right' } },
              _react2.default.createElement(
                'ul',
                { style: { paddingRight: 30 } },
                _react2.default.createElement(
                  'li',
                  { style: { fontSize: 60 }, onClick: this.handleClick },
                  '×'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'New Fleet'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement('img', { style: { width: 100, marginRight: 20 }, src: '/img/rebels-white.svg' }),
                  _react2.default.createElement('img', { style: { width: 100 }, src: '/img/empire-white.svg' })
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Saved Fleets'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'My Collection'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Library'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Settings'
                ),
                _react2.default.createElement(
                  'li',
                  { onClick: this.handleClick },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/add' },
                    'Add Ship'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":3,"../stores/NavbarStore":14,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":11,"history/lib/createBrowserHistory":21,"react":"react","react-dom":"react-dom","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _AddShip = require('./components/AddShip');

var _AddShip2 = _interopRequireDefault(_AddShip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/rebel' }),
  _react2.default.createElement(_reactRouter.Route, { path: '/empire' }),
  _react2.default.createElement(_reactRouter.Route, { path: '/add', component: _AddShip2.default })
);

},{"./components/AddShip":5,"./components/App":6,"./components/Home":8,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddShipActions = require('../actions/AddShipActions');

var _AddShipActions2 = _interopRequireDefault(_AddShipActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddShipStore = function () {
  function AddShipStore() {
    _classCallCheck(this, AddShipStore);

    this.bindActions(_AddShipActions2.default);
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
    this.frontDice = { red: 0, blue: 0, black: 0 };
    this.rightDice = { red: 0, blue: 0, black: 0 };
    this.rearDice = { red: 0, blue: 0, black: 0 };
    this.leftDice = { red: 0, blue: 0, black: 0 };
    this.antiSquadron = 0;
    this.hullPoints = 0;
    this.cost = 0;
    this.upgrades = {
      commander: 0,
      defensiveRetrofit: 0,
      ionCanons: 0,
      offensiveRetrofit: 0,
      officer: 0,
      ordinance: 0,
      supportTeam: 0,
      title: 0,
      turbolaser: 0,
      weaponsTeam: 0
    };
    this.helpBlock = '';
    this.nameValidationState = '';
    this.genderValidationState = '';
  }

  _createClass(AddShipStore, [{
    key: 'onAddCharacterSuccess',
    value: function onAddCharacterSuccess(successMessage) {
      this.nameValidationState = 'has-success';
      this.helpBlock = successMessage;
    }
  }, {
    key: 'onAddCharacterFail',
    value: function onAddCharacterFail(errorMessage) {
      this.nameValidationState = 'has-error';
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onUpdateName',
    value: function onUpdateName(event) {
      this.name = event.target.value;
      this.nameValidationState = '';
      this.helpBlock = '';
      console.log(this.name);
    }
  }, {
    key: 'onUpdateFaction',
    value: function onUpdateFaction(event) {
      this.faction = event.target.value;
    }
  }, {
    key: 'onUpdateCommand',
    value: function onUpdateCommand(event) {
      this.command = event.target.value;
    }
  }, {
    key: 'onUpdateSquadron',
    value: function onUpdateSquadron(event) {
      this.squadron = event.target.value;
    }
  }, {
    key: 'onUpdateEngineering',
    value: function onUpdateEngineering(event) {
      this.engineering = event.target.value;
    }
  }, {
    key: 'onUpdateFrontShield',
    value: function onUpdateFrontShield(event) {
      this.frontShield = event.target.value;
    }
  }, {
    key: 'onUpdateRightShield',
    value: function onUpdateRightShield(event) {
      this.rightShield = event.target.value;
    }
  }, {
    key: 'onUpdateRearShield',
    value: function onUpdateRearShield(event) {
      this.rearShield = event.target.value;
    }
  }, {
    key: 'onUpdateLeftShield',
    value: function onUpdateLeftShield(event) {
      this.leftShield = event.target.value;
    }
  }, {
    key: 'onUpdateMovement',
    value: function onUpdateMovement(event) {
      this.movement = event.target.value;
    }
  }, {
    key: 'onUpdateRedirect',
    value: function onUpdateRedirect(event) {
      this.redirect = event.target.value;
    }
  }, {
    key: 'onUpdateEvade',
    value: function onUpdateEvade(event) {
      this.evade = event.target.value;
    }
  }, {
    key: 'onUpdateBrace',
    value: function onUpdateBrace(event) {
      this.brace = event.target.value;
    }
  }, {
    key: 'onUpdateScatter',
    value: function onUpdateScatter(event) {
      this.scatter = event.target.value;
    }
  }, {
    key: 'onUpdateContain',
    value: function onUpdateContain(event) {
      this.contain = event.target.value;
    }
  }, {
    key: 'onUpdateFrontRed',
    value: function onUpdateFrontRed(event) {
      this.frontDice.red = event.target.value;
    }
  }, {
    key: 'onUpdateFrontBlue',
    value: function onUpdateFrontBlue(event) {
      this.frontDice.blue = event.target.value;
    }
  }, {
    key: 'onUpdateFrontBlack',
    value: function onUpdateFrontBlack(event) {
      this.frontDice.black = event.target.value;
    }
  }, {
    key: 'onUpdateRightRed',
    value: function onUpdateRightRed(event) {
      this.rightDice.red = event.target.value;
    }
  }, {
    key: 'onUpdateRightBlue',
    value: function onUpdateRightBlue(event) {
      this.rightDice.blue = event.target.value;
    }
  }, {
    key: 'onUpdateRightBlack',
    value: function onUpdateRightBlack(event) {
      this.rightDice.black = event.target.value;
    }
  }, {
    key: 'onUpdateRearRed',
    value: function onUpdateRearRed(event) {
      this.rearDice.red = event.target.value;
    }
  }, {
    key: 'onUpdateRearBlue',
    value: function onUpdateRearBlue(event) {
      this.rearDice.blue = event.target.value;
    }
  }, {
    key: 'onUpdateRearBlack',
    value: function onUpdateRearBlack(event) {
      this.rearDice.black = event.target.value;
    }
  }, {
    key: 'onUpdateLeftRed',
    value: function onUpdateLeftRed(event) {
      this.leftDice.red = event.target.value;
    }
  }, {
    key: 'onUpdateLeftBlue',
    value: function onUpdateLeftBlue(event) {
      this.leftDice.blue = event.target.value;
    }
  }, {
    key: 'onUpdateLeftBlack',
    value: function onUpdateLeftBlack(event) {
      this.leftDice.black = event.target.value;
    }
  }, {
    key: 'onUpdateAntiSquadron',
    value: function onUpdateAntiSquadron(event) {
      this.antiSquadron = event.target.value;
    }
  }, {
    key: 'onUpdateHullPoints',
    value: function onUpdateHullPoints(event) {
      this.hullPoints = event.target.value;
    }
  }, {
    key: 'onUpdateBaseCost',
    value: function onUpdateBaseCost(event) {
      this.baseCost = event.target.value;
    }
  }, {
    key: 'onUpdateCommander',
    value: function onUpdateCommander(event) {
      this.upgrades.commander = event.target.value;
    }
  }, {
    key: 'onUpdateDefensiveRetrofit',
    value: function onUpdateDefensiveRetrofit(event) {
      this.upgrades.defensiveRetrofit = event.target.value;
    }
  }, {
    key: 'onUpdateIonCanons',
    value: function onUpdateIonCanons(event) {
      this.upgrades.ionCanons = event.target.value;
    }
  }, {
    key: 'onUpdateOffensiveRetrofit',
    value: function onUpdateOffensiveRetrofit(event) {
      this.upgrades.offensiveRetrofit = event.target.value;
    }
  }, {
    key: 'onUpdateOfficer',
    value: function onUpdateOfficer(event) {
      this.upgrades.officer = event.target.value;
    }
  }, {
    key: 'onUpdateOrdinance',
    value: function onUpdateOrdinance(event) {
      this.upgrades.ordinance = event.target.value;
    }
  }, {
    key: 'onUpdateSupportTeam',
    value: function onUpdateSupportTeam(event) {
      this.upgrades.supportTeam = event.target.value;
    }
  }, {
    key: 'onUpdateTitle',
    value: function onUpdateTitle(event) {
      this.upgrades.title = event.target.value;
    }
  }, {
    key: 'onUpdateTurbolaser',
    value: function onUpdateTurbolaser(event) {
      this.upgrades.turbolaser = event.target.value;
    }
  }, {
    key: 'onUpdateWeaponsTeam',
    value: function onUpdateWeaponsTeam(event) {
      this.upgrades.weaponsTeam = event.target.value;
    }
  }, {
    key: 'onInvalidName',
    value: function onInvalidName() {
      this.nameValidationState = 'has-error';
      this.helpBlock = 'Please enter a character name.';
    }
  }, {
    key: 'onInvalidGender',
    value: function onInvalidGender() {
      this.genderValidationState = 'has-error';
    }
  }]);

  return AddShipStore;
}();

exports.default = _alt2.default.createStore(AddShipStore);

},{"../actions/AddShipActions":1,"../alt":4}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function () {
  function FooterStore() {
    _classCallCheck(this, FooterStore);

    this.bindActions(_FooterActions2.default);
    this.characters = [];
  }

  _createClass(FooterStore, [{
    key: 'onGetTopCharactersSuccess',
    value: function onGetTopCharactersSuccess(data) {
      this.characters = data.slice(0, 5);
    }
  }, {
    key: 'onGetTopCharactersFail',
    value: function onGetTopCharactersFail(jqXhr) {
      // Handle multiple response formats, fallback to HTTP status code number.
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return FooterStore;
}();

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":2,"../alt":4}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
    this.open = false;
  }

  _createClass(NavbarStore, [{
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }]);

  return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":3,"../alt":4}],15:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],16:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],18:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":15,"warning":33}],19:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],21:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":16,"./DOMStateStorage":18,"./DOMUtils":19,"./ExecutionEnvironment":20,"./createDOMHistory":22,"./parsePath":27,"_process":15,"invariant":32}],22:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":19,"./ExecutionEnvironment":20,"./createHistory":23,"_process":15,"invariant":32}],23:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":16,"./AsyncUtils":17,"./createLocation":24,"./deprecate":25,"./parsePath":27,"./runTransitionHook":28,"deep-equal":29}],24:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":16,"./parsePath":27}],25:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],26:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],27:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":26,"_process":15,"warning":33}],28:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":15,"warning":33}],29:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":30,"./lib/keys.js":31}],30:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],31:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],32:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":15}],33:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":15}]},{},[10])


//# sourceMappingURL=bundle.js.map
