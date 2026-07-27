import { proto } from "../../../WAProto"
import { ButtonMessage } from "../../Types/Button"

export interface HeaderMedia {

	imageMessage?: proto.Message.IImageMessage

	videoMessage?: proto.Message.IVideoMessage

	documentMessage?: proto.Message.IDocumentMessage

}

export const buildHeader = (
	message: ButtonMessage,
	media?: HeaderMedia
) => {

	if(
		!message.image &&
		!message.video &&
		!message.document
	) {
		return undefined
	}

	return proto.Message.InteractiveMessage.Header.create({

		title: message.title,

		imageMessage: media?.imageMessage,

		videoMessage: media?.videoMessage,

		documentMessage: media?.documentMessage

	})

}
