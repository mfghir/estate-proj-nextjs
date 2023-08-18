import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await connectDB();

    const { email, password } = await req.json();
    console.log({ email, password });

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتب وارد کنید" },
        {
          status: 422,
        }
      );
    }

    const existingUser = await User.findOne({ email });
    console.log(existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        {
          status: 422,
        }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);

    return NextResponse.json({ message: "حساب کاربری ایجاد شد" });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      {
        status: 500,
      }
    );
  }
}
