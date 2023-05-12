
export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj)
}

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
    const pocketbaseIP = import.meta.env.VITE_POCKETBASE_IP || 'http://127.0.0.1:8090';
    return `${pocketbaseIP}/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};