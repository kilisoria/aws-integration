
const ping = async (req, res) => {
    try {
        res.send({
            success: true,
            message: "Ping successfully!"
        });
    } catch (error) {
         res.send({
            success: false,
            message: "Ping failed."
        });
    }
}

module.exports = {
    ping,
}
