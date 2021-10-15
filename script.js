function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Thiago", 23),
    novoAluno("Larissa", 33),
    novoAluno("Yago", 77),
    novoAluno("João", 21)
]

function alunosMap(aluno){
    return `${aluno.nome} tem ${aluno.idade} anos`
}
console.log(alunos.map(alunosMap));