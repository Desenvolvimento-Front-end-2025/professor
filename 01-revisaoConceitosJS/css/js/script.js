
var dv = "Outro Teste"

let original = null
original = document.getElementById("dtTxt")
original.innerHTML = dv + ' ' + maior(10, 8)
const odv = 12

const print = (s) => console.log(s)
let valores = {nome: 'zezin', x: 18, y: 15}
print(valores)

const maior1 = (val)=>{

    const {nome, x, y} = val

    if (x > y){
        return `${nome} ${x} é maior` //x+" é maior"
    }else if (x < y){
        return nome+' '+y+" é maior"
    }else{
        return "São iguais"
    }
}
print ( maior1(valores) )


function maior(x, y){
    if (x > y){
        return `${x} é maior`  //x+" é maior"
    }else if (x < y){
        return y+" é maior"
    }else{
        return "São iguais"
    }
}

const alunos = [
    {nome: 'zezin', nota: 10},
    {nome: 'Pedrin', nota: 3},
    {nome: 'Gustin', nota: 8},
    {nome: 'Jefin', nota: 1},
    {nome: 'Cadin', nota: 4},
]

console.log(alunos)

const aprovados = (alunos)=>{

    alunos.filter( (a) => a.nota >= 7 ).forEach( (a) => console.log(a.nome))

    // alunos.forEach( (a)=>{
    //                         if (a.nota >= 7)
    //                         console.log(a.nome) 
    //                     }  
    // )

}

aprovados(alunos)





