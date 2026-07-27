import { proto } from "../../../WAProto"

export const buildBody = (
	text: string
) => {

	return proto.Message.InteractiveMessage.Body.create({

		text

	})

}
