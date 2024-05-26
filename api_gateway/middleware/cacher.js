import { createClient } from 'redis';
const REDIS_CLIENT = createClient({
  host: 'REDIS_HOST',
  port: 6379
});

REDIS_CLIENT.on('error', (err) => {
    console.error('ERROR: ', err);
});

REDIS_CLIENT.on('connect', () => {
    console.log('Redis Connected Successfully !');
});



function cacher(req, res, next) {
    const { url } = req;
    REDIS_CLIENT.get(url, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
        } else {
            res.sendResponse = res.send;
            res.send = (body) => {
                REDIS_CLIENT.setex(url, 3600, JSON.stringify(body));
                res.sendResponse(body);
            };
            next();
        }
    });
}


export default cacher;