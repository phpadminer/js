import * as express from "express";

const app = express();
const admin = express();
const secret = express();

secret.get('/', (req, res) => {
    console.log(`baseUrl:${req.baseUrl}`);
    console.log(`mountpath:${secret.mountpath}`);
    res.send("Admin Secret");
});

admin.get('/', (req, res) => {
    console.log(`baseUrl:${req.baseUrl}`);
    console.log(`mountpath:${admin.mountpath}`);
    res.send('Admin Homepage');
});
admin.use('/secr*t', secret);
app.use(['/adm*n', '/manager'], admin);

app.listen(1234, () => {
    console.log('server up');
});