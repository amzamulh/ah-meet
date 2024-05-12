import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import AhIcon from "../../components/icons";
import AhInput from "../../components/inputs";
import AhButton from "../../components/buttons";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-[#161925] items-center">
      <div className="w-[30.5rem] h-auto flex justify-center bg-[#1C1F2E] drop-shadow-[0_32px_52px_rgba(0,0,0,0.16)] pt-[3rem] pb-[2rem]  px-[2rem] text-white border-2 border-[#0E78F9] rounded-lg">
        <div className="w-full">
          <div className=" text-center uppercase">
            <span className="text-lg tracking-wider">
              Welcom to <strong className="text-[#0E78F9]">ah meet</strong>
            </span>
          </div>
          <div className="my-8 flex items-center justify-center gap-4">
            <AhIcon
              cornerType="rounded"
              type="outline"
              className="cursor-pointer"
            >
              <GitHubIcon fontSize="medium" />
            </AhIcon>
            <AhIcon
              cornerType="rounded"
              type="outline"
              className="cursor-pointer"
            >
              <GoogleIcon fontSize="medium" color="inherit" />
            </AhIcon>
          </div>
          <form action="">
            <AhInput
              type={"email"}
              label={"Email"}
              name={"email"}
              placeholder={"Enter Your Email"}
            />
            <AhInput
              type={"password"}
              label={"Password"}
              name={"pass"}
              placeholder={"Enter Your Password"}
            />
            <AhButton alignment="full" textType='uppercase'>Login</AhButton>
          </form>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm"><a className="text-[#0E78F9] underline" href="/forgot-password">Forget Password?</a></span>
            <span className="text-sm">No Account?<a className="text-[#0E78F9] ps-2" href="/register">Register</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
