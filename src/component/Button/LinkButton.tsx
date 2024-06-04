import Link from "next/link";

const LinkButton = ({ title, link }: any) => {
  return (
    <Link
      href={link}
      className="bg-[#09867E] hover:bg-[#09867E] font-semibold text-white btn w-1/2">
      {title}
    </Link>
  );
};

export default LinkButton;
