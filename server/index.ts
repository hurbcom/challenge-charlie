import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.info([`App is listening on port ${port}!`]);
});
