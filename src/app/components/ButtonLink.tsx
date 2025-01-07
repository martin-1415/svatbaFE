import Link from 'next/link';

export default function ButtonLink({title,url}:{title:string,url:string} ) {
    return (
        <Link href={url}>
            <div className="text-center mx-auto block border w-48 rounded-lg bg-yellow-400 p-4 m-6 shadow-inner
            hover:shadow-xl sm:w-80 sm:h-24 sm:pt-8
              ">
                {title}
            </div>
        </Link>
);
}