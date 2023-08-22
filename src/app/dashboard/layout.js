import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return <DashboardSidebar>{children}</DashboardSidebar>;
};

export default DashboardLayout;
