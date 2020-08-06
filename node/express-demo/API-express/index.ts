import * as express from 'express';

let app = express();
app.use((request, response, next) => {
    console.log(request, response);
    response.end();
    next();
});
app.listen(1234, () => {
    console.log('server up!');
});

