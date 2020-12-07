
import axios from 'axios'

export const isAuthenticated = async() => {
    

    let retorno = false

    await axios.get("http://localhost:3000/v1/teste",  {
        method: 'GET',
        headers: {'X-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA3MTA5NDUzLCJleHAiOjE2MDcxMDk1MTN9.S924ygSww6241So8xiBnvfzOf36omW8TRTH7VATUR1w'}
    })
    .then ((res) => {

        return res

    }).then((res) => {

        console.log(res.data[0].auth)
         
        if(res.data[0].auth) {
            console.log("aqui e true")
            retorno = true
        }else{
            console.log("aqui e false")
            retorno = false
        }

    }) .catch((err) => {

        console.log('token expirado ou token errado')
        return false
    })


    console.log(`o retorno esta com ${retorno}`)
    return retorno
 

 

}

// export const isAuthenticated = () => false
