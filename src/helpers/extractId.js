export const extractId = (url) => {
    const idRegExp = /\/([0-9]*)\/$/
    const id = url.match(idRegExp)[1]
    return id;
}