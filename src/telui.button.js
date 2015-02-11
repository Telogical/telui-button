var UI = require('../react/telui'),
  React = UI.Core.React;

angular
  .module('TelUI')
  .directive('teluiButton', [

      function reactButtonDirective() {
      'use strict';

      return {
        restrict: 'E',
        replace: true,
        scope: {
          id: '@',
          value: '=?',
          label: '@',
          disabled: '=',
          iconPrimary: '@',
          iconSecondary: '@',
          appearance: '@',
          click: '&?',
          cssClass: '@',
          text: '=?',
          state: '@'
        },
        template: '<div class="waffles"></div>',
        link: function link(scope, $el, attrs) {
          var id = scope.id ?
            scope.id :
            'list_check_' + Math.round(Math.random() * 9999);

          function render(newValue, oldValue) {

            if (typeof scope.text === 'undefined') {
              scope.text = true;
            }

            $el.removeAttr('disabled');

            var model = {
              scope: scope,
              id: id,
              label: scope.label,
              iconPrimary: scope.iconPrimary,
              iconSecondary: scope.iconSecondary,
              cssClass: scope.cssClass,
              text: scope.text,
              disabled: scope.disabled,
              click: scope.click,
              value: scope.value,
              appearance: scope.appearance || 'button',
              orientation: scope.orientation || 'vertical',
              uiState: scope.state || ''
            };


            React.renderComponent(UI.Button(model), $el[0]);
          }

          //scope.$parent.$watch(attrs.ngDisabled, render);
          scope.$watchCollection('[label, iconPrimary, iconSecondary, disabled, cssClass, text, click, appearance, state]', render);

        }
      };
    }
]);