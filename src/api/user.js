export const loginUser = async(userName, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userName === 'user' && password === 'Abc@123'){
                resolve({
                    success: true,
                    data: {
                        userName,
                        email: 'abc@gmail.com'
                    }
                })
            }
            else{
                reject({ success: false, error: 'Invalid Credentials'})
            }
        }, 1000)
    });
};