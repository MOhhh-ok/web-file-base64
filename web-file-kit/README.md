# web-file-base64

A lightweight utility for converting between File and Base64 in browser environments.

## Features

- 🪶 Lightweight (Zero dependencies)
- 📦 Simple API
- 💪 Full TypeScript support
- 🌐 Works in all modern browsers

## Installation

```bash
npm install @masa-dev/web-file-base64
# or
yarn add @masa-dev/web-file-base64
# or
pnpm add @masa-dev/web-file-base64
```

## Usage

```typescript
import { fileToBase64, base64ToFile } from '@masa-dev/web-file-base64';

// Convert File to Base64
const file = new File(['Hello, World!'], 'test.txt', { type: 'text/plain' });
const base64 = await fileToBase64(file);
// => "data:text/plain;base64,SGVsbG8sIFdvcmxkIQ=="

// Convert Base64 to File
const newFile = base64ToFile(base64, 'converted.txt');
// => File object

// Get MIME type from Base64
const mimeType = base64ToMimeType(base64);
// => "text/plain"

// Get file extension from Base64
const extension = base64ToFileExtension(base64);
// => "plain"
```

## License

MIT