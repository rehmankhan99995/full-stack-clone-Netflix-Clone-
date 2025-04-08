// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { addDoc, collection, getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBJ15GUgqvOOAQypdwMQj5YJ8QylrjRQnY",
//   authDomain: "netflix-clone-c7e49.firebaseapp.com",
//   projectId: "netflix-clone-c7e49",
//   storageBucket: "netflix-clone-c7e49.firebasestorage.app",
//   messagingSenderId: "135114941898",
//   appId: "1:135114941898:web:930114b8f46840ce8adb33"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "user"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (error) {
//     if (error.code === 'auth/email-already-in-use') {
//       alert('Email already in use. Please use a different email.');
//     } else {
//       alert(error.message);
//     }
//   }
// };

// const login = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     alert(error.message);
//   }
// };

// const logout = () => {
//   signOut(auth);
// };

// export { auth, db, login, signup, logout }; 
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { addDoc, collection, getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBJ15GUgqvOOAQypdwMQj5YJ8QylrjRQnY",
//   authDomain: "netflix-clone-c7e49.firebaseapp.com",
//   projectId: "netflix-clone-c7e49",
//   storageBucket: "netflix-clone-c7e49.firebasestorage.app",
//   messagingSenderId: "135114941898",
//   appId: "1:135114941898:web:930114b8f46840ce8adb33"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "user"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (error) {
//     if (error.code === 'auth/email-already-in-use') {
//       alert('Email already in use. Signing in instead.');
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//       } catch (signInError) {
//         alert(signInError.message);
//       }
//     } else {
//       alert(error.message);
//     }
//   }
// };

// const login = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     alert(error.message);
//   }
// };

// const logout = () => {
//   signOut(auth);
// };
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
// import { toast } from "react-toastify";

// const firebaseConfig = {
//   apiKey: "AIzaSyBJ15GUgqvOOAQypdwMQj5YJ8QylrjRQnY",
//   authDomain: "netflix-clone-c7e49.firebaseapp.com",
//   projectId: "netflix-clone-c7e49",
//   storageBucket: "netflix-clone-c7e49.firebasestorage.app",
//   messagingSenderId: "135114941898",
//   appId: "1:135114941898:web:930114b8f46840ce8adb33"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "user"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (error) {
//     if (error.code === 'auth/email-already-in-use') {
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//       } catch (signInError) {
//         // alert(signInError.message);
//         toast.error(signInError.code.split('/')[1].split('-').join(' '));
//       }
//     } else {
//       // alert(error.message);
//       toast.error(error.code.split('/')[1].split('-').join(' '));
//     }
//   }
// };

// const login = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     alert(error.message);
//   }
// };

// const logout = () => {
//   signOut(auth);
// };

// export { auth, db, login, signup, logout };
// // export { auth, db, login, signup, logout };import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
// import { toast } from 'react-toastify';

// const firebaseConfig = {
//   apiKey: "AIzaSyBJ15GUgqvOOAQypdwMQj5YJ8QylrjRQnY",
//   authDomain: "netflix-clone-c7e49.firebaseapp.com",
//   projectId: "netflix-clone-c7e49",
//   storageBucket: "netflix-clone-c7e49.firebasestorage.app",
//   messagingSenderId: "135114941898",
//   appId: "1:135114941898:web:930114b8f46840ce8adb33"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "user"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (error) {
//     if (error.code === 'auth/email-already-in-use') {
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//         toast.success('Signed in successfully');
//       } catch (signInError) {
//         toast.error('Invalid credentials. Please check your password.');
//       }
//     } else {
//       toast.error(error.message);
//     }
//   }
// };

// const login = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

// const logout = () => {
//   signOut(auth);
// };

// export { auth, db, login, signup, logout };import { initializeApp } from "firebase/app";

//  import { initializeApp } from "firebase/app";

// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
// import { toast } from 'react-toastify';

// const firebaseConfig = {
//   apiKey: "AIzaSyBJ15GUgqvOOAQypdwMQj5YJ8QylrjRQnY",
//   authDomain: "netflix-clone-c7e49.firebaseapp.com",
//   projectId: "netflix-clone-c7e49",
//   storageBucket: "netflix-clone-c7e49.firebasestorage.app",
//   messagingSenderId: "135114941898",
//   appId: "1:135114941898:web:930114b8f46840ce8adb33"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "user"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//     toast.success('Account created successfully');
//   } catch (error) {
//     if (error.code === 'auth/email-already-in-use') {
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//         toast.success('Signed in successfully');
//       } catch (signInError) {
//         if (signInError.code === 'auth/wrong-password') {
//           toast.error('Invalid credentials. Please check your password.');
//         } else {
//           toast.error(signInError.message);
//         }
//       }
//     } else {
//       toast.error(error.message);
//     }
//   }
// };

// const login = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     toast.success('Signed in successfully');
//   } catch (error) {
//     if (error.code === 'auth/wrong-password') {
//       toast.error('Invalid credentials. Please check your password.');
//     } else {
//       toast.error(error.message);
//     }
//   }
// };

// const logout = () => {
//   signOut(auth);
//   toast.success('Signed out successfully');
// };

// export { auth, db, login, signup, logout };
// import { initializeApp } from "firebase/app";import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: "AIzaSyBJ15GUgqvOOAQypdwMQj5YJ8QylrjRQnY",
  authDomain: "netflix-clone-c7e49.firebaseapp.com",
  projectId: "netflix-clone-c7e49",
  storageBucket: "netflix-clone-c7e49.firebasestorage.app",
  messagingSenderId: "135114941898",
  appId: "1:135114941898:web:930114b8f46840ce8adb33"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast.success('Account created successfully');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Signed in successfully');
      } catch (signInError) {
        if (signInError.code === 'auth/wrong-password') {
          toast.error('Invalid credentials. Please check your password.');
        } else if (signInError.code === 'auth/too-many-requests') {
          toast.error('Too many requests. Please try again later.');
        } else {
          toast.error(signInError.message);
        }
      }
    } else {
      toast.error(error.message);
    }
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success('Signed in successfully');
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      toast.error('Invalid credentials. Please check your password.');
    } else if (error.code === 'auth/too-many-requests') {
      toast.error('Too many requests. Please try again later.');
    } else {
      toast.error(error.message);
    }
  }
};

const logout = () => {
  signOut(auth);
  toast.success('Signed out successfully');
};

export { auth, db, login, signup, logout };