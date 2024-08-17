import { Toothpaste } from "../types/Toothpaste"

export function sortFluorideAmount(toothpastes: Toothpaste[]): Toothpaste[] {
    return toothpastes.sort((a, b) => Number(a.fluorideAmount) - Number(b.fluorideAmount))
}