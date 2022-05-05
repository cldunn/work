export interface IGlobalContext {
    i18n: object,
    addI18n: ((moreI18n: any) => object),
    getI18n: ((key: string) => string)
}
