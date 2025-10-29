import { iEstilos } from "@/types/iEstilos";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

dayjs.locale('pt-br');

interface Props extends iEstilos {
    firstName: string;
    valor: number;
}

export default function SaldoContainer(props: Props) {
    const { firstName, valor } = props;

    const dataFormatada = dayjs().format('dddd, DD/MM/YYYY');
    const data = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

    const [saldoVisivel, setSaldoVisivel] = useState(true);

    const toggleVisibilidade = () => {
        setSaldoVisivel(!saldoVisivel);
    };

    const containerStyle: React.CSSProperties = {
        backgroundColor: props.backgroundColor || "var(--azul)",
        borderRadius: props.borderRadius || "8px",
        padding: props.padding || "32px",
        width: props.width || "100%",
        height: props.height || "100%",
        color: props.color || "var(--branco)",
        margin: props.margin || 0,
        border: props.border,
        fontFamily: props.fontFamily,
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        boxSizing: "border-box",
        minHeight: "220px",
    };

    const usernameStyle: React.CSSProperties = {
        fontSize: props.fontSize || "24px",
        fontWeight: props.fontWeight || "500",
        color: "var(--branco)",
    };

    const dataStyle: React.CSSProperties = {
        fontSize: "14px",
        fontWeight: props.fontWeight || "400",
        color: "inherit",
    };

    const saldoWrapperStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignSelf: "flex-end",
        alignItems: "flex-start",
        padding: "0px 100px 0px 0px"
    };

    const saldoTitleStyle: React.CSSProperties = {
        fontSize: "20px",
        fontWeight: "500",
        color: "inherit",
        margin: 0,
    };

    const accountTypeStyle: React.CSSProperties = {
        fontSize: "16px",
        fontWeight: "400",
        color: "inherit",
        margin: 0,
    };

    const valorStyleFinal: React.CSSProperties = {
        fontSize: "32px",
        fontWeight: "500",
        color: "inherit",
        minHeight: "38px",
        margin: 0,
    };

    const orangeLineStyle: React.CSSProperties = {
        width: "100%",
        height: "2px",
        backgroundColor: "var(--laranja)",
        marginTop: "4px",
        marginBottom: "4px",
    };

    const iconStyle: React.CSSProperties = {
        fontSize: "20px",
        color: "var(--laranja)",
        cursor: "pointer",
        alignSelf: "center"
    };

    return (
        <div style={containerStyle}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "start" }}>
                <span style={usernameStyle}>
                    Olá, {firstName}! :)
                </span>
                <span style={dataStyle}>
                    {data}
                </span>
            </div>

            <div style={saldoWrapperStyle}>
                <div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ display: "flex", width: "100%", alignContent: "center", gap: "24px" }}>
                        <h4 style={saldoTitleStyle}>
                            Saldo
                        </h4>
                        <span style={iconStyle} onClick={toggleVisibilidade}>
                            {saldoVisivel ? <Eye /> : <EyeOff />}
                        </span>
                    </div>

                    <div style={orangeLineStyle} />

                    <p style={accountTypeStyle}>
                        Conta Corrente
                    </p>
                </div>

                <h3 style={valorStyleFinal}>
                    {saldoVisivel ?
                        valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                        : "R$ ••••••"}
                </h3>
            </div>
        </div>
    );
}