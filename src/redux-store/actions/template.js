import { SWITCH_TEMPLATE } from '../action-types';
export const switchTemplate = (templateName) => {

    console.log(templateName)
    return {
        type: SWITCH_TEMPLATE,
        payload: {
            templateName
        }
    }
}