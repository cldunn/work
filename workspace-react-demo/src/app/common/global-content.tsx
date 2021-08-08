import React from 'react';

const GlobalContext = React.createContext({
    i18n: {},
    addI18n: function (moreI18n: any) {
        this.i18n = {...this.i18n, ...moreI18n }
    },
    getI18n: function (key: string) {
        return this.i18n[key] || '??' + key + '??';
    }
});

export default GlobalContext;