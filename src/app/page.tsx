"use client";

import { ChangeEvent, useState } from "react";
import styles from "./page.module.css";
import InputComponente from "@/components/Input/Input";
import SelectComponente from "@/components/Input/Select";

export default function Home() {
  const [valorInput, setValorInput] = useState<string | number>("");
  const [valorSelect, setValorSelect] = useState<string | number>("");

  return (
    <div className={styles.page}>
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
    </div>
  );
}
