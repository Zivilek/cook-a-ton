export default function(e, req, res, next) {
    console.error(`An error has occured: ${e.message}`);
    res.status(500).send(`Request ${req.url} could not be served.`);
};