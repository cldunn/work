export const required = (errMsg?: string) => (value: any): string => {
    return value ? undefined : errMsg || 'Is required';
}

export const minLen = (minLen: number, errMsg?: string) => (value: any): string => {
    if (!value) return undefined;
    return (value || '').length >= minLen ? undefined : errMsg || `Must be longer than ${minLen}`
}

export const regEx = (pattern: RegExp, errMsg?: string) => (value: any): string => {
    if (!value) return undefined;
    const regExpression = new RegExp(pattern);
    return regExpression.test(value) ? undefined : errMsg || `Invalid format`
}

export const isEmail = (errMsg?: string) => (value: any): string => {
    if (!value) return undefined;
    
    //  RFC 5322 complient
    const regExpression = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);

    return regExpression.test(value) ? undefined : errMsg || `Invalid format`
}
