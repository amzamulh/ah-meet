import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import AhIcon from "../../components/icons";
import AhInput from "../../components/inputs";
import AhButton from "../../components/buttons";

const Register=()=>{

  return (
    <div className="w-full h-screen flex justify-center bg-[#161925] items-center">
      <div className="w-[30.5rem] h-auto flex justify-center bg-[#1C1F2E] drop-shadow-[0_32px_52px_rgba(0,0,0,0.16)] pt-[3rem] py-[2rem] px-[2rem] text-white border-2 border-[#0E78F9] rounded-lg">
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
          <form >
          <AhInput
              type={"text"}
              label={"First Name"}
              name={"firstName"}
              placeholder={"Enter Your First Name"}
            />
            <AhInput
              type={"text"}
              label={"Last Name"}
              name={"lastName"}
              placeholder={"Enter Your Last Name"}
            />
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
            <AhButton alignment="full" textType="uppercase">Register</AhButton>
          </form>
          <div className="flex justify-center items-center mt-4">
            <span className="text-sm">Already have a Account?<a className="text-[#0E78F9] ps-2" href="/login">Login</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Register