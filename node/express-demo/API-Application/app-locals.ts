import * as express from "express";

const app = express();
app.locals.title = "My app";
console.log(app.locals.title);
app.use((res, rep) => {
    console.log(res.app.locals.title);
    rep.end();
});
app.listen(1234, () => {
    console.log('server up');
});