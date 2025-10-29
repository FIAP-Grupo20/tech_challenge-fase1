import { IBotao } from "@/types/iBotao";
import { Button } from "react-bootstrap";

export default function Botao({
    tipo,
    label,
    prefixo,
    sufixo,
    onClick,
    disabled,
    className,
    padding,
    margin,
    width,
    height,
    border,
    borderRadius,
    fontSize,
    fontWeight,
    color,
    backgroundColor,
}:IBotao) {
    const buttonStyle = {
        padding: padding ? padding : "16px",
        margin,
        width,
        height: height ? height : "fit-content",
        border: border ? border : "none",
        borderRadius: borderRadius ? borderRadius : "8px",
        fontSize: fontSize ? fontSize : "16px",
        fontWeight: fontWeight ? fontWeight : "600",
        color: color ? color : "var(--branco)",
        backgroundColor: disabled ? '#DEE9EA' : backgroundColor ? backgroundColor : "var(--laranja)",
        cursor: "pointer"
    };

    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={className}
            style={buttonStyle}
        >
            {prefixo}
            {label}
            {sufixo}
        </Button>
    )
}