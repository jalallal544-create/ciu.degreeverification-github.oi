const API = {

    async verify(studentId){

        const response = await fetch(

            `/api/verify/${studentId}`

        );

        return response.json();

    },

    async login(email,password){

        const response = await fetch(

            "/api/admin/login",

            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({

                    email,
                    password

                })

            }

        );

        return response.json();

    }

};

export default API;
