"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const router = useRouter();

  return (
    <>
      <div className="  flex items-center   justify-center h-[100vh] w-[100%] bg-[#f3f3f4]">
        <div
          className="w-[500px] max-w-[500px] bg-[#fff] border-[1px] border-slate-300 p-[30px] 
         flex items-center flex-col   justify-center gap-[10px]"
        >
          <div className="logoimage">
            <Image
              src="/logo.webp"
              width={200}
              height={50}
              alt=""
              className="h-[50px] object-contain"
            />
          </div>
          <p className="text-[#bbb] text-[15px] align-center">
            Log in see EduxLL in action
          </p>
          <div className="flex items-center flex-col   justify-center gap-[10px]">
            <div className="inputbox flex">
              <div className="icon flex items-center  w-[40px]  justify-center border border-slate-400/60 border-r-[0px] ">
                <Image
                  src="/user-line2.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="h-[20px]  object-contain leading-[0px]"
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className=" text-[14px] text-[#686868] form-input w-full rounded-[0px]  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                />
              </div>
            </div>
            <div className="inputbox flex">
              <div className="icon flex items-center  w-[40px]  justify-center border border-slate-400/60 border-r-[0px] ">
                <Image
                  src="/lock-password-line.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="h-[20px]  object-contain leading-[0px]"
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  name="password"
                  placeholder="*********"
                  className=" text-[14px] text-[#686868] form-input w-full rounded-[0px]  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                />
              </div>
            </div>
            <button
              onClick={() => router.push("/admin/newdashboard")}
              className="mt-[20px] w-min text-[15px] flex items-center rounded-md gap-[10px] justify-center	 px-[20px] py-[10px] text-[#fff] transition-all hover:transition-all bg-red-500 hover:bg-red-700"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogIn;
