import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
};

export default initializeAuthentication;

/* 
Steps For Authentication
------------------------

Step-1: Initital SetUp
1. firebase: create projects
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method 

---------------------

Step-2: Setup Compononent
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

------------------------

Step-3: Set Auth System
1. Set up sign in method
2. Set up sign out method
3. User state
4. Special Observer
5. return necessary methods and states from useFirebase

--------------------------

Step-4: Create auth context hook (useAuth) 
1. create a auth context
2. create context provider
3. set context provider context value
4. use Auth provider
5. create useAuth hook

----------------------------

Step-5: Create Private Route
1. create private route
2. set private route

-----------------------------

Step-6: Redirect After Login
1. after login redirect user to their desired destination


*/