import { SWITCH_TEMPLATE } from '../action-types';
const templates = {
    template1: {
        class: 'canvas-item',
        cells: [
            'item3',
            'item4',
            'item5',
            'item6',
            'item7',
            'item8',
            'item9',
            'item10',
            'item11'

        ]
    },
    template2: {
        class: 'canvas-itemT2',
        cells: ['item3T2', 'item4T2', 'item5T2', 'item6T2', 'item7T2']
    },
    template3: {
        class: 'canvas-item',
        cells: [
            'item3T3',
            'item4T3',
            'item5T3',
            'item6T3',
            'item7T3',
        ]
    },
    template4: {
        class: 'canvas-item',
        cells: [
            'item3T4',
            'item4T4',
            'item5T4',
            'item6T4',
            'item7T4',
            'item8T4',
            'item9T4',
            'item10T4',
            'item11T4'



        ]
    },
}

const initialState = {
    current: 'template1',
    templateClass: templates.template1.class,
    templateCells: templates.template1.cells

}

export default (state = initialState, action) => {

    switch (action.type) {


        case SWITCH_TEMPLATE:
            const current = action.payload.templateName;
            const templateClass = templates[current].class;
            const templateCells = templates[current].cells;
            return {
                current,
                templateClass,
                templateCells
            }
        default:
            return state;
    }
}