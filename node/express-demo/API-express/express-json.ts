import * as express from "express";

const app = express();

app.use(express.json());
app.post('/users', (res, rep) => {
    console.log(res.body);
    // res.on('data', (chunk) => {
    //     console.log(chunk.toString());
    // });
    rep.end();
});
app.listen(1234, () => {
    console.log("server up");
});