import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import "./Navigation.css"

export default function Navigation() {
    return (
        <div  className="absolute top-1 right-1 z-10 h-header w-full">
            <div className="flex flex-row-reverse
                              sm:hidden">
                <BurgerMenu/>
            </div>

            <div className="hidden relative top-6 font-bold md:text-2xl
                              sm:flex sm:flex-row sm:justify-evenly ">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/" >Úvod</a>
                <a href="/ceremony"> Obřad</a>
                <a href="/party"> Svatební zábava</a>
                <a href="/accomodation"> Ubytování</a>
                <a href="/gifts"> Svatební dary</a>
                <a href="/gallery"> Gallerie</a>
            </div>

        </div>

                );
}