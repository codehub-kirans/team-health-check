export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj)
}