export type ButtonType =
	| "quick_reply"
	| "url"
	| "copy"
	| "call"

export interface Button {

	/**
	 * Button Type
	 */
	type: ButtonType

	/**
	 * Button Text
	 */
	text: string

	/**
	 * Quick Reply ID
	 */
	id?: string

	/**
	 * URL
	 */
	url?: string

	/**
	 * Copy Text
	 */
	copy?: string

	/**
	 * Phone Number
	 */
	phoneNumber?: string

}

export interface ButtonMessage {

	text: string

	footer?: string

	buttons: Button[]

}
