import { Metadata } from "next";
// provider
import StoreProvider from "../store-provider";
// component
import LoadMore from "@/components/load-more";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
  sidebar,
  products,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
  products: React.ReactNode;
}>) {
  return (
    <>
      <StoreProvider>
        <div>{children}</div>
        <div className="flex mx-0 xl:mx-10">
          <div className="w-1/4 hidden md:flex flex-col gap-5 lg:px-5 px-2 py-3">
            {sidebar}
          </div>
          <div className="flex-1 py-5 xl:px-5 px-1">
            {products}
            <LoadMore />
          </div>
        </div>
      </StoreProvider>
    </>
  );
}
