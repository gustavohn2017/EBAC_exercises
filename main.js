const alunos = [
    { nome: 'João', nota: 7.0 },
    { nome: 'Julia', nota: 5.0 },
    { nome: 'Maria', nota: 8.0 },
    { nome: 'Arthur', nota: 4.0 },
    { nome: 'Lucas', nota: 10.0 },
    { nome: 'Gabriel', nota: "dó" },
    { nome: 'Pedro', nota: 6.0 },
    { nome: 'Ana', nota: 9.0 },
    { nome: 'Gustavo', nota: 5.0 },

    ]

    const aprovados = alunos.filter(aluno => aluno.nota >= 6.0)

    console.log(aprovados)