import axiosInstance from '../helpers/axios-orders';
export const authService = {
    login, 
    logout,
    changePassword,
    updateProfile,  
};
// Note : in this case i didnt use case called for the API with AXIOS , because it dont need it
async function login(username, password) { 
  let formData = JSON.stringify({       
    "username":username,
    "password":password,
    }) 
// always return true
return axiosInstance()
.post('/api/user_profile_app/login', formData);
}

async function logout() { 
return axiosInstance()
.get('/api/user_profile_app/logout');
}

async function changePassword(oldPassword, newPassword) { 
  const id = JSON.parse(localStorage.getItem('user')).id;
  let formData = JSON.stringify({    
    "password":newPassword,
    }) 

//Falta avatar
return axiosInstance()
.put(`/api/user_profile_app/users/change_password/${id}`, formData);
}

async function updateProfile(user) { 
  const id = JSON.parse(localStorage.getItem('user')).id;
  console.log(user);
  let formData = JSON.stringify({       
    'email': user.email,
    'name': user.name,
    'first_name': user.first_name,
    'last_name': user.last_name,
    'role': user.role,
    'address': user.address,
    'avatar': null,
    'phone_number': user.phone_number
    }) 
    console.log(formData);
return axiosInstance()
.put(`/api/user_profile_app/users/${id}`, formData);
}