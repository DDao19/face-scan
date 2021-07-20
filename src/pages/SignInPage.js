import SignIn from "../components/SignIn/SignIn";

const SignInPage = ({ handleOnClick }) => {
  return (
    <div>
      <SignIn handleOnClick={handleOnClick} />
    </div>
  );
};

export default SignInPage;
