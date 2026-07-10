
const healthCheck = (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Server is running fine'
    })
}

export default healthCheck;