import React from "react"

const produtos = [
    {
        id: 1, 
        name: "Smartphone",
        preco: "R$ 2000",
        cores: ['#29d8d5', '#252a34', "#fc3766"]
    },
    {
        id: 2, 
        name: "Notebook",
        preco: "R$ 3000",
        cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
        id: 3,
        name: "Tablet",
        preco: "R$ 1500",
        cores: ["#365069", "#47c1c8", "#f95786"],
    },
];



const App = () => {  
    const dados = produtos.filter(({preco}) => Number(preco.replace("R$", "")) > 1500)
    console.log(dados)
    return (
        <section>
            {dados.map(({id,name,preco,cores}) => (
                <div key={id}>
                    <h1>{name}</h1>
                    <p>Preço: {preco}</p>
                    <ul>
                        {cores.map(cor => 
                        <li style={{backgroundColor: cor,color: "white",}} key={cor}>{cor}</li>)}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default App