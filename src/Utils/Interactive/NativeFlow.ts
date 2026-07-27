import { proto } from "../../../WAProto"

export const buildNativeFlow = (
	buttons: any[]
) => {

	return proto.Message.InteractiveMessage.NativeFlowMessage.create({

		buttons

	})

}
