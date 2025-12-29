import { Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex items-center bg-white border border-[#DDDDDD] px-6 h-20">
      <div className="flex items-center justify-between w-full">
        <div><p className="text-[20px] font-bold">Service</p></div>
        <div className="flex items-center gap-4">
          <button className="relative p-2">
            <Bell size={20} className="text-gray-600" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
              3
            </Badge>
          </button>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                FH
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Fahim Ahmed</p>
              <p className="text-sm text-gray-500">Administrator</p>
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}