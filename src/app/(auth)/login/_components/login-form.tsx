"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

type LoginFormProps = React.ComponentPropsWithoutRef<"div"> & {
  className?: string;
  callbackUrl?: any;
};

export function LoginForm({
  callbackUrl,
  className,
  ...props
}: LoginFormProps) {
  const { push } = useRouter();
  const [IsLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const res = await signIn("credentials", {
        email: e.target.email.value,
        password: e.target.password.value,
        redirect: false,
        callbackUrl: callbackUrl,
      });
      if (!res?.error) {
        e.target.reset();
        setLoading(false);
        push(callbackUrl);
      } else {
        setLoading(false);
        if (res.status === 401) {
          setError("Email or password is incorrect");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          {error && (
            <div className="bg-red-500 text-sm p-4 rounded text-white">
              {error}
            </div>
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                </div>
                <Input id="password" type="password" placeholder="*******" />
              </div>
              <Button type="submit" disabled={IsLoading} className="w-full">
                {IsLoading ? "Loading..." : "Sign in"}
              </Button>
              <Button
                type="button"
                onClick={() =>
                  signIn("google", {
                    callbackUrl,
                    redirect: false,
                  })
                }
                variant="outline"
                className="w-full"
              >
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
