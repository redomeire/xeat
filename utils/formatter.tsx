export const splitArray = (arr: string) => {
    let newArray: string[] = [];

    if (arr !== undefined)
        newArray = arr.replace("[", "").replace("]", "").replaceAll('"', "").split(",")

    return newArray;
}

export const formatString = (str: string) => {
    if (str !== undefined)
        return str
        .replaceAll("[", "")
        .replaceAll("]", "")
        .replaceAll('"', "")
        // .replaceAll("/", "")
}