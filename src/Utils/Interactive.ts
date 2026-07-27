import { proto } from "../../WAProto"
import { ButtonMessage } from "../Types/Button"

export const generateButtonMessage = (
	message: ButtonMessage
) => {

	return proto.Message.InteractiveMessage.create({

		body: {
			text: message.text
		},

		footer: message.footer
			? {
				text: message.footer
			}
			: undefined,

		nativeFlowMessage: {

			buttons: message.buttons

		}

	})

}
