module.exports = {

    apps: [

        {

            name: "degree-verification",

            script: "server.js",

            instances: "max",

            exec_mode: "cluster",

            env: {

                NODE_ENV: "production"

            }

        }

    ]

};
