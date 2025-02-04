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
      <button className=" text-white text-xl w-full shadow-lg border-amber-600 bg-amber-600 hover:bg-amber-800 rounded-xl px-4 py-2 max-w-46">
        {title}
      </button>
    </Link>
  );
}
