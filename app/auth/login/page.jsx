"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { login } from "@/app/actions/auth";
import { SearchContext } from "@/context/SearchContext";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const { login1 } = useContext(SearchContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await login(formData);
      const email = formData.get("email");
      const password = formData.get("password");
      await login1(email, password);

      if (response.success) {
        router.push("/");
      } else {
        setError(response.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError({ general: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center pt-[2%]">
      <form
        onSubmit={handleSubmit}
        className="h-[70%] w-[30%] flex flex-col items-center justify-center border-[2px] border-black rounded-md pr-[3%] poppins-semibold"
      >
        <p className="text-[30px] ml-16 mb-6">Login</p>
        <div className="w-full ml-24 mb-[7%] flex flex-col items-start justify-center h-[7%]">
          <label
            htmlFor="email"
            className="mr-10 flex justify-center items-center"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="border border-black outline-none rounded-md w-[90%] pl-2"
          />
        </div>

        <div className="w-full ml-24 mb-[5%] flex flex-col items-start justify-center h-[7%]">
          <label
            htmlFor="password"
            className="mr-2 flex justify-center items-center"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="border border-black outline-none rounded-md w-[90%] pl-2"
          />
        </div>
        {error && (
          <p className="text-red-500">{error.general || error.password}</p>
        )}
        <button
          type="submit"
          className="w-[75%] mb-[19px] bg-[#03CAA6] text-[16px] tracking-[2.2px] text-white pt-[18px] pr-[14px] pb-[16px] pl-[14px] cursor-pointer rounded-[4px] ml-12 mt-3"
        >
          Submit
        </button>

        <div className="ml-8 mt-6">
          <p>
            Don't have an account?{" "}
            <a href="/auth/signup" className="underline">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
