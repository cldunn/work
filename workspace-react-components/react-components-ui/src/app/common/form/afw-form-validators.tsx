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
