(function (ng, undefined) {
    'use strict';
    ng.module('smart-table')
        .directive('stSort', ['$parse', function ($parse) {
            return {
                restrict: 'A',
                require: '^stTable',
                link: function (scope, element, attr, ctrl) {

                    var predicate = attr.stSort;
                    var getter = $parse(predicate);
                    var index = 0;
                    var states = ['natural', 'ascent', 'descent'];

                    //view --> table state
                    function sort() {
                        index++;
                        if (index % 3 === 0) {
                            //manual reset
                            index = 0;
                            ctrl.tableState().sort = {};
                            ctrl.tableState().pagination.start = 0;
                            ctrl.pipe();
                        } else {
                            ctrl.sortBy(predicate, index % 2 === 0);
                        }
                    }

                    if (ng.isFunction(getter(scope))) {
                        predicate = getter(scope);
                    }

                    element.bind('click', function sortClick() {
                        if (predicate) {
                            scope.$apply(sort);
                        }
                    });

                    if (attr.stSortDefault !== undefined) {
                        index = attr.stSortDefault === 'reverse' ? 1 : 0;
                        sort();
                    }

                    //table state --> view
                    scope.$watch(function () {
                        return ctrl.tableState().sort;
                    }, function (newValue, oldValue) {
                        if (newValue.predicate !== predicate) {
                            index = 0;
                            element
                                .removeClass('st-sort-ascent')
                                .removeClass('st-sort-descent');
                        } else {
                            index = newValue.reverse === true ? 2 : 1;
                            element
                                .removeClass('st-sort-' + states[(index + 1) % 2])
                                .addClass('st-sort-' + states[index]);
                        }
                    }, true);
                }
            };
        }])
})(angular);
