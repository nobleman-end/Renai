import { proto } from "../../WAProto"
import { ButtonMessage } from "../Types/Button"
import { InteractiveHeader } from "../Types/Interactive"

import { buildBody } from "./Interactive/Body"
import { buildFooter } from "./Interactive/Footer"
import { buildNativeFlow } from "./Interactive/NativeFlow"

export const generateButtonMessage = (
	message: ButtonMessage,
	media?: HeaderMedia
) => {

	return proto.Message.InteractiveMessage.create({

		header: buildHeader(message, media),

		body: buildBody(message.text),

		footer: buildFooter(message.footer),

		nativeFlowMessage: buildNativeFlow(message.buttons)

	})

}
