import { ReactNode } from "react";
import { ModalProps } from "react-bootstrap";

export interface AfwModalProps extends ModalProps {
    show: boolean;
    closeModal: boolean;
    children: ReactNode;
    dialogClassName: string;
}