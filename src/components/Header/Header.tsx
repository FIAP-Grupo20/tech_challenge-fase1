// components/NavBar.tsx
import React from 'react';
import { iEstilos } from "@/types/iEstilos";
import { CircleUserRound } from 'lucide-react';

interface HeaderProps extends iEstilos {
    clientName: string;
}

export default function HeaderComponente(props: HeaderProps) {
    const { clientName } = props;

    const headerStyle: React.CSSProperties = {
        backgroundColor: props.backgroundColor || "var(--azul)",
        color: props.color || "var(--branco)",
        padding: props.padding || "16px 10vw",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        boxSizing: "border-box",
        fontFamily: props.fontFamily,
        gap: 40,
    };

    const clientNameStyle: React.CSSProperties = {
        fontSize: "14px",
        fontWeight: "500",
        margin: 0,
    };

    const profileIconStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        color: "var(--laranja)",
        overflow: "hidden",
    };

    return (
        <nav style={headerStyle}>
            <p style={clientNameStyle}>
                {clientName}
            </p>
            <div style={profileIconStyle}>
                <CircleUserRound size={30} />
            </div>
        </nav>
    );
}