import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavSideBar from "@/components/NavSideBar";
import TopBar from "@/components/TopBar";
import UserContextProvider from "@/components/UserContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akieni Blog",
  description: "Best blogging application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <div className="w-screen h-screen bg-slate-950 flex">
            <div className="w-[20%] hidden lg:block p-6">
              <NavSideBar />
            </div>
            <main className="flex-grow h-full bg-slate-900 rounded-3xl relative">
              <div className=" mb-4 bg-slate-900 rounded-2xl absolute w-full z-50 p-[10px] top-[20px] h-[80px] flex items-center">
                <div className="p-2 bg-slate-950 rounded-2xl w-full">
                  <TopBar />
                </div>
              </div>
              <div className="main-content overflow-hidden mt-[120px] px-4">
                {children}
              </div>
            </main>
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
