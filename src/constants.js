export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_ANSWER_BEGIN = 'FETCH_ANSWER_BEGIN';
export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';
export const FETCH_ANSWER_FAILURE = 'FETCH_ANSWER_FAILURE';
export const CLEAR_ANSWER = 'CLEAR_ANSWER';
export const CHANGED_CONNECTION = 'CHANGED_CONNECTION';

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export function handleErrors(response) {
    if (!response.ok) {
        console.log("Error " + response.statusText);

        throw Error(response.statusText);
    }
    return response;
}

export function designByGender(gender) {
    gender = capitalizeFirstLetter(gender);
    switch (gender) {
        case "Der":
            return  '#58A4B0';
            break;
        case "Das":
            return'#1E6446';
            break;

        case "Die":
            return  '#AC7B84';
            break;
        default:
            console.log("wrong gender:" + gender);
            return;

    }

}