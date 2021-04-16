import { addZero } from "./addZeroInDate"

export const convertDate = (date: number) => {
    let timestamp = date
    let data = new Date(timestamp)
    .toLocaleDateString()
    .split('-')
    .reverse()
    .join('/')
    
    const newDate = data.split('/')
    const resultDate = `${addZero(Number(newDate[0]))}/${addZero(Number(newDate[1]))}/${newDate[2]}`

    return resultDate
}