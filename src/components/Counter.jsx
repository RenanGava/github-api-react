import { useState } from "react"

// imutabilidade

// usuarios = ['dieago3g', 'diegosf', 'danileao']

// usuarios.push('rafacamarda')

// novoUsuarios = [...usuarios, 'rafacamarda']

export function Counter(){

    const [counter, setCounter] = useState(0)

    function Increment(){
        setCounter(counter + 1)
    }
    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={Increment}>Increment</button>
        </div>
    )
}