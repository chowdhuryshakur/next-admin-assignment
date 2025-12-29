import { Home, Users, Package, BarChart3, Settings, Shield, FileText, HelpCircle, Calendar } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Users, label: "Users" },
  { icon: Package, label: "Service & Products" },
  { icon: Calendar, label: "Schedule" }
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-55 bg-[#FFFFFF] text-[#555555] text-[15px] border border-[#DDDDDD]">
      <div className="flex items-center justify-between px-4 h-20">
        <Image src="/assets/logo.png" alt="logo" width={105.68} height={34}/>
        <Image src="/assets/menu-icon.svg" alt="icon" width={24} height={24}/>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                className={`w-full h-10.5 text-nowrap flex items-center gap-2 px-4 py-3 rounded-sm transition-colors ${
                  item.active
                    ? "bg-[#5D06E9] text-white"
                    : "text-[#555555] hover:bg-[#F5F5F5]"
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}