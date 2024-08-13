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
        <div>
            {sidebar}
            {products}
        </div>
    </>
  );
}
