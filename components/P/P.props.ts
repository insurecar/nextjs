import { ReactNode, DetailedHTMLProps, ParamHTMLAttributes } from 'react';

export interface PProps extends DetailedHTMLProps<ParamHTMLAttributes<HTMLPreElement>, HTMLPreElement>{
    children: ReactNode;
    size?: 's'|'m'| 'l'
}