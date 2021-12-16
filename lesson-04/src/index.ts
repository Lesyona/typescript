import {backendPort, localStorageKey, FlatRentSdk} from './flat-rent-sdk.js'

//console.log(backendPort)

let flatRent = new FlatRentSdk();
flatRent.get('vnd331').then(data => console.log(data))

