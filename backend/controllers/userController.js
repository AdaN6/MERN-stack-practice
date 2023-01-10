// login user

const loginUser = async (req, res) => {
    res.json({msg:"login User"})
}

//signup user

const signUpUser = async (req, res) => {
    res.json({msg: 'signup user'})
}

module.exports = {loginUser, signUpUser}