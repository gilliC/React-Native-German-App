export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_ANSWER_BEGIN = 'FETCH_ANSWER_BEGIN';
export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';
export const FETCH_ANSWER_FAILURE = 'FETCH_ANSWER_FAILURE';
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