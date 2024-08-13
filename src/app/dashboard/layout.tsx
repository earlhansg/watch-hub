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
        <div>{children}</div>
        <div className="flex">
            <div className="w-1/5 flex flex-col gap-5 px-5 py-3">
                {sidebar}
            </div>
            <div className="bg-red-300 flex-1">
                {products}
            </div>
        </div>
    </>
  );
}
