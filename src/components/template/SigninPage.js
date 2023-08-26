"use client";

import { useState } from "react";
import styles from "./SignupPage.module.css";
import Link from "next/link";

import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import Loader from "@/module/Loader";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ورود</h4>
      <form>
        <label>ایمیل:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>رمز عبور:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signinHandler}>
             ورود
          </button>
        )}
      </form>

      <p>
        حساب کاربری ندارد؟
        <Link href="/signup">ثبت نام</Link>
      </p>

      <Toaster />
    </div>
  );
};

export default SigninPage;
