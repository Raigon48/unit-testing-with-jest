export function toUpperCase(str: String): String {
    return str.toUpperCase();
}

export type StringInfo = {
    lowercase: String,
    uppercase: String,
    characters: String[],
    length: number,
    extraInfo: Object | undefined
}

export function getStringInfo(arg: String): StringInfo {
    return {
        lowercase: arg.toLowerCase(),
        uppercase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo: {}
    }
}