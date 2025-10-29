"use client"

import styles from './ExtratoContainer.module.css'
import { Pen, Trash } from 'lucide-react'
import { useState } from 'react'
import dayjs from 'dayjs'
import { listaExtratos } from '../../../public/assets/mock'
import Botao from '../Botao/Botao'
import { editarTransacao, ExtratoMensalType, removerTransacao } from '@/utils/transacao'
import { ExtratoItemType, FormularioType } from '@/types/iFormulario'
import ModalEditarTransacao from '../EditarTransacao/modal'

interface ExtratoContainerProps {
    extratos: ExtratoMensalType;
    setExtratos: React.Dispatch<React.SetStateAction<ExtratoMensalType>>;
}

export default function ExtratoContainer({ extratos, setExtratos }: ExtratoContainerProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ExtratoItemType | null>(null);

    const showModal = (item: ExtratoItemType) => {
        setIsModalOpen(true);
        setSelectedItem(item)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleEditFinish = (itemEditado: ExtratoItemType) => {
        const novosExtratos = editarTransacao(extratos, itemEditado);
        setExtratos(novosExtratos);
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    const handleDelete = (itemId: number) => {
        const novosExtratos = removerTransacao(extratos, itemId);
        setExtratos(novosExtratos);
    };
    return (
        <div className={styles.extratoContainer}>
            <div className={styles.extratoHeader}>
                <h1>
                    Extrato
                </h1>
            </div>
            <div className={styles.extratoLista}>
                {extratos.map((extrato, index) => (
                    <div key={index}>
                        <div className={styles.extratoMes}>
                            <h5>{extrato.mes}</h5>
                            {extrato.extratos.map((item, idx) => (
                                <div key={idx}>
                                    <div className={styles.extratoDia}>
                                        <div className={styles.extratoDiaHeader}>
                                            <p>{item.descricao} - {dayjs(item.data).format("DD/MM/YYYY")}</p>
                                            <h5>R$ {item.tipo != "deposito" ? "-" : ""} {item.valor}</h5>
                                        </div>
                                        <div style={{ display: "flex", gap: "5px" }}>
                                            <Botao
                                                tipo={'primary'}
                                                label={''}
                                                onClick={() => showModal(item)}
                                                prefixo={<Pen />}
                                                backgroundColor='var(--azul)'
                                                borderRadius='100%'
                                                padding="11px"
                                                color="var(--branco)"
                                                border="none"
                                            />
                                            <Botao
                                                tipo={'primary'}
                                                label={''}
                                                prefixo={<Trash />}
                                                backgroundColor='var(--laranja)'
                                                borderRadius='100%'
                                                border='none'
                                                padding="11px"
                                                onClick={() => handleDelete(item.id)}
                                                color="var(--branco)"
                                            />
                                        </div>
                                    </div>
                                    <hr style={{ borderColor: "var(--verde)", margin: "5px 0px" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <ModalEditarTransacao isOpen={isModalOpen} onClose={handleCancel} extratoData={selectedItem} onFinish={handleEditFinish} />
        </div>
    )
}