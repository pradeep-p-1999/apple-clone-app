import Link from "next/link";

interface LinkButtonProps {
  linkAddress: string;
  linkPlaceholder: string;
}

export default function LinkButton({ linkAddress, linkPlaceholder }: LinkButtonProps) {
  return (
    <Link href={linkAddress}>
      <span className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 cursor-pointer inline-block">
        {linkPlaceholder}
      </span>
    </Link>
  );
}
