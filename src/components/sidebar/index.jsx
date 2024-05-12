import { GitHub } from "@mui/icons-material";
import AhIcon from "../icons";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    icon: (
      <AhIcon cornerType="rounded" size="small">
        <GitHub fontSize="medium" />
      </AhIcon>
    ),
    url: "/",
  },
  {
    label: "Upcoming",
    icon: (
      <AhIcon cornerType="rounded" size="small">
        <GitHub fontSize="medium" />
      </AhIcon>
    ),
    url: "/upcoming",
  },
  {
    label: "Previous",
    icon: (
      <AhIcon cornerType="rounded" size="small">
        <GitHub fontSize="medium" />
      </AhIcon>
    ),
    url: "/previous",
  },
  {
    label: "Setting",
    icon: (
      <AhIcon cornerType="rounded" size="small">
        <GitHub fontSize="medium" />
      </AhIcon>
    ),
    url: "/setting",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-[4rem] md:w-[16rem] h-screen  text-white bg-[#1C1F2E]  ease-in duration-200  overflow-y-auto">
      <div className="w-full h-[4.5rem] bg-[#1C1F2E] px-2 py-3 flex justify-between items-center">
        <AhIcon cornerType="roundedFull" type="outline">
          <GitHub fontSize="large" />
        </AhIcon>
      </div>
      <nav className="p-2">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="list-none my-2 p-2 hover:bg-slate-400 rounded-md ease-in duration-300"
          >
            <Link
              className="flex justify-start items-center gap-2 group/text relative  "
              to={item.url}
            >
              {item.icon}
              <span className="hidden group-hover/text:block  group-hover/text:absolute  group-hover/text:top-0  group-hover/text:left-[3.25rem]  group-hover/text:rounded-tl-md  group-hover/text:rounded-tr-md  group-hover/text:rounded-br-md  group-hover/text:py-1  group-hover/text:px-3  group-hover/text:bg-black  group-hover/text:text-white group-hover/text:z-10 group-hover/text:shadow-md  md:group-hover/text:static  md:group-hover/text:top-0  mdgroup-hover/text:left-0  md:group-hover/text:rounded-o  md:group-hover/text:py-0  md:group-hover/text:px-0  md:group-hover/text:bg-transparent  md:group-hover/text:text-white md:group-hover/text:z-0 md:group-hover/text:shadow-none   md:block ease-in duration-300">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
