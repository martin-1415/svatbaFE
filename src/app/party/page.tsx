import Image from "next/image";

export default function Page() {
    return(
        <div>
            <div className="detailTitle" >Svatební Hostina</div>

            <div className="detailText">
                <p>
                    Hostina proběhne v areálu Drahonické tvrze. Vjezd a parkování viz foto.
                </p>
                <Image src="/drahonice.png" className="h-auto w-full m-1" alt="tvrz" width={832} height={431}></Image>
                <p>
                    Občerstvení bude formou buffetu a k ubytování je možné přikoupit snídani.
                </p>

                <p>
                    Odpolední program bude aktualizován zde měsíc před svatbou. K dispozici bude sál a zahrada. Kromě našich
                    tří dětí jsou vítané i vaše děti.  Převléknout se můžete po focení během hostiny.
                </p>

            </div>
            <Image src="/tvrz.jpg" className="h-40 w-auto mx-auto my-6" alt="tvrz" width={3872} height={2592}></Image>

        </div>

    )
}