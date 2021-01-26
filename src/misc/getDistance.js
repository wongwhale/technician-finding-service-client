import { GOOGLE_API } from './google_api'
export const  getDistance = async (lat1, lng1, lat2, lng2) => {
    const Location1Str = lat1 + "," + lng1;
    const Location2Str = lat2 + "," + lng2;

    let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";

    let params = `origins=${Location1Str}&destinations=${Location2Str}&key=${GOOGLE_API}`; // you need to get a key
    let finalApiURL = `${ApiURL}${encodeURI(params)}`;

    let fetchResult = await fetch(finalApiURL); // call API
    let Result = await fetchResult.json(); // extract json
    return Result.rows[0].elements[0].distance.value
}