const alunos = [ 
    { aluno: 'Anthony' , nota: 10},
    { aluno: 'João', nota: 7},
    { aluno: 'Pedro', nota: 3},
    { aluno: 'Bruno', nota: 5}, 
    { aluno: 'Maria', nota: 9},
    { aluno: 'Isadora', nota: 8},
    { aluno: 'Matheus', nota: 2},
    { aluno: 'Guilherme', nota: 6},
    { aluno: 'Gabriel', nota: 4}, 
];

const filtroAlunosAprovados = listaAlunos => { 
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtroAlunosAprovados(alunos);
console.log(alunosAprovados);