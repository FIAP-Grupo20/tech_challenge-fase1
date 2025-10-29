import { iEstilos } from "./iEstilos";

export interface IBotao extends iEstilos {
    tipo: "primary" | "default" | "dashed" | "text" | "link";
    label: string;
    prefixo?: React.ReactNode;
    sufixo?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
  }
  