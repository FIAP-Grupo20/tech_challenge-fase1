"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import SelectComponente from "@/components/Input/Select";
import { iEstilos } from "@/types/iEstilos";
import { opcoesTransacao } from "../../../public/assets/mock";
import InputComponente from "../Input/Input";
import { ExtratoItemType, FormularioType } from "@/types/iFormulario";
import Botao from "../Botao/Botao";

export default function ModalEditarTransacao({
  isOpen,
  onClose,
  extratoData, 
  onFinish
}: {
  isOpen: boolean;
  onClose: () => void;
  extratoData: ExtratoItemType | null;
  onFinish?: (item: ExtratoItemType) => void 
}) {
  const [tipoTransacao, setTipoTransacao] = useState("");
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (extratoData) {
      setTipoTransacao(extratoData.tipo || "");
      
      setValor(extratoData.valor);
      
      setDescricao(extratoData.descricao || "");
    } else {
      setTipoTransacao("");
      setValor(0);
      setDescricao("");
    }
    
  }, [extratoData]);

  const handleSave = () => {
    if (!tipoTransacao || !valor || !descricao) {
      alert("Preencha todos os campos e insira um valor válido e positivo.");
      return;
    }

    if (valor <= 0 ) {
      alert("Valor não pode ser menou ou igual a zero. Por favor, insira um valor válido.");
        return;
    }

    if (!extratoData) {
      alert("Não foi possível carregar os dados para a edição");
        return;
    }

    const itemAtualizado: ExtratoItemType = {
      id: extratoData.id, 
      data: extratoData.data, 
      valor: valor, 
      tipo: tipoTransacao,
      descricao: descricao,
    };

    if (onFinish) {
      onFinish(itemAtualizado);
    }
    onClose(); 
  };

  if (!isOpen) return null;

  const modalStyle: iEstilos = {
    height: "auto",
    padding: "24px",
    backgroundColor: "#ffffff",
    color: "#333333",
    border: "1px solid #cccccc",
    borderRadius: "8px",
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
            value={tipoTransacao}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setTipoTransacao(e.target.value)
            }
            options={opcoesTransacao}
          />

          <InputComponente
            type="number"
            label="Valor"
            value={valor}
            onChange={(e) => {            
              const valorString = e.target.value;
    
              const valorNumber = valorString === '' ? 0 : parseFloat(valorString);
              
              setValor(valorNumber);
            }}  
          />

          <InputComponente
            type="text"
            label="Descrição da transação"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            />

          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
          <Botao 
            tipo={"primary"} 
            label={"Editar"}
            onClick={handleSave}
            />
            <Botao 
            tipo={"primary"} 
            label={"Cancelar"}
            onClick={onClose}
            backgroundColor="var(--azul)"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
