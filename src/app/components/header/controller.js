/**
 * @desc App header
 */
class HeaderCtrl {
    constructor (mainMenuConstants) {
        'ngInject';

        Object.assign(this, {
            mainMenuConstants
        });
    }
}

export default HeaderCtrl;
