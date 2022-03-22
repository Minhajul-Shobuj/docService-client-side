import { useEffect, useState } from "react";
import initAuth from "../../component/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth"

initAuth();
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [loading,setLoading] = useState(true);

    //---------login/register using Google--------//
    const googleSignIn = (location,navigate) => {
        setLoading(true);
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                const redirect_uri = location?.state?.from || '/';
                navigate(redirect_uri)
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setLoading(false));
    };
    //-----Register users using E-mail and Password-------//
    const registerUser = (email, password, name, navigate, reset) => {
        setLoading(true);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
              const user={email:email,displayName:name}
            setUser (user);
            saveUser(email, name);
             //----update user profile------//
             updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
               
              });
              console.log(result.user)
              navigate('/home')
              reset();
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message)
            })
            .finally(() => setLoading(false));
    };
    //-----Login using Email and Password-----//
    const loginUser = (email, password, navigate,location) => {
        setLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                const redirect_uri = location?.state?.from || '/';
                navigate(redirect_uri)
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };
    //-------logout---------//
    const logout = () => {
        setLoading(true);
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser('');
        }).catch((error) => {
            setError(error.message)
        }).finally(() => setLoading(false));
    };
    //------manage Users-------//
    useEffect(() => {
        const auth = getAuth();
        const unsubsCribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return unsubsCribed;
    }, []);
    //save users
    const saveUser = (email, name) => {
        const user = { email, name };
        fetch('https://protected-bastion-33246.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };
    return {
        googleSignIn, error, user, logout, registerUser,loading,loginUser
    }
};
export default useFirebase;