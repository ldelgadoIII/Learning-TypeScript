import { useGlobalContext } from "./GlobalState";

export const useState = () => {
    const [state, dispatch] = useGlobalContext();

    const click = () => {
        dispatch({
            type: "LOADING",
            loading: true
        })
    }

    return (
        <div>
            {state.loading ? 
                <p>App is loading...</p> 
                : 
                <p>App has completed loading.</p>}
            <button onclick={() => click}>Load</button>
        </div>
    )
}
