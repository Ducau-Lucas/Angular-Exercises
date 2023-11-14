export interface ApprenantI {
    id: string | number,
    nom: string,
    prenom: string,
    age: number,
    email: string,
    tel: string,
    enEntreprise: boolean,
    avatar: string,
    entreprise: string,
    formationId: string | number
}
