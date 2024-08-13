import StoreProvider from "../store-provider";

export default function DashboardLayout({
  children,
  sidebar,
  products
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
  products: React.ReactNode;
}>) {
  return (
    <>
        <StoreProvider>
            <div>{children}</div>
            <div className="flex mx-10">
                <div className="w-1/4 flex flex-col gap-5 px-5 py-3">
                    {sidebar}
                </div>
                <div className="flex-1 py-5 px-5">
                    {products}
                </div>
            </div>
        </StoreProvider>
    </>
  );
}
