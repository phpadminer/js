import * as express from "express";

const app = express();

app.locals.title = "app`s title";

app.use('/', (req, res) => {
    console.log(req.app.locals.title);
    res.end();
});
app.listen(1234, () => {
    console.log('server up');
});