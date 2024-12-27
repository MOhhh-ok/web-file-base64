export async function fileToBase64(file: File | Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

export function base64ToFile(base64: string, fileName: string): File {
    const base64Content = base64.split(',')[1];
    const byteCharacters = atob(base64Content);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const mimeType = base64ToMimeType(base64);
    return new File([byteArray], fileName, { type: mimeType });
}

export function base64ToFileExtension(base64: string): string {
    const mimeType = base64ToMimeType(base64);
    return mimeType.split('/')[1];
}

export function base64ToMimeType(base64: string): string {
    const mimeType = base64.split(',')[0].split(':')[1].split(';')[0];
    return mimeType;
}
