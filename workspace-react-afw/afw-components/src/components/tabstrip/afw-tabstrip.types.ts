import { ReactNode } from 'react'

export interface IPane {
    key: string,
    icon?: any
    title?: string,
    content: ReactNode,
    isDisabled?: boolean,
    isDeleteEnabled?: boolean
}

export interface ITab {
    activeKey: string,
    panes: Array<IPane>,
    defaultActiveKey: string,
    onDeleteTab?: (pane: IPane) => void,
    onSelect?: (selectedKey: any) => void
}