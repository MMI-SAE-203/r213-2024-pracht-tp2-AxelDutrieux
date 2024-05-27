import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information

/*export async function allMaisons() {
    const records = await pb.collection('agence').getFullList() ;
    return records ;
    }

//Étape 11
export async function oneID(id){
    const idrecord = await pb.collection('agence').getOne(id);
    return idrecord;
}

//Étape 12
export async function allMaisonsFavori(Favori){
    const favrecord = await pb.collection('agence').getFullList({filter: 'Favori = true'})
    return favrecord
}


//Étape 13
export async function allMaisonsSorted(Prix){
    const prixrecord = await pb.collection('agence').getFullList({sort: 'Prix'})
    return prixrecord
}


//Étape 14
export async function bySurface(s){
    const superficierecord = await pb.collection('agence').getFullList({filter: `superficie > ${s}`})
    return superficierecord
}


//Étape 15
export async function surfaceOrPrice(s, p){
    const orrecord = await pb.collection('agence').getFullList({filter: `superficie > ${s} || prix < ${p}`})
    return orrecord
}


//Étape 19
export async function getAgentbyID() {
    const agentrecord =  await pb.collection('agence').getFullList(
        { expand: 'agent',
    }) ;
    return agentecord ;
}

//TD
export async function addNewevent(newEvent){
    await pb.collection('events').create(newEvent);
}

export async function deleteEvent(idEvent){
    await pb.collection('events').delete(idEvent);
}

export async function updateEvent(eventId, data){
    await pb.collection('events').update(eventId, data);
}
*/
//TP3 Pracht
export async function allMaisonsFavori() {
    const records = await pb.collection('agence').getFullList({filter: 'Favori = true'}) ;
    return records ;
    }

    export async function allMaisonsSorted(){
        const prixrecord = await pb.collection('agence').getFullList({sort: 'Prix'})
        return prixrecord
    }
    export async function allMaisons() {
        const records = await pb.collection('agence').getFullList() ;
        return records ;
        }

//TP4 Système d'information
export async function getAgentbyID() {
    const agentrecord =  await pb.collection('agent').getFullList(
        { expand: 'agent',
    }) ;
    return agentrecord ;
}