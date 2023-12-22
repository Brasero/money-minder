export const normalizeNumber = (number: any) => {
    if(typeof number !== "number") {
        return parseFloat(number)
    }
    return number
}

export const displayNumber = (number: string | number) => {
    const string = String(number)
    if (string.includes(',') || string.includes('.')) {
        return parseFloat(string).toFixed(2)
    }
    return parseInt(string).toFixed()
}


// Calcul du nombre de jour réstant dans le mois

function estAnneeBisextile(annee: number) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

function joursDansMois(mois: number, annee: number) {
    const joursParMois = [31, estAnneeBisextile(annee) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return joursParMois[mois - 1];
}

export function joursRestants() {
    const aujourdHui = new Date();
    const anneeAujourdHui = aujourdHui.getFullYear();
    const moisAujourdHui = aujourdHui.getMonth() + 1;
    const jourAujourdHui = aujourdHui.getDate();

    const joursDansLeMois = joursDansMois(moisAujourdHui, anneeAujourdHui);

    return joursDansLeMois - jourAujourdHui;
}