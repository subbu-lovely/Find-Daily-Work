function Register() {
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

        <h2>Create Account</h2>

        <input placeholder="Name" style={{width:"100%",padding:"10px",marginTop:"10px"}}/>
        <input placeholder="Email" style={{width:"100%",padding:"10px",marginTop:"10px"}}/>
        <input placeholder="Password" style={{width:"100%",padding:"10px",marginTop:"10px"}}/>

        <button style={{
          width:"100%",
          padding:"10px",
          marginTop:"20px",
          background:"#ff385c",
          color:"white",
          border:"none"
        }}>
          Register
        </button>

      </div>

    </div>

  );
}

export default Register;