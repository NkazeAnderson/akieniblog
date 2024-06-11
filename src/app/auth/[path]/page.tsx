import Button from "@/components/Button";
import React from "react";

function Login({ params }: { params: { path: string } }) {
  if (params.path !== "signup" && params.path !== "login") return;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[350px]">
        <h2 className="w-full text-center mb-6">
          {params.path === "login" ? "Login" : "Sign Up"}
        </h2>
        <form className="space-y-4" action="">
          {params.path === "signup" && (
            <div>
              <label className="text-xl font-bold my-2" htmlFor="email">
                Full Name
              </label>
              <br />
              <input
                className="w-full p-2 text-black rounded-lg"
                type="text"
                id="name"
                name="name"
              />
            </div>
          )}

          <div>
            <label className="text-xl font-bold my-2" htmlFor="email">
              Email
            </label>
            <br />
            <input
              className="w-full p-2 text-black rounded-lg"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label className="text-xl font-bold my-2" htmlFor="password">
              Password
            </label>
            <br />
            <input
              className="w-full p-2 text-black rounded-lg"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="w-full flex justify-center">
            <Button
              text={params.path === "login" ? "Login" : "Sign Up"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
