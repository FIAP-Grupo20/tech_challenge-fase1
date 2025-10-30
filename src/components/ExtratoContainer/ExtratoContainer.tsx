"use client"

import styles from './ExtratoContainer.module.css'
import { Pen, Trash } from 'lucide-react'
import { useState } from 'react'
import dayjs from 'dayjs'
import Botao from '../Botao/Botao'
import { editarTransacao, ExtratoMensalType, removerTransacao } from '@/utils/transacao'
import { ExtratoItemType } from '@/types/iFormulario'
import ModalEditarTransacao from '../EditarTransacao/modal'
import { fontSizes, fontWeights } from '@/styles/theme/typography'
import { palette } from '@/styles/theme/colors'

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
        <div className={styles.extratoContainer} style={{backgroundColor: palette.branco}}>
            <div className={styles.extratoHeader}>
                <h1 style={{fontWeight: fontWeights.bold, fontSize: fontSizes.heading}}>
                    Extrato
                </h1>
            </div>
            <div className={styles.extratoLista} style={{color: "black"}}>
                {extratos.map((extrato, index) => (
                    <div key={index}>
                        <div className={styles.extratoMes}>
                            <h5 style={{fontWeight: fontWeights.medium, fontSize: fontSizes.small, color: palette.verde500}}>{extrato.mes}</h5>
                            {extrato.extratos.map((item, idx) => (
                                <div key={idx}>
                                    <div className={styles.extratoDia}>
                                        <div className={styles.extratoDiaHeader}>
                                            <p style={{fontWeight: fontWeights.regular, fontSize: fontSizes.body}}>{item.descricao} - {dayjs(item.data).format("DD/MM/YYYY")}</p>
                                            <h5 style={{fontWeight: fontWeights.medium, fontSize: fontSizes.body}}>R$ {item.tipo != "deposito" ? "-" : ""} {item.valor}</h5>
                                        </div>
                                        <div style={{ display: "flex", gap: "5px" }}>
                                            <Botao
                                                label={''}
                                                onClick={() => showModal(item)}
                                                prefixo={<Pen />}
                                                backgroundColor={palette.azul700}
                                                borderRadius='100%'
                                                padding="11px"
                                                color={palette.branco}
                                                border="none"
                                            />
                                            <Botao
                                                label={''}
                                                prefixo={<Trash />}
                                                backgroundColor={palette.laranja500}
                                                borderRadius='100%'
                                                border='none'
                                                padding="11px"
                                                onClick={() => handleDelete(item.id)}
                                                color={palette.branco}
                                            />
                                        </div>
                                    </div>
                                    <hr style={{ borderColor: palette.verde500, margin: "5px 0px" }} />
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