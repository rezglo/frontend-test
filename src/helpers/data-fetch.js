import { channels, users } from "../data/fake-data"


// This function "fetches" the users personal data, by first comparing the given email and password
// with the ones in the database
export const fetchCredentials = (email, password)=>{
    
    // Findng the user in the database
    const user = users.filter( user=> user.email === email )[0]        
    
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            // The passwords are compared, if not equal, the promise returns reject
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
                    msg: 'Email or password wrong'
                })
            }
        }, 1000)
       })
};

export const fetchChannels = ()=>{
    
    return new Promise((resolve)=>{
        
        setTimeout(() => {
            
            resolve(
                channels
            )

        }, 500);
    })

};

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

