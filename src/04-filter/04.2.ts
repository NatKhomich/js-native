import {CityType} from '../02-object/02/02';


export function demolishHousesOnStreet (city: CityType, street: string) {
    city.houses = city.houses.filter( h => h.address.street.title !== street)
}
