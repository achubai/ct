/**
 * @desc Search component
 */
class SearchCtrl {
    constructor ($scope) {
        'ngInject';

        Object.assign(this, {
            $scope
        });

        this.searchValue = '';
    }


    search () {
        this.$scope.$emit('search', this.searchValue.trim());
    }
}

export default SearchCtrl;
