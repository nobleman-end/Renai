import { proto } from "../../WAProto"
import { ButtonMessage } from "../Types/Button"
import { buildBody } from "./Interactive/Body"
import { buildFooter } from "./Interactive/Footer"
import { buildHeader } from "./Interactive/Header"
import { buildNativeFlow } from "./Interactive/NativeFlow"
export const generateButtonMessage = (
	message: ButtonMessage
) => {

	return proto.Message.InteractiveMessage.create({

	header: buildHeader(message),

	body: buildBody(message.text),

	footer: buildFooter(message.footer),

	nativeFlowMessage: buildNativeFlow(message.buttons)

})

}
