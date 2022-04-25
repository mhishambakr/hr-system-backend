const { login } = require("../services/User.service")



exports.login = async (req, res) => {
    try {
        console.log(req.body);
        let { username, password } = req.body;
        let loginData = await login({ username, password });

        res.status(200).json({
            message: 'Employee Created Successfully',
            data: {
                loginData
            }
        })
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || 'Server Error: Something went wrong'
        })
    }
}