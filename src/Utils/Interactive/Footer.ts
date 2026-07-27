import { proto } from "../../../WAProto"

export const buildFooter = (
	text?: string
) => {

	if(!text) {
		return undefined
	}

	return proto.Message.InteractiveMessage.Footer.create({

		text

	})

}
