import { motion } from "framer-motion";
export const SideBar = ({ sidebarHandler, sidebarOn }: any) => {
  return (
    <aside className="fixed  inset-0 z-50 bg-gray-900 bg-opacity-75 transition-all  transition-opacity duration-300">
      <div className="bg-white w-1/2 h-full flex flex-col pl-8 py-4">
        <button className="text-left mb-8" onClick={sidebarHandler}>
          X
        </button>
        <ul className="flex flex-col gap-4 font-bold">
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </aside>
  );
};
