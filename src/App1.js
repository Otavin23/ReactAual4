
const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
        { nome: "Notebook", preco: "R$ 2500"},
        { nome: "Geladeira", preco: "R$ 3000"},
        { nome: "Smartphone", preco: "R$ 1500"},
    ],
    ativa: true,
};
const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
        { nome: "Notebook", preco: "R$ 2500"},
        { nome: "Geladeira", preco: "R$ 3000"},
        { nome: "Smartphone", preco: "R$ 1500"},
        { nome: "Guitarra", preco: "R$ 3500"},
    ],
    ativa: false, 
};

const App = () => {

    const dados = luana

    const FilterPrecos = dados.compras. map((el) => {
        const getElemento = el.preco
        const converterElementNumber = Number(getElemento.replace("R$",""))
        return converterElementNumber
    })

    const total = FilterPrecos.reduce((anterior, atual) => anterior + atual , 0)

    const ativosOrNo = dados.ativa === true ? "ativa": "Inativo"
    const validar = dados.ativa === true ? "green" : "red";

    return (
        <>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>
            Situação:{" "} 
            <span style={{color: validar}}>
                {ativosOrNo}
            </span>
        </p>
        <p>Total gasto: {total}</p>
        {total > 10000 && <p>Voce esta gastando muito</p>}
        </>
    )
}

export default App