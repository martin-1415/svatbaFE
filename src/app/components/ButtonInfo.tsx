import Link from "next/link";

export default function ButtonInfo({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <Link href={url}  >
      <button className=" text-white text-xl shadow-lg border-violet-900 bg-violet-900  rounded-full px-4 py-2">
        {title}
      </button>
    </Link>
  );
}
