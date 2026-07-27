import {
	Button,
	ButtonMessage
} from "../Types/Button"

const buildNativeButton = (
	button: Button
) => {

	switch(button.type) {

		case "quick_reply":

			return {
				name: "quick_reply",
				buttonParamsJson: JSON.stringify({
					display_text: button.text,
					id: button.id
				})
			}

		case "url":

			return {
				name: "cta_url",
				buttonParamsJson: JSON.stringify({
					display_text: button.text,
					url: button.url
				})
			}

		case "copy":

			return {
				name: "cta_copy",
				buttonParamsJson: JSON.stringify({
					display_text: button.text,
					copy_code: button.copy
				})
			}

		case "call":

			return {
				name: "cta_call",
				buttonParamsJson: JSON.stringify({
					display_text: button.text,
					phone_number: button.phoneNumber
				})
			}

	}

}

export const buildButtons = (
	options: ButtonMessage
): ButtonMessage => {

	if(!options.text) {
		throw new Error("Button message text is required")
	}

	if(!options.buttons?.length) {
		throw new Error("At least one button is required")
	}

	for(const button of options.buttons) {

		if(!button.text) {
			throw new Error("Button text is required")
		}

		switch(button.type) {

			case "quick_reply":

				if(!button.id) {
					throw new Error("Quick Reply button requires id")
				}

				break

			case "url":

				if(!button.url) {
					throw new Error("URL button requires url")
				}

				break

			case "copy":

				if(!button.copy) {
					throw new Error("Copy button requires copy")
				}

				break

			case "call":

				if(!button.phoneNumber) {
					throw new Error("Call button requires phoneNumber")
				}

				break

		}

	}

	

	return {

	...options,

	buttons: options.buttons.map(buildNativeButton)

}

}
