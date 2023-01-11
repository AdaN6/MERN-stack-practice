import {useState} from "react"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <lable>Email:</lable>
            <input 
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}>
            </input>

            <lable>Password:</lable>
            <input 
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}>
            </input>

            <button>Sign up</button>
        </form>
    )
}

export default Signup