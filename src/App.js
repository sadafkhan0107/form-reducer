import './App.css';
import { useForm } from './context/formContext/formContext'

function App() {
  const{name,email,password,number,dispatch} = useForm();
  const handleNameChange=(e)=> {
    dispatch({
      type: "name",
      payload: e.target.value
  })
  }
  const handleEmailChange=(e)=> {
    dispatch({
      type: "email",
      payload: e.target.value
    })
  }
  const handlePasswordChange=(e)=> {
    dispatch({
      type: "password",
      payload: e.target.value
    })
  }
  const handleNumberChange=(e)=> {
    dispatch({
      type: "number",
      payload: e.target.value
    })
  }
  return (
    <div className="form">
      <input value={name} required placeholder='Enter Name' onChange={handleNameChange} />
      <input value={email} required placeholder='Enter Email' onChange={handleEmailChange} />
      <input value={password} required placeholder='Enter Password' onChange={handlePasswordChange} />
      <input value={number} required placeholder='Enter Number'onChange={handleNumberChange} />
      <button>Submit</button>
    </div>
  );
}

export default App;
