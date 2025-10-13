import { iEstilos } from "@/types/iEstilos";

interface Props extends iEstilos {
  username: string;
  data: string;
  valor: number;
}

export default function ContainerSaldoComponent({ username, data, valor, ...estilos }: Props) {
  return (
    <div
      style={{
        backgroundColor: estilos.backgroundColor || "var(--azul)",
        borderRadius: estilos.borderRadius || "16px",
        padding: estilos.padding || "24px",
        width: estilos.width || "100%",
        color: estilos.color || "var(--branco)",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        ...estilos,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontSize: estilos.fontSize || "18px",
            fontWeight: estilos.fontWeight || "600",
            color: "var(--branco)",
          }}
        >
          Olá, {username}!
        </span>
        <span
          style={{
            fontSize: "14px",
            color: "var(--cinza-escuro)",
          }}
        >
          {data}
        </span>
      </div>

      <div
        style={{
          backgroundColor: "var(--branco)",
          borderRadius: "12px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h4
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#333",
            }}
            >SEU SALDO</h4>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#555",
            }}
          >
            Conta Corrente
          </p>
        </div>

        <h3
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "var(--verde)",
          }}
        >
          {valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </h3>
      </div>
    </div>
  );
}