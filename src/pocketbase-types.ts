/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agence = "agence",
	Agent = "agent",
	Artist = "artist",
	Events = "events",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgenceRecord = {
	Chambres?: number
	Favori?: boolean
	Image?: string
	Nom?: string
	Prix?: number
	Salle_de_bain?: number
	adresse?: string
	field?: RecordIdString
	superficie?: number
}

export type AgentRecord = {
	Nom?: string
	Prenom?: string
	mail?: string
}

export type ArtistRecord = {
	biographie?: string
	descritpion?: string
	nom?: string
	numero?: number
	prenom?: string
}

export enum EventsCategorieOptions {
	"danse" = "danse",
	"musique" = "musique",
	"théatre" = "théatre",
}
export type EventsRecord = {
	artist?: RecordIdString
	categorie?: EventsCategorieOptions
	date_et_heure?: IsoDateString
	description?: string
	extrait?: string
	image?: string[]
	nom?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AgenceResponse<Texpand = unknown> = Required<AgenceRecord> & BaseSystemFields<Texpand>
export type AgentResponse<Texpand = unknown> = Required<AgentRecord> & BaseSystemFields<Texpand>
export type ArtistResponse<Texpand = unknown> = Required<ArtistRecord> & BaseSystemFields<Texpand>
export type EventsResponse<Texpand = unknown> = Required<EventsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	agence: AgenceRecord
	agent: AgentRecord
	artist: ArtistRecord
	events: EventsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	agence: AgenceResponse
	agent: AgentResponse
	artist: ArtistResponse
	events: EventsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'agence'): RecordService<AgenceResponse>
	collection(idOrName: 'agent'): RecordService<AgentResponse>
	collection(idOrName: 'artist'): RecordService<ArtistResponse>
	collection(idOrName: 'events'): RecordService<EventsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
