import { proto } from "../../../WAProto"
import { ButtonMessage } from "../../Types/Button"

export const buildHeader = (
	message: ButtonMessage
) => {

	if(
		!message.image &&
		!message.video &&
		!message.document
	) {
		return undefined
	}

	return proto.Message.InteractiveMessage.Header.create({

		title: message.title

	})

}
