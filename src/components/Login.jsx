import {React ,useState ,useContext} from 'react'
import UserContext from '../context/UserContext'


export default function Login() {

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName ,userPassword})
    console.log(userName ,userPassword);
  }

  return (
  <div className="flex flex-col items-center justify-center  bg-gray-100">
  <h1 className="text-3xl font-bold mb-6">Login</h1>
  <input
    type="text"
    placeholder="Enter your username"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
    className="mb-4 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
  />
  <input
    type="password"
    placeholder="Enter your password"
    value={userPassword}
    onChange={(e) => setUserPassword(e.target.value)}
    className="mb-4 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
  />
  <button
    onClick={handleSubmit}
    className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
  >
    Submit
  </button>
</div>

  )
}
