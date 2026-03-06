const API_URL = "http://localhost:5000/api/auth"

const login =  async (credentials)=>{
    const response = await fetch(`${API_URL}/login`, {
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        // i will need it for cookies
        credentials : 'include',
        body : JSON.stringify(credentials)
    })
    const data = await response.json()
    if(!response.ok)
        throw new Error(data.message || 'login failed')

    if(data.user) {
        localStorage.setItem('user', JSON.stringify(data.user))
    }
    return data;
}
const register = async(credentials)=>{
    const response = await fetch(`${API_URL}/register`, {
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        // i will need it for cookies
        credentials : 'include',
        body : JSON.stringify(credentials)
    })
    const data = await response.json()
    console.log(data)
    if(!response.ok)
        throw new Error(data.message || 'registration failed')
    else return data
}
const getCurrentUser = ()=>{
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null  
}
const logout = () => {
    localStorage.removeItem('user');
};

const authServices = {
    getCurrentUser,
    login,
    logout,
    register
}

export default authServices