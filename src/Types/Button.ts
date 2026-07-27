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

	title?: string

	image?: Buffer | string

	video?: Buffer | string

	document?: Buffer | string

	mimetype?: string

	fileName?: string

	jpegThumbnail?: Buffer

	buttons: Button[]

}
