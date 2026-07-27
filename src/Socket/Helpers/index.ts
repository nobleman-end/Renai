// MODIFED BY REN X AI

import type { proto } from "../../../WAProto"

export interface SocketHelpers {
	reply(
		jid: string,
		text: string,
		quoted?: proto.IWebMessageInfo,
		options?: Record<string, any>
	): Promise<any>
}

export const makeHelpers = (
	sendMessage: Function
): SocketHelpers => {

	const reply = async (
		jid: string,
		text: string,
		quoted?: proto.IWebMessageInfo,
		options = {}
	) => {

		return sendMessage(
			jid,
			{
				text,
				...options
			},
			{
				quoted
			}
		)

	}

	return {
		reply
	}

}
