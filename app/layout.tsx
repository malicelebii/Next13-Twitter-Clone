// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter, Siemreap } from "next/font/google";
import { Toaster } from "react-hot-toast";
import {} from "react";
import LeftSidebar from "@/components/left-sidebar";
import Search from "@/components/search";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Twitter Clone";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.variable}>
        <Toaster />
        <div className="flex justify-around mt-5 mx-auto w-2/3">
          {/* <Suspense fallback="Loading...">
          {/* <AuthStatus /> 
        </Suspense> */}
        {session &&<div className="w-1/5 ">
            <LeftSidebar />
          </div>}
          
          <div className="w-3/5 px-12">{children}</div>
          {session &&<div className="w-1/5">
            <Search />
          </div> }
          
        </div>
      </body>
    </html>
  );
}
