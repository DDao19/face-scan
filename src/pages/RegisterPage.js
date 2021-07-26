import Register from "../components/Register/Register";

const RegisterPage = ({ handleLoginRegister, loadUser }) => {
  return (
    <div>
      <Register handleLoginRegister={handleLoginRegister} loadUser={loadUser} />
    </div>
  );
};

export default RegisterPage;
