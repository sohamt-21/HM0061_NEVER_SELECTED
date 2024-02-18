import './CSS/styles.css';

export default function Login({onSubmit=()=>{} }) {
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const values = Object.fromEntries(new FormData(e.target));
  
      onSubmit(values.username);
    };
  
    return (
      <form className="Login" onSubmit={handleSubmit}>
        <h1>
          Welcome to
          <strong>Community HUB</strong>
        </h1>
        <label>login</label>
        <input type="text" name="username" required />
        <label>password</label>
        <input type="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    );
  }