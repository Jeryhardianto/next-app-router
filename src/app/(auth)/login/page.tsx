"use client";

import { LoginForm } from "@/app/(auth)/login/_components/login-form";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const [callbackUrl, setCallbackUrl] = useState("/");

  useEffect(() => {
    const url = searchParams.get("callbackUrl") ?? "/";
    setCallbackUrl(url);
  }, [searchParams]);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm callbackUrl={callbackUrl} />
      </div>
    </div>
  );
}