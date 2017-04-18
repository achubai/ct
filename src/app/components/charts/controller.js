/**
 * @desc Charts
 */
class ChartsCtrl {
    constructor ($scope, helperService) {
        'ngInject';

        Object.assign(this, {
            $scope,
            helperService
        });

        this.$onInit = () => {
            this.confid = this.helperService.parseChartData(this.data);
        };
    }

}

export default ChartsCtrl;
