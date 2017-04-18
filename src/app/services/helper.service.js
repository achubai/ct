/**
 * @desc Helper service
 */
class HelperService {

    constructor () {
        this.config = {
            chart: {
                height: 500,
                width: 800,
                type: 'pie'
            },
            plotOptions: {
                series: {
                    stacking: ''
                }
            },
            series: [
                {
                    name: 'Albums',
                    data: [],
                    id: 's1'
                }
            ],
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            loading: false
        };
    }

    parseChartData (data) {
        let arr = [],
            text = 'Users',
            seria,
            type = 'pie',
            seriaObj = {
                name: 'Albums',
                data: [],
                id: 's1'
            };

        if (data[0].hasOwnProperty('albums')) {
            data.forEach(el => {
                arr.push([el.name, el.albums.length]);
            });
        } else {
            text = 'Photos';
            type = 'column';
            seriaObj.name = 'Photos';

            data.forEach(el => {
                arr.push([el.title, el.photos.length]);
            });
        }


        seria = Object.assign({}, seriaObj, {data: arr});

        return Object.assign({}, this.config, {series: [seria], title: {text}, chart: {type}});
    }
}

export default HelperService;
