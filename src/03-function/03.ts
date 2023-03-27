import {StudentType} from '../02-object/02';
import {GovernmentBuildingType, HouseType} from '../02-object/02/02';


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive (student: StudentType) {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number)=> {
    building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}