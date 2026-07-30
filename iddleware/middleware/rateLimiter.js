const requests = new Map();

export default function(req,res,next){

    const ip = req.ip;

    const now = Date.now();

    if(!requests.has(ip)){

        requests.set(ip,[]);

    }

    const history = requests.get(ip);

    while(

        history.length &&
        now-history[0]>60000

    ){

        history.shift();

    }

    if(history.length>=60){

        return res.status(429).json({

            success:false,

            message:"Too Many Requests"

        });

    }

    history.push(now);

    next();

}
