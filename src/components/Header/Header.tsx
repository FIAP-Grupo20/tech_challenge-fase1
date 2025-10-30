// components/NavBar.tsx
import React from 'react';
import { iEstilos } from "@/types/iEstilos";
import { CircleUserRound } from 'lucide-react';
import { fontSizes, fontWeights } from '@/styles/theme/typography';
import { palette } from '@/styles/theme/colors';

interface HeaderProps extends iEstilos {
    clientName: string;
}

export default function HeaderComponente(props: HeaderProps) {
    const { clientName } = props;

    const headerStyle: React.CSSProperties = {
        backgroundColor: props.backgroundColor || palette.azul700,
        color: props.color || palette.branco,
        padding: props.padding || "16px 10vw",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        boxSizing: "border-box",
        fontFamily: props.fontFamily,
        gap: 40,
    };

    const clientNameStyle: React.CSSProperties = {
        fontSize: fontSizes.small,
        fontWeight: fontWeights.medium,
        margin: 0,
    };

    const profileIconStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: fontWeights.bold,
        color: palette.laranja500,
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