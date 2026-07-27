import {
	ButtonMessage
} from '../Types/Button'

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

	return options

}
