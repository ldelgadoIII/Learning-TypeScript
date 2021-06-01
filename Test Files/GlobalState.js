import {useReducer, createContext, useContext} from "react";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const reducer = (state, action) => {
    switch (action.type){
        case "LOADING":
            return { 
                ...state,
                loading: state.loading
            }
        default:
            return state;
    }
}

const GlobalProvider = ({...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        loading = false
    })

    return <Provider value ={[state, dispatch]} {...props}/>
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };