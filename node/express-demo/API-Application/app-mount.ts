import * as express from "express";

const app = express();
const admin = express();
app.locals.title = "parent Title";

admin.on('mount', (parent) => {
    console.log("sub Mounted");
    console.log(parent.locals.title);
});

app.use('/admin', admin);

