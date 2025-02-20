import Image from "next/image";

export default function Page() {
    return(
        <div>
            <div className="detailTitle">Galerie</div>

            <div className="detailText">
                <p>
                    Krom fotky pra-pradědy, bychom sem po svatbě nahráli i výběr fotografií ze svatby naší.
                </p>
                <p>
                    A uděláme formulář pro nahrání vašich fotografií a videí.
                </p>

                <Image className="h-64 w-auto mx-auto my-6" src="/gallery/wed.jpg" alt="kalous" width={2092} height={3436}></Image>
            </div>
        </div>

    )
}