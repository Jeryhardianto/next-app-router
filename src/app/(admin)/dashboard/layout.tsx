import React from "react";
type DashboardLayoutProps = Readonly<{
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}>;

export default function DashboardLayout({
  children,
  products,
  analytics,
  payments,
}: DashboardLayoutProps) {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-4 gap-2 flex justify-center items-center ">
        {products}
        {analytics}
      </div>
      <div className="mt-4">{payments}</div>
    </div>
  );
}
