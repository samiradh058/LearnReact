import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <div className="flex flex-col row-span-full bg-stone-50 p-4 border-r-2 border-stone-200 gap-[3.2rem]">
      <Logo />
      <MainNav />
    </div>
  );
}

export default Sidebar;
