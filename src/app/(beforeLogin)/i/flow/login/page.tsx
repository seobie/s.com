import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";
import Main from "@/app/(beforeLogin)/_component/Main";

// intercepted by src/app/%28beforeLogin%29/i/flow/login/page.tsx
// 새로고침하거나 직접 접근하면 이 페이지가 렌더링됨
export default function Login() {
  return <LoginModal />;
}
