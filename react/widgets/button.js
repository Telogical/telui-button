function Button(ui) {
  'use strict';

  return React.createClass({
    displayName: 'Button',
    mixins: [ui.Mixins.Widget],
    propTypes: {

    },

    __clickChangeHandle: function clickChangeHandle() {
      if (!this.props.disabled && this.props.click && typeof this.props.click === 'function') {
        var model = this;
        model.props.scope.$apply(model.props.click);
      }
    },

    __onChange: function onChange() {
      this.__clickChangeHandle();
    },
    __onClick: function onClick() {
      this.__clickChangeHandle();
    },

    __onMouseDown: function onMouseDown() {
      this.setState({
        active: true
      });
    },

    __onMouseUp: function onMouseUp() {
      this.setState({
        active: false
      });
    },
    __onMouseEnter: function onMouseEnter() {
      if (!this.props.disabled) {
        this.setState({
          hover: true
        });
      }
    },
    __onMouseLeave: function onMouseLeave() {
      this.setState({
        hover: false
      });
    },

    getInitialState: function getInitialState() {
      return {
        id: '',
        label: ''
      };
    },

    render: function render() {
      var cx = React.addons.classSet,
        domx = React.DOM;

      this.props.appearance = this.props.appearance || 'button';

      if (this.props.text === false) {
        this.props.label = '';
      }

      var id = this.props.id,
        key = this.props.key || this.props.id,
        value = this.props.value,
        list = this.props.list,
        listValue = this.props.listValue,
        cssClass = this.props.cssClass,
        name = this.props.name,
        disabled = !!this.props.disabled,
        iconPrimary = this.props.iconPrimary,
        iconSecondary = this.props.iconSecondary,
        active = (this.props.active || this.state.active),
        uiState = this.props.uiState;


      var btnInputClasses = {
          'ui-helper-hidden-accessible': true
        },
        btnInputAttrs = {
          id: this.props.id + '_input',
          className: cx(btnInputClasses),
          role: 'button',
          'aria-disabled': !!this.props.disabled,
          ref: 'input'
        };

      if (this.props.focusable === false) {
        btnInputAttrs.tabIndex = -1;
      }


      var buttonLiClasses = {
        'ui-widget': true,
        'ui-button': true,
        'w-12': true,
        'w-alpha': true,
        'w-omega': true
      };

      if (cssClass) {
        buttonLiClasses[cssClass] = true;
      }

      var buttonLiAttrs = {
        id: key + '_li',
        key: key + '_li',
        className: cx(buttonLiClasses)
      };

      var appearanceModel = {
        value: value,
        list: list,
        disabled: disabled,
        id: id + '_appearance_' + this.props.appearance,
        control: this,
        label: this.props.label,
        iconPrimary: iconPrimary,
        iconSecondary: iconSecondary,
        active: active,
        uiState: uiState
      };

      var input = domx.input(btnInputAttrs, ''),
        appearance = ui.Appearances[this.props.appearance](appearanceModel);

      var li = domx.li(buttonLiAttrs, input, appearance);

      return li;
    },

    __makeInput: function makeInput() {

    }
  });
}

module.exports = Button;