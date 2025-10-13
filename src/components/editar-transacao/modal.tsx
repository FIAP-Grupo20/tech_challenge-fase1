"use client";

import React, { useState, ChangeEvent } from "react";
import SelectComponente from "@/components/Input/Select";
import { iEstilos } from "@/types/iEstilos";

export default function ModalEditarTransacao({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [tipoTransacao, setTipoTransacao] = useState("");
  const [valor, setValor] = useState("");

  if (!isOpen) return null;

  const modalStyle: iEstilos = {
    height: "auto",
    width: "400px",
    padding: "24px",
    backgroundColor: "#ffffff",
    color: "#333333",
    border: "1px solid #cccccc",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Arial, sans-serif",
    textAlign: "left",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div style={modalStyle}>
        <h2 style={{ marginBottom: "16px" }}>Editar Transação</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "16px", color:"var(--azul)"}}>
          <label>
            Tipo de Transação:
          </label>
          <SelectComponente
            // label="Tipo de Transação"
            value={tipoTransacao}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setTipoTransacao(e.target.value)
            }
            options={[
              { value: "", label: "Selecione um tipo de transação" },
              { value: "deposito", label: "Depósito" },
              { value: "transferencia", label: "Transferência" },
              { value: "pagamento", label: "Pagamento" },
              { value: "investimento", label: "Investimento" },
            ]}
          />

          <label>
            Valor:
          </label>
          <input
            type="number"
            name="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <button style={{backgroundColor: "var(--azul)", borderRadius: "8px", width: "50%"}} type="submit">Salvar</button>
            <button style={{backgroundColor: "var(--azul)", borderRadius: "8px", width: "50%"}} type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
