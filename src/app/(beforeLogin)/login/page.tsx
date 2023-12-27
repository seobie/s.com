"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <div>main</div>;
}
