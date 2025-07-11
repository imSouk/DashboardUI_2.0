import { useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
  return (
    <div className="flex items-center h-screen w-screen justify-center bg-background">
      <div className="flex flex-col w-[500px] h-[300px] p-6 rounded-md shadow-lg bg-card text-card-foreground border border-border text-center">
        <h2 className="text-xl font-semibold mb-3 text-primary">Se torne nosso cliente!</h2>
        
        <div className="grid justify-center mb-2 mt-2">
          <input type="text" placeholder="Name" className="w-[300px] p-2 border border-input bg-background rounded-md text-foreground mb-2" />
          <input type="text" placeholder="Email" className="w-[300px] p-2 border border-input bg-background rounded-md text-foreground mb-2" />
          <input type="password" placeholder="Password" className="w-[300px] p-2 border border-input bg-background rounded-md text-foreground mb-2" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <button className="w-[100px] px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={()=> navigate("/Dashboard")}
          >
            Register   
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;