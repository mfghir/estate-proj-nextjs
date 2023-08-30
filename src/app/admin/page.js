import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import { redirect } from "next/navigation";
import User from "@/models/User";
import DashboardSidebar from "@/layout/DashboardSidebar";

const Admin = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  return <DashboardSidebar role={user.role} email={user.email} >Admin</DashboardSidebar>;
};

export default Admin;
