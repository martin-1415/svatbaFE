import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return(
        <div>

            <div className="detailTitle" >Ubytování</div>

            <div className="detailText">
                Tvrz Drahonice, na které se koná svatební hostina, poskytuje i ubytování.
                Zamluvit pokoj lze na kontahktech uvedených na
                <Link target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://penzionzamek.cz/ubytovani.html"> stránkách tvrze.</Link>
            </div>
            <Image src="/pokoj.jpg" className="h-40 w-auto mx-auto my-6" alt="pokoj" width={1333} height={1000}></Image>






        </div>

    )
}