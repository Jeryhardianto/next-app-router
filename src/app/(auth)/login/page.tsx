import { LoginForm } from "@/app/(auth)/login/_components/login-form"

export default function LoginPage({ searchParams }: any) {
  const searchParamsUrl = searchParams.callbackUrl ? searchParams.callbackUrl : "/";
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm searchParams={searchParamsUrl} />
      </div>
    </div>
  )
}