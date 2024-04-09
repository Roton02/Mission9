import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config/Firbase.config";

export const AuthContext = createContext(null)
const ContextProvider = ({children}) => {

 const [viewLand , setViewLand] = useState(null)
//  console.log(viewLand);
 const [user , setUser] =useState(null)
    const [loading, setLoading] = useState(true)
   
    const signUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleProvider = new GoogleAuthProvider();
  const googleSignIn =()=>{
    setLoading(true)
    return  signInWithPopup(auth,googleProvider)
    
  }
  const githubProvider = new GithubAuthProvider()
  const githubSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  
  }
    const login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const Logout =()=>{
        setLoading(false)
        return signOut(auth)
    }
    useEffect(()=>{
        const  unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           if (currentUser) {
             setUser(currentUser);
             setLoading(false)
           } else{
              console.log('logOut Successfull');
           setUser(null)
           }
           return ()=>{
               unsubscribe()
           }
         });
     },[])

const info = {setViewLand,viewLand,  user, googleSignIn,githubSignIn, signUp,login,Logout,loading}
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default ContextProvider;