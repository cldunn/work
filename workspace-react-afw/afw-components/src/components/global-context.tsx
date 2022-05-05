import React from "react";

/*
    Creates a Context object. When React renders a component that subscribes to this Context object 
    it will read the current context value from the closest matching Provider above it in the tree.

    The defaultValue argument is only used when a component does not have a matching Provider above it in the tree

    Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider.

    <MyContext.Provider value={ some_value }>
*/

export const GlobalContext = React.createContext({
    i18n: {},
    addI18n: function (moreI18n: any) {
        this.i18n = {...this.i18n, ...moreI18n }
    },
    getI18n: function (key: string) {
        return this.i18n[key as keyof Object] || '??' + key + '??';
    }
});
