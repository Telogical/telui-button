var React = require('react/addons');
var _ = require('lodash');


function AppearanceButton(ui) {
  'use strict';

  return React.createClass({
    displayName: 'Appearance.button',
    mixins: [ui.Mixins.Appearance],
    getInitialState: function getInitialState() {
      return {
        id: '',
        label: '',
        iconPrimary: '',
        iconSecondary: '',
        hover: false,
        disabled: false,
        active: false,
        text: true
      };
    },

    __buildIconSet: function buildIconSet(appearanceArguments, glyphPrimary, glyphSecondary) {

      var fixedWidth = 'w-fix w-6 ';

      if (this.props.iconSecondary) {
        var secondaryAttrs = {
            className: fixedWidth + 'w-omega'
          },
          secondaryIconFrame = React.DOM.span(secondaryAttrs, this.__iconSecondary(glyphSecondary));
        appearanceArguments.push(secondaryIconFrame);
      }

      if (this.props.iconPrimary) {
        var primaryAttrs = {
            className: fixedWidth + 'w-alpha'
          },
          primaryIconFrame = React.DOM.span(primaryAttrs, this.__iconPrimary(glyphPrimary));
        appearanceArguments.push(primaryIconFrame);
      }
    },

    render: function render() {
      var cx = React.addons.classSet,
        domx = React.DOM;

      var spanAttrs = {
        'className': 'ui-appearance-button-text w-auto',
        id: this.props.id + '_button_label'
      };

      var value = this.props.value,
        list = this.props.list,
        key = this.props.key || this.props.id || _.uniqueId('button'),
        control = this.props.control,
        active = (this.props.active || this.state.active),
        glyphPrimary = this.props.iconPrimary,
        glyphSecondary = this.props.iconSecondary,
        verticalGrid = 0;

      var appearanceClasses = {
        'ui-widget': true,
        'ui-appearance-button': true,
        'ui-appearance-button-has-icon-primary': glyphPrimary,
        'ui-appearance-button-has-icon-secondary': glyphSecondary,
        'ui-appearance-button-has-text': control.props.text,
        'ui-state-default': true,
        'ui-state-hover': control.state.hover,
        'ui-state-active': active && !control.props.disabled,
        'ui-state-disabled': control.props.disabled
      };

      appearanceClasses = this.__applyUiStates.call(control, appearanceClasses);
      appearanceClasses['w-v-' + verticalGrid] = true;

      if (this.props.cssClass && this.props.cssClass.length) {
        appearanceClasses[this.props.cssClass] = true;
      }
      
      //TODO: handle context, this, and control across components
      var btnAttrs = {
        id: key + '_button',
        className: cx(appearanceClasses),
        role: 'button',
        'aria-disabled': !!this.props.disabled,
        onClick: control.__onChange.bind(null, value, list),
        onMouseEnter: control.__onMouseEnter ?
          control.__onMouseEnter.bind(null, control) : this.__onMouseEnter.bind(null, control),
        onMouseLeave: control.__onMouseLeave ?
          control.__onMouseLeave.bind(null, control) : this.__onMouseLeave.bind(null, control),
        onMouseDown: control.__onMouseDown ?
          control.__onMouseDown.bind(null, control) : this.__onMouseDown.bind(null, control),
        onMouseUp: control.__onMouseUp ?
          control.__onMouseUp.bind(null, control) : this.__onMouseUp.bind(null, control)
      };

      if (!!this.props.disabled) {
        btnAttrs.disabled = 'disabled';
      }

      var text = domx.span(spanAttrs, this.props.label);

      var appearanceArguments = [btnAttrs];
      this.__buildIconSet(appearanceArguments, glyphPrimary, glyphSecondary);

      if (control.props.text) {
        appearanceArguments.push(text);
      }

      var appearance = domx.div.apply(null, appearanceArguments);

      return appearance;
    }
  });

}

module.exports = AppearanceButton;