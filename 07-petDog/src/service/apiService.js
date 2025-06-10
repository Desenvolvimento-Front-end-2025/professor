const URL="http://localhost:9000"

export const loginAPI = async (login, senha)=>{

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
        "username":`${login}`,
        "password":`${senha}`
        });

        console.log(bodyContent)

        let response = await fetch(`${URL}/auth/login`, { 
        method: "POST",
        body: bodyContent,
        headers: headersList
        });
        console.log("oi",response)

        if (response.status == 401){
            return null
        }

        let data = await response.text();
        console.log(data);
        return  JSON.parse(data)
}


export const buscaUserAPI = async (login, token)=>{

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        }
        let response = await fetch(`${URL}/users`, { 
        method: "GET",
        headers: headersList
        });

        let usuarios = JSON.parse( await response.text() );

        return  usuarios.filter(u => u.username == login)
}