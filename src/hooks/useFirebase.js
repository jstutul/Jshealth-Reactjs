import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import initializeAuthentication from "./../Firebase/firebase.initialization";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  const SignUpWithEmail = () => {
    console.log(email, password, name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setUserProfileName();
        setSuccess("Registration complete,Verified your Email to Login");
        emailVerify();
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };
  const emailVerify = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("email send");
    });
  };
  const loginWithEmail = () => {
    console.log("e", email, "p", password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified === true) {
          console.log(user);
          setUser(user);
          setSuccess("Login Successfully");
        } else {
          console.log("not verified");
          setSuccess("Email is not Verified");
        }
      })
      .catch((error) => {
        console.log("error");
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const setUserProfileName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {
      console.log("n", user);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("ar");
        setUser(user);
      }
    });
  }, []);
  return {
    signInUsingGoogle,
    user,
    setUser,
    error,
    logout,
    name,
    setName,
    email,
    setEmail,
    setUserProfileName,
    loginWithEmail,
    SignUpWithEmail,
    password,
    setPassword,
    success,
    setError,
  };
};

export default useFirebase;
