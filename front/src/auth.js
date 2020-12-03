
import axios from 'axios'

export const isAuthenticated = async() => {
    
    let resultado

    await axios.get("http://localhost:3000/v1/teste",  {
        method: 'GET',
        headers: {'X-access-token': 'eyJhbGciOJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2OTYxNTQ3LCJleHAiOjE2MDY5NjE4NDd9.RMxSXze0ZdtReOeiWmBVcfeuwEiA7R--BjGyvpwHVmk'}
    })
    .then ( async(res) => {

        console.log(res.data[0].auth)
        resultado = await res.data[0].auth


    }) .catch((err) => {

        
    })

    console.log(resultado)
}

// export const isAuthenticated = () => false
