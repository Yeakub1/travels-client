import Link from "next/link";

const LoginButton = () => {
  return (
    <Link
      href="/login"
      className="bg-[#09867E] hover:bg-[#09867E] btn text-white">
      Login
    </Link>
  );
};

export default LoginButton;
