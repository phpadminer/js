import * as express from "express";
import * as path from "path";

const app = express();

app.use('/public', express.static(path.resolve(__dirname, '../public'), {
    immutable: false,
    maxAge: 0,

}));
app.use((res, req, next) => {
    req.send('我是下一个中间件');
});


app.listen(1234, () => {
    console.log("server up");
});