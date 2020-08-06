import * as express from "express";
import * as cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.get('/usr/:id?', (req, res) => {
    console.log(req.route);
    res.end();
});
app.listen(1234, () => {
    console.log('server up');
});