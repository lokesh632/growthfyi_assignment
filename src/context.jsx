import { createContext, useState } from "react";

const context = createContext();


export const ContextProvider = ({children})=>{
    const [url,setUrl] = useState("ok");
    return(
    <context.Provider value={{url,setUrl}}>
        {children}
    </context.Provider>
    )
}

export default context