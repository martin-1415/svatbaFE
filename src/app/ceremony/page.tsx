import Link from "next/link";

export default function Page() {
    return(
        <div>
            <div className="detailTitle">Svatební obřad</div>

            <div className="detailText">
                Obřad proběhne 9. srpna 2025 na zámku Dub (adresa Dub 1, okres Prachatice).
                Na místo se prosím dostavte alespoň s 45 minutovým předstihem. Svatba bude v barvách levandule, nicméně
                 žádný dresscode nevyžadujeme. Volba oblečení pro tuto příležitost je na vás.
                Důležité je, abyste se cítili dobře, a den si s námi maximálně užili. Převléknout se můžete po focení během hostiny.
                Zaparkoval je možné v areálu zámku, vjezd ze zadní strany, viz obrázek.


                Na nádvoří bude k dispozici malé občerstvení.

                Po obřadu bude následovat focení, posečkejte alespoň na jednu společnou fotku a poté se můžete odebrat na místo
                oslavy <Link href="/party">zde.</Link>
            </div>
        </div>

    )
}