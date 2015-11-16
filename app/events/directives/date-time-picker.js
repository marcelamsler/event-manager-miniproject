angular.module('eventManagerApp.events').directive('dateTimePickerInput', [ '$mdDialog', '$filter', function($mdDialog, $filter) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function( scope, element, attrs, ngModelCtrl ) {
			if( element[0].tagName.toLowerCase() !== 'input' || attrs['type'].toLowerCase() !== 'text' ) {
				throw new Error('date-time-picker-input directive must be instantiated as an attribute of a input with type="text"');
			}
			var _openModal;
			element.on('click', function(){
				if( _openModal ) return; //prevent double clicks etc.

				ngModelCtrl.$setTouched();
				_openModal = $mdDialog.show({
					parent: angular.element( document.querySelector('body')),
					templateUrl: 'events/templates/date-time-picker.html',
					controller: function ($scope, $mdDialog) {
						// See https://github.com/SimeonC/sc-date-time#options for details
						var passthroughAttrs = ['displayMode', 'defaultDate', 'defaultMode', 'mindate', 'maxdate']
						angular.forEach( passthroughAttrs, function ( key ) {
							$scope[key] = attrs[key];
						} );
						if( angular.isDate(ngModelCtrl.$modelValue) ) {
							$scope.model = ngModelCtrl.$modelValue;
						}
						$scope.onCancel = function () {
							$mdDialog.cancel();
							_openModal = null;
						};
						$scope.onSave = function () {
							$mdDialog.hide($scope.model);
						};
					},
					show: true
				}).then(function(newDate) {
					ngModelCtrl.$modelValue.setTime(newDate.getTime());
					ngModelCtrl.$setDirty();
					element.val(formatDate(newDate));
					_openModal = null;
				});
			});

			if(attrs['ngMin']) {
				ngModelCtrl.$validators['min'] = function (dateValue) {
					return new Date(dateValue) >= new Date(attrs['ngMin']);
				};
			}

			if(attrs['ngMax']) {
				ngModelCtrl.$validators['max'] = function (dateValue) {
					return new Date(dateValue) <= new Date(attrs['ngMax']);
				};
			}

			ngModelCtrl.$formatters.push(formatDate);
			function formatDate(value){
				return $filter('date')(value, attrs['displayFormat'] || 'EEEE d MMMM yyyy, h:mm a');
			};
		}
	};
}]);
