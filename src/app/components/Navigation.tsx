import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";

export default function Navigation() {
    return (
        <div  className="absolute top-1 right-1 z-10 h-header w-full">
            <div className="flex flex-row-reverse
                              sm:hidden">
                <BurgerMenu/>
            </div>

            <div className="hidden relative top-6 font-bold
                              sm:flex sm:flex-row sm:justify-evenly ">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/">Úvod</a>
                <a href="/ceremony"> Obřad</a>
                <a href="/party"> Svatební zábava</a>
                <a href="/accomodation"> Ubytování</a>
                <a href="/gifts"> Svatební dary</a>
            </div>

        </div>

                );
}