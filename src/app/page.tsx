"use client";

import { ChangeEvent, useState } from "react";
import styles from "./page.module.css";
import InputComponente from "@/components/Input/Input";
import SelectComponente from "@/components/Input/Select";
import ContainerSaldo from "@/components/saldo/container";
import ModalEditarTransacao from "@/components/editar-transacao/modal";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  const [valorInput, setValorInput] = useState<string | number>("");
  const [valorSelect, setValorSelect] = useState<string | number>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const username = "João";
  const data = "Quarta-feira, 12/10/2025";
  const valor = 1250.50;

  const sidebarWidth = "200px";
  const espacamento = "24px";
  const mainContentStyle: React.CSSProperties = {
    marginLeft: `calc(${sidebarWidth} + ${espacamento})`,
    padding: "24px",
  };

  return (
    <>
      <Sidebar width={sidebarWidth} />

      <div className={styles.page} style={mainContentStyle}>
        <InputComponente
          type={"primary"}
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
          label="Input modelo"
        />

        <SelectComponente
          value={valorSelect}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setValorSelect(e.target.value)
          }
          options={[
            {
              value: "",
              label: "Selecione uma opção",
            },
            { value: "opcao1", label: "Opção 1" },
            { value: "opcao2", label: "Opção 2" },
            { value: "opcao3", label: "Opção 3" },
          ]}
          label={"Select modelo"}
        />

        <ContainerSaldo
          key={username}
          username={username}
          data={data}
          valor={valor}
        />

        <ModalEditarTransacao
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <button onClick={() => setIsModalOpen(true)}>Editar Transação</button>
      </div>
    </>
  );
}