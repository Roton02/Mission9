import { createContext, useState } from "react";

export const AuthContext = createContext(null)
const ContextProvider = ({children}) => {

 const [viewLand , setViewLand] = useState(null)
 console.log(viewLand);

const info = {setViewLand,viewLand}
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default ContextProvider;