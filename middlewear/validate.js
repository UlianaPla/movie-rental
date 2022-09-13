
exports.checker = async function (req, res) {
    const id = req.params.id;
    const parsed = parseInt(id);
    const parsedString = parsed.toString();

    if (isNaN(parsed) || parsedString.length != id.length) {
        res.status(400).send(`Invalid input ${id}`);
        return;
    }
    next();
}
