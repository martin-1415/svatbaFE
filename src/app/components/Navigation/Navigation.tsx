import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import "./Navigation.css"

export default function Navigation() {
    return (
        <div  className="absolute top-1 right-1 z-10 h-header w-full">
            <div className="flex flex-row-reverse
                              sm:hidden">
                <BurgerMenu/>
            </div>

            <div className="hidden relative p-2  md:text-2xl
                              sm:flex sm:flex-row sm:justify-evenly text-violet-900">
                {/*text shaddow is not supported by tailwind*/}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/" className="hover:text-white ">Úvod</a>
                    <div  className="segment"/>
                <a href="/ceremony" className="hover:text-white"> Obřad</a>
                    <div  className="segment"/>
                <a href="/party" className="hover:text-white"> Svatební zábava</a>
                    <div  className="segment"/>
                <a href="/accomodation" className="hover:text-white"> Ubytování</a>
                    <div  className="segment"/>
                <a href="/gifts" className=" hover:text-white"> Svatební dary</a>
                    <div  className="segment"/>
                <a href="/gallery" className="hover:text-white"> Gallerie</a>
            </div>

        </div>

                );
}