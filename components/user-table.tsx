import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, Edit, Eye, Plus, Search, Trash2, UserPlus } from "lucide-react";
import { Input } from "./ui/input";

const activity = [
  { NAME: "Manage/Anime Art", ORGANIZER: "Alex Johnson", PRICING: "From $12/hour", status: "active" },
  { NAME: "Scorer", ORGANIZER: "Sarah Miller", PRICING: "From $12/hour", status: "active" },
  { NAME: "Basketball", ORGANIZER: "Robert Chen", PRICING: "From $12/hour", status: "pending" },
  { NAME: "Cricket", ORGANIZER: "Maria Garcia", PRICING: "From $12/hour", status: "active" },
  { NAME: "Robotics & AI", ORGANIZER: "David Wilson", PRICING: "From $12/hour", status: "active" },  
  { NAME: "Manage/Anime Art", ORGANIZER: "Alex Johnson", PRICING: "From $12/hour", status: "active" },
  { NAME: "Scorer", ORGANIZER: "Sarah Miller", PRICING: "From $12/hour", status: "active" },
  { NAME: "Basketball", ORGANIZER: "Robert Chen", PRICING: "From $12/hour", status: "pending" },
  { NAME: "Cricket", ORGANIZER: "Maria Garcia", PRICING: "From $12/hour", status: "active" },
  { NAME: "Robotics & AI", ORGANIZER: "David Wilson", PRICING: "From $12/hour", status: "active" },
];

export default function UserTable() {
  return (
    <div className="bg-white rounded-lg border border-[#DDDDDD]">
      <div className="p-6 flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search by activity name"
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>
       <div className="flex items-center gap-2">
        <Button className="w-28.75 h-9 bg-[#5D06E9] py-2 px-4 hover:from-purple-700 hover:to-blue-700 text-[15px] text-white rounded-sm flex items-center gap-2">
            <Download size={15}/>
            Export
          </Button>
          <Button className="w-21.75 h-9 bg-[#5D06E9] py-2 px-4 hover:from-purple-700 hover:to-blue-700 text-[15px] text-white rounded-sm flex items-center gap-2">
            <Plus size={15}/>
            ADD
          </Button>
       </div>
      </div>
      <Table className="border-0">
        <TableHeader>
          <TableRow className="h-12.5 px-6 flex bg-[#F5F5F5] border-b border-[#DDDDDD] gap-4">
            <TableHead className="h-12.5 flex items-center p-0 w-[260.33px] text-[#070012] font-bold">NAME</TableHead>
            <TableHead className="h-12.5 flex items-center p-0 w-[260.33px] text-[#070012] font-bold">ORGANIZER</TableHead>
            <TableHead className="h-12.5 flex items-center p-0 w-43.25 text-[#070012] font-bold">PRICING</TableHead>
            <TableHead className="h-12.5 flex items-center p-0 w-[260.33px] text-[#070012] font-bold">TYPE</TableHead>
            <TableHead className="h-12.5 flex items-center p-0 w-14.5 text-right text-[#070012] font-bold">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activity.map((act, index) => (
            <TableRow key={index} className={`h-12.5 px-6 flex ${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F5F5F5]"} border-b border-[#DDDDDD] gap-4`}>
              <TableCell className="h-12.5 flex items-center p-0 text-[#555555] w-[260.33px]">{act.NAME}</TableCell>
              <TableCell className="h-12.5 flex items-center p-0 text-[#555555] w-[260.33px]">{act.ORGANIZER}</TableCell>
              <TableCell className="h-12.5 flex items-center p-0 text-[#555555] w-43.25">{act.PRICING}</TableCell>
              <TableCell className="h-12.5 flex items-center p-0 text-[#555555] w-[260.33px]">
                <Badge
                  variant={act.status === "active" ? "default" : "secondary"}
                  className={act.status === "active" ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"}
                >
                  {act.status === "active" ? "Active" : "Pending"}
                </Badge>
              </TableCell>
              <TableCell className="h-12.5 flex items-center p-0 text-[#555555] w-14.5 text-right gap-2">
                <Eye size={14} />
                <Trash2 size={14} className=" text-red-600 border-red-200 hover:bg-red-50" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}