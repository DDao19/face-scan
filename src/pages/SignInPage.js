import SignIn from "../components/SignIn/SignIn";

const SignInPage = ({ handleLoginRegister, loadUser, user }) => {
  return (
    <div>
      <SignIn
        handleLoginRegister={handleLoginRegister}
        loadUser={loadUser}
        user={user}
      />
    </div>
  );
};

export default SignInPage;
