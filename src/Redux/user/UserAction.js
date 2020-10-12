import { SET_CURRENT_USER, REMOVE_USER } from "./UserConstant";
import { auth, serverTimeStamp,  firestore, googleProvider } from "./../../Firebase/Firebase";
export var  setCurrentUser = (userObj) => ({
    type : SET_CURRENT_USER,
    payload : {

        userObj :userObj
    }
})

export var signup  = (userObj, navigate ) => {
    return async (dispatch) => {
        try{
            var {fullName , email , password} = userObj;
                //create user with firebase awth
            var createdUser = await auth.createUserWithEmailAndPassword(email,password)

                            // saave user in database
                            var userObjForFirestore  = {
                            fullName ,
                            email , 
                            createdAt : serverTimeStamp()
                        };
                            //  console.log(userObjForFirestore)
                        
                        await firestore.collection("users")
                        .doc(createdUser.user.uid)
                        .set(userObjForFirestore)

                // update user auth profile
         await  createdUser.user.updateProfile({
                displayName:fullName
    
                    })


                    // navigate
                  // navigate()

                }
                catch(error){
                    console.log(error)
            
                }

    }
}; 


export var signin = (userObj) => {
    return async (dispatch) =>{

        try {
            var {email , password } = userObj;
            await auth.signInWithEmailAndPassword(email , password); 
            // var {displayName , email , uid} = user
            // var userObjForState = {
            //     fullName: displayName , 
            //     email : email ,
            //     uid : uid, 
            //     }
                // console.log(userObjForState)
                // dispatch(setCurrentUser(userObjForState)); 
        }

         catch (error) {
            console.log(error)
            
        }
    }
}

 export var removeCurrentUser = () => {
     return async (dispatch) => {
         dispatch({
             type: REMOVE_USER
         })
     } 
 }
 export var signout = () => {
    return async (dispatch) => {
        await auth.signOut();
        
    }
}

export var googleLogin = () => {
    return async (dispatch) => {
       try{ 
        var {user : {displayName , email , uid}, additionalUserInfo:{isNewUser}} = await auth.signInWithPopup(googleProvider);
        if(isNewUser){
            // send user data to firestore
        var userObj = {
            fullName : displayName ,
            email , 
            createdAt: serverTimeStamp()
        }
        await firestore.collection("users").doc(uid).set(userObj);

    }

    } catch(error) {
           console.log(error)
       }
    }
}