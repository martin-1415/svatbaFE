import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import "./Navigation.css"

export default function Navigation() {
    return (
        <div  className="absolute top-1 right-1 z-10 h-header w-full">
            <div className="flex flex-row-reverse
                              sm:hidden">
                <BurgerMenu/>
            </div>

            <div className="hidden relative p-2 font-bold md:text-2xl
                              sm:flex sm:flex-row sm:justify-evenly text-gray-200">
                {/*text shaddow is not supported by tailwind*/}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/" className="nav hover:text-gray-500 ">Úvod</a>
                <a href="/ceremony" className="nav hover:text-gray-500"> Obřad</a>
                <a href="/party" className="nav hover:text-gray-500"> Svatební zábava</a>
                <a href="/accomodation" className="nav hover:text-gray-500"> Ubytování</a>
                <a href="/gifts" className="nav hover:text-gray-500"> Svatební dary</a>
                <a href="/gallery" className="nav hover:text-gray-500"> Gallerie</a>
            </div>

        </div>

                );
}