import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return(
        <div>
            <div className="detailTitle">Svatební obřad</div>

            <div className="detailText">
                <p>Obřad proběhne 9. srpna 2025 na zámku Dub (adresa Dub 1, okres Prachatice).

                    <Image src="/dub.jpg" className="h-40 w-auto mx-auto my-6" alt="dub" width={1920} height={1280}></Image>

                Na místo se prosím dostavte alespoň s 45 minutovým předstihem. Svatba bude v barvách levandule, nicméně
                 žádný dresscode nevyžadujeme. Volba oblečení pro tuto příležitost je na vás.
                Důležité je, abyste se cítili dobře, a den si s námi maximálně užili. </p>

                <p>Zaparkovat je možné v areálu zámku, vjezd ze zadní strany, viz obrázek.</p>
                <Image src="/pudorys.png" className="h-auto w-full m-1" alt="dub" width={945} height={734}></Image>

                <p>Na nádvoří bude k dispozici malé občerstvení.Po obřadu bude následovat společné focení
                a poté se můžete odebrat na místo oslavy
                <Link href="/party" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> zde.</Link>
                </p>
            </div>
        </div>

    )
}