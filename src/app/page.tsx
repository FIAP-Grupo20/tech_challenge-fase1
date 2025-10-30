"use client";

import { ChangeEvent, useState } from "react";
import styles from "./page.module.css";
import InputComponente from "@/components/Input/Input";
import SelectComponente from "@/components/Select/Select";
import Sidebar from "@/components/Sidebar/Sidebar";
import SaldoContainer from "@/components/SaldoContainer/SaldoContainer";
import ExtratoContainer from "@/components/ExtratoContainer/ExtratoContainer";
import Botao from "@/components/Botao/Botao";
import { listaExtratos, opcoesTransacao } from "../../public/assets/mock";
import { FormularioType } from "@/types/iFormulario";
import { adicionarTransacao } from "@/utils/transacao";
import { radii } from "@/styles/theme/radii";
import { palette } from "@/styles/theme/colors";
import { fontSizes } from "@/styles/theme/typography";

export default function Home() {
  const [valorInput, setValorInput] = useState<number>(0);
  const [descricao, setDescricao] = useState<string>("");
  const [valorSelect, setValorSelect] = useState<string>("");

  const userName = "Joana da Silva Oliveira";
  const firstName = userName.split(' ')[0];

  const valor = 1250.50;

  const [extratos, setExtratos] = useState(listaExtratos);

  const handleTransactionSubmit = (novaTransacao: FormularioType) => {
    const novosExtratos = adicionarTransacao(extratos, novaTransacao);
    setExtratos(novosExtratos);
  };

  const submeterTransacao = () => {
    if (!valorInput || !descricao || !valorSelect) {
      alert("Preencha todos os campos da transação.");
      return;
    }

    if (valorInput <= 0) {
      alert("Valor não pode ser menou ou igual a zero. Por favor, insira um valor válido.");
      return;
    }

    const novaTransacao: FormularioType = {
      valor: valorInput,
      tipo: valorSelect,
      descricao: descricao,
    };

    console.log(novaTransacao)
    
    handleTransactionSubmit(novaTransacao);

    setValorInput(0);
    setDescricao("");
    setValorSelect("");
};

  return (
    <>
      <div className={styles.containerTudo}>

        <Sidebar width={"100%"} height="" />

        <div className={styles.conteudoContainer}>

          <SaldoContainer
            height="40%"
            key={firstName}
            firstName={firstName}
            valor={valor}
          />

          <div style={{ flex: 1, minHeight: "fit-content", borderRadius: radii.sm, backgroundColor: palette.cinza300 }} className={styles.page}>
            
            <h4 style={{fontSize: fontSizes.heading, color: palette.azul700, fontWeight: 700}}>Nova transação</h4>
            <SelectComponente
              value={valorSelect}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setValorSelect(e.target.value)
              }
              options={opcoesTransacao}
            />

            <InputComponente
              type={"number"}
              value={valorInput}              
              onChange={(e) => {            
                const valorString = e.target.value;
      
                const valorNumber = valorString === '' ? 0 : parseFloat(valorString);
                
                setValorInput(valorNumber);
              }}        
              label="Valor"
              placeholder="R$ 00,00"
            />

            <InputComponente
              type={"text"}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              label="Descrição da transação"
            />

            <Botao 
              label={"Adicionar nova transação"} 
              onClick={submeterTransacao}   
              backgroundColor={palette.azul700}          
            />
          </div>
        </div>

        <ExtratoContainer extratos={extratos} setExtratos={setExtratos} />

      </div>
    </>
  );
}