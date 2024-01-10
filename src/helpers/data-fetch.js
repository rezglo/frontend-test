import { channels, users } from "../data/fake-data"


// This function "fetches" the users personal data, by first comparing the given email and password
// with the ones in the database
export const fetchCredentials = (email, password)=>{
    
    const user = users.filter( user=> user.email === email )[0]        
    
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{

            if( user?.password == password ){
                resolve({
                    ok: true,
                    user:
                        {
                            username: user.username,
                            email,
                            uid: user.uid,
                            avatarURL: user.avatarURL
                        }
                })
                     
            } else {
                reject({
                    ok: false,
                    msg: 'Wrong Email or Password'
                })
            }
        }, 1000)
       })
};

// This function "fetches" the existing channels, which contain name, id and texts 
export const fetchChannels = ()=>{
    
    return new Promise((resolve)=>{
        
        setTimeout(() => {
            
            resolve(
                channels
            )

        }, 500);
    })

};

// This function "fetches" the given user's private messages and contact list
export const fetchPrivateMessages = (uid)=>{
    return new Promise((resolve)=>{

        setTimeout(() => {
            
            const user = users.filter(user=>user.uid===uid)[0];
            const restOfUsers = users.filter(user=>user.uid!==uid)
            resolve({
                privateMessages: user.msgs,
                contacts: restOfUsers
            })
            
        }, 500);
    })
};

