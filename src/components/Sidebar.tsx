import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  let title: string = "Home";

  if (location.pathname === "/contacts") {
    title = "Contacts List";
  } else if (location.pathname === "/map_chart") {
    title = "Worldwide COVID Cases";
  }

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="flex md:flex-row-reverse flex-wrap">
        {/* Main Content */}
        <main className="w-full md:w-5/6 bg-gray-100">
          <div className="flex justify-center items-center bg-sky-700 pt-10 px-6 font-bold text-xl ">
            <div>{title}</div>
          </div>
        </main>

        {/* Sidebar */}
        <div className="w-full md:w-1/6  bg-sky-700 z-10 md:bg-sky-700 p-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-sky-600">
          <aside className="md:relative mx-auto lg:float-right lg:px-6">
            <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
              <li className="ml-2 flex-1">
                <NavLink
                  to="/contacts"
                  className={`block py-1 md:py-1 pl-1 align-middle text-gray-800 no-underline border-b-2 hover:bg-sky-500 hover:rounded ${
                    location.pathname === "/contacts"
                      ? "bg-sky-300 rounded mb-3"
                      : ""
                  }`}
                >
                  <i className="fas fa-link pr-0 md:pr-3"></i>
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-black md:text-white block md:inline-block">
                    Contacts
                  </span>
                </NavLink>
              </li>

              <li className="ml-2 flex-1">
                <NavLink
                  to="/map_chart"
                  className={`block py-1 md:py-1 pl-1 align-middle text-white no-underline border-b-2 hover:bg-sky-500 hover:rounded ${
                    location.pathname === "/map_chart"
                      ? "bg-sky-300 p-1 rounded mt-3"
                      : ""
                  }`}
                >
                  <i className="fas fa-link pr-0 md:pr-3"></i>
                  <span className=" md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                    Map and Chart
                  </span>
                </NavLink>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
