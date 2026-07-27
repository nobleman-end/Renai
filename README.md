<div align="center">

# Renai

A modern, lightweight, and fast WebSocket library for interacting with WhatsApp Web.

[![npm version](https://img.shields.io/npm/v/@nobleman-end/renai.svg)](https://www.npmjs.com/package/@nobleman-end/renai)
[![License](https://img.shields.io/npm/l/@nobleman-end/renai.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-green.svg)](https://nodejs.org)

</div>

---

## About

**Renai** is a modern WhatsApp Web library built with performance, stability, and simplicity in mind.

This project is intended for developers who want to build WhatsApp bots, automation tools, and custom integrations using a clean and event-driven API.

---

## Features

- Multi Device Support
- Fast WebSocket Connection
- TypeScript Support
- ES Module Ready
- Message Utilities
- Media Support
- Group Management
- Event Based Architecture
- Lightweight
- High Performance

---

## Installation

```bash
npm install @nobleman-end/renai
```

or

```bash
yarn add @nobleman-end/renai
```

or

```bash
pnpm add @nobleman-end/renai
```

---

## Requirements

- Node.js 20 or newer

---

## Quick Example

```javascript
import makeWASocket from "@nobleman-end/renai"

// Example will be added soon.
```

---

## Documentation

Documentation is currently under development.

More examples and guides will be available in future releases.

---

## Roadmap

- Better documentation
- More examples
- Improved helper utilities
- Better TypeScript experience
- Performance improvements
- Additional APIs

---

## Changelog

### v6.7.21-Renai.1

Initial public release.

- First npm release
- TypeScript support
- ES Module support
- WhatsApp Web library
- Initial project structure

---

## Contributing

Contributions, issues, and feature requests are welcome.

Feel free to open an Issue or Pull Request.

---

## Credits

Renai is inspired by the open-source WhatsApp ecosystem.

Special thanks to every contributor who helps improve WhatsApp libraries for the community.

---

## License

This project is licensed under the MIT License.

---

# 🔑 Custom Pairing Code

Renai supports requesting a **custom 8-character pairing code** instead of using a randomly generated code.

> [!NOTE]
> This feature is exclusive to Renai and is not available in the official Baileys.

---

## Installation

Nothing special is required.

```ts
import { makeWASocket } from "@renai/baileys"
```

---

## Default Pairing Code

If no custom code is provided, Renai behaves exactly like Baileys.

```ts
const code = await sock.requestPairingCode("628123456789")
console.log(code)
```

Example Output

```text
ABCD1234
```

---

## Custom Pairing Code

Pass a second argument containing **exactly 8 characters**.

```ts
const code = await sock.requestPairingCode(
    "628123456789",
    "RENAI12"
)

console.log(code)
```

Output

```text
RENAI12
```

---

## Requirements

The custom pairing code:

- Must contain exactly **8 characters**
- Is case-sensitive
- Cannot be empty

Valid examples

```text
RENAI12
ABCD1234
PAIR2026
MYCODE88
```

Invalid examples

```text
ABC
ABCDEFGHI
```

---

## Error

If the pairing code length is not exactly 8 characters:

```ts
await sock.requestPairingCode(
    "628123456789",
    "ABC"
)
```

Renai throws

```text
Error: Custom pairing code must be exactly 8 characters
```

---

## API

### requestPairingCode()

```ts
requestPairingCode(
    phoneNumber: string,
    customPairingCode?: string
): Promise<string>
```

### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| phoneNumber | string | ✅ | WhatsApp phone number |
| customPairingCode | string | ❌ | Custom 8-character pairing code |

### Returns

Returns the pairing code used for authentication.

```ts
const code = await sock.requestPairingCode(
    "628123456789",
    "RENAI12"
)
```

Returns

```text
RENAI12
```

---

## Compatibility

This feature is fully backward compatible.

Existing code continues to work.

```ts
await sock.requestPairingCode(phoneNumber)
```

New usage

```ts
await sock.requestPairingCode(
    phoneNumber,
    "RENAI12"
)
```

---

## Example

```ts
import {
    makeWASocket,
    useMultiFileAuthState
} from "@renai/baileys"

const { state, saveCreds } =
    await useMultiFileAuthState("./session")

const sock = makeWASocket({
    auth: state
})

sock.ev.on("creds.update", saveCreds)

const code = await sock.requestPairingCode(
    "628123456789",
    "RENAI12"
)

console.log("Pairing Code:", code)
```

<div align="center">

Made with ❤️ by **Ren-AI**

</div>
