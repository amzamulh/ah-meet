import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import Dropdown from "../dropdown";
import AhIcon from "../icons";
import GitHub from "@mui/icons-material/GitHub";

const DropdownItem = () => {
  return (
    <>
      <Menu.Item>
        <Link
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 ease-in duration-200"
          to={"/"}
        >
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 ease-in duration-200"
          to={"/"}
        >
          Support
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 ease-in duration-200"
          to={"/"}
        >
          Logout
        </Link>
      </Menu.Item>
    </>
  );
};

const Header = () => {
  return (
    <header className="w-full bg-[#1C1F2E] px-4 py-3 flex justify-end items-center">
        <Dropdown buttonLabel={<AhIcon cornerType="roundedFull" type="outline"><GitHub fontSize="large"/></AhIcon>}>
        <DropdownItem />
      </Dropdown>
    </header>
  );
};

export default Header;
