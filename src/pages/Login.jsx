import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login Successful (Demo)");
    navigate("/");
  };

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"80vh"
    }}>

      <div style={{
        width:"350px",
        padding:"30px",
        border:"1px solid #ddd",
        borderRadius:"10px"
      }}>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          style={{width:"100%",padding:"10px",marginTop:"10px"}}
        />

        <input
          type="password"
          placeholder="Password"
          style={{width:"100%",padding:"10px",marginTop:"10px"}}
        />

        <button
          onClick={handleLogin}
          style={{
            width:"100%",
            padding:"10px",
            marginTop:"20px",
            background:"#ff385c",
            color:"white",
            border:"none"
          }}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;