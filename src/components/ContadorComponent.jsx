import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {
    const {
        contador,
        incrementar,
        decrementar,
        resetear
    } = useCounter(0)

    return (
        <>
            <h1>App de contador.</h1>
            <h5>Utilizando custom hooks.</h5>
            <h2>Contador: {contador} </h2>
            <button className="btn btn-primary" onClick={() => incrementar(1)}>+1</button>
            <button className="btn btn-danger" onClick={() => resetear()}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrementar(1, true)}>-1</button>
            <hr />
        </>
    )
}
