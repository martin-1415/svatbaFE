import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";

export default function Navigation() {
    return (
        <div  className="absolute top-1 right-1 z-10 ">
            <div className="flex flex-row-reverse
                              sm:hidden">
                <BurgerMenu/>
            </div>
            <div className="hidden
                              sm:flex sm:flex-row sm:justify-evenly ">
                <div>Jedno menu</div>
                <div>Dve menu</div>
                <div>Tri menu</div>
                <div>Ctyri menu</div>
            </div>
        </div>
                );
}