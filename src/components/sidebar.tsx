import { SIDEBAR_MENU } from "../enums";

const Sidebar = () => {
  return (
    <div className="bg-white fixed h-full left-0 shadow-lg p-2 pt-20">
      <div className="flex flex-col items-start">
        {
          SIDEBAR_MENU.map(el => {
            return (
              <a href={el.url} className='group'>
                <div className="h-[52px] w-[52px] rounded-md flex items-center justify-center group-hover:bg-[#ebedf0] duration-150 ease-in-out transition-all">
                  {el.component}
                </div>
              </a>
            );
          })
        }
      </div>
    </div>
  );
}

export default Sidebar;