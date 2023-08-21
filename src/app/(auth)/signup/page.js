import SignupPage from "@/template/SignupPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

const Signup = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return <SignupPage />;
};

export default Signup;
