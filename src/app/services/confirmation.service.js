let header = '<div class="modal-header"><h3 class="modal-title">{{vm.title}}</h3></div>',
    confirmButton = '<button class="btn btn-primary pull-left" type="button" ng-click="ok()" ng-bind="vm.confirmButtonText" ng-disabled="!vm.baseModalForm.$valid"></button>',
    cancelButton = '<button class="btn btn-default pull-right" type="button" ng-click="cancel()" ng-bind="vm.cancelButtonText"></button>',
    bodyContent = '<form name="vm.baseModalForm" class="modal-body"><div ng-bind="vm.content"></div></form>',
    baseModalTemplate = `${header}${bodyContent}<div class="modal-footer">${confirmButton}${cancelButton}</div>`;

/**
 * @desc service for default confirmation modals
 * */
class BaseModalService {
    constructor ($uibModal) {
        'ngInject';

        Object.assign(this, {
            $uibModal
        });
    }

    /**
     * @desc Show confirmation modal
     * @param {Object} [options] - modal options
     * @returns {Object} uibModal instance
     * */
    confirmationModal (options = {}) {
        return this._showModal(Object.assign({}, options));
    }

    /**
     * @desc Show modal with options
     * @param {Object} [options] - modal options
     * @returns {Object} uibModal instance
     * */
    _showModal (options = {}) {
        let {title, content, confirmButtonText, cancelButtonText, size} = options,
            modalClass = 'b-confirmation-modal';

        title = title || 'Base Modal Title';
        content = content || '';
        confirmButtonText = confirmButtonText || 'Confirm';
        cancelButtonText = cancelButtonText || 'Cancel';
        size = size || 'sm';

        return this.$uibModal.open({
            template: baseModalTemplate,
            controller: function ConfirmationModalController ($scope, $uibModalInstance) {
                this.title = title;
                this.content = content;
                this.confirmButtonText = confirmButtonText;
                this.cancelButtonText = cancelButtonText;


                $scope.ok = () => {

                    $uibModalInstance.close();
                };

                $scope.cancel = () => $uibModalInstance.dismiss();
            },
            controllerAs: 'vm',
            windowClass: modalClass,
            size
        });
    }

}

export default BaseModalService;
