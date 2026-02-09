import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center bg-zinc-200 w-screen h-screen">
      <form className="bg-white w-96 h-112.5 rounded-lg p-6 shadow-md flex flex-col items-center">
        <p className="text-center mt-4 text-3xl text-black font-bold">Welcome Back!</p>
        <p className="text-center text-zinc-700 mt-2">Login to E-commerce Shop</p>

        <div className="flex flex-col items-center mt-6 w-full">
          <input
            placeholder="User Name"
            className="rounded bg-gray-200 w-72 h-10 text-black px-3 border-2 border-zinc-500 focus:outline-none focus:border-blue-700 mt-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded bg-gray-200 w-72 h-10 text-black px-3 border-2 border-zinc-500 focus:outline-none focus:border-blue-700 mt-4"
          />
          <Link href="/mainContent" className="w-full flex justify-center">
            <button
              type="button"
              className="bg-blue-700 w-72 mt-6 h-10 rounded text-white hover:bg-blue-800 transition-colors"
            >
              Login
            </button>
          </Link>
          <p className="text-zinc-700 mt-6 text-sm">
            Don't have an account?{" "}
            <span className="text-blue-800 cursor-pointer hover:underline">Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
}
