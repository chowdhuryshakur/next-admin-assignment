import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import UserTable from "@/components/user-table";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-55">
        <Topbar />
        <main className="p-12">
          <UserTable />
        </main>
      </div>
    </div>
  );
}