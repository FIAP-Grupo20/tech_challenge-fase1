export const listaExtratos = [
    {
      mes: "Outubro",
      extratos: [
        {
          id: 15,
          data: "2024-10-29",
          valor: 35,
          tipo: "recarga_celular",
          descricao: "Recarga de celular - Vivo",
        },
        {
          id: 14,
          data: "2024-10-21",
          valor: 100,
          tipo: "saque",
          descricao: "Saque em caixa eletrônico",
        },
        {
          id: 13,
          data: "2024-10-15",
          valor: 200.5,
          tipo: "pagamento_boleto",
          descricao: "Pagamento de boleto - Luz",
        },
        {
          id: 12,
          data: "2024-10-09",
          valor: 45,
          tipo: "estorno",
          descricao: "Estorno de compra - Mercado",
        },
        {
          id: 11,
          data: "2024-10-02",
          valor: 3000,
          tipo: "deposito",
          descricao: "Depósito em conta",
        },
      ],
    },
    {
      mes: "Setembro",
      extratos: [
        {
          id: 10,
          data: "2024-09-30",
          valor: 150,
          tipo: "estorno",
          descricao: "Estorno de compra - Restaurante",
        },
        {
          id: 9,
          data: "2024-09-24",
          valor: 320.65,
          tipo: "pagamento_boleto",
          descricao: "Pagamento de boleto - Internet",
        },
        {
          id: 8,
          data: "2024-09-17",
          valor: 950,
          tipo: "saque",
          descricao: "Saque em caixa eletrônico",
        },
        {
          id: 7,
          data: "2024-09-10",
          valor: 2300,
          tipo: "deposito",
          descricao: "Depósito em conta",
        },
        {
          id: 6,
          data: "2024-09-03",
          valor: 15,
          tipo: "recarga_celular",
          descricao: "Recarga de celular - TIM",
        },
      ],
    },
    {
      mes: "Agosto",
      extratos: [
        {
          id: 5,
          data: "2024-08-28",
          valor: 20,
          tipo: "recarga_celular",
          descricao: "Recarga de celular - Claro",
        },
        {
          id: 4,
          data: "2024-08-22",
          valor: 89.9,
          tipo: "estorno",
          descricao: "Estorno de compra - Farmácia",
        },
        {
          id: 3,
          data: "2024-08-15",
          valor: 450,
          tipo: "pagamento_boleto",
          descricao: "Pagamento de boleto - Água",
        },
        {
          id: 2,
          data: "2024-08-07",
          valor: 1250.75,
          tipo: "saque",
          descricao: "Saque em caixa eletrônico",
        },
        {
          id: 1,
          data: "2024-08-01",
          valor: 550,
          tipo: "deposito",
          descricao: "Depósito em conta",
        },
      ],
    },
  ];
  
  export const opcoesTransacao = [
    {
      value: "",
      label: "Selecione um tipo de transação",
    },
    {
      value: "deposito",
      label: "Depósito",
    },
    {
      value: "saque",
      label: "Saque",
    },
    {
      value: "pagamento_boleto",
      label: "Pagamento de boleto",
    },
    {
      value: "estorno",
      label: "Estorno",
    },
    {
      value: "recarga_celular",
      label: "Recarga de celular",
    },
  ];