
import TimelineTogetherItem from "@/app/components/TimelineTogether/TimelineTogetherItem";


export default function TimelineTogether() {
    return (
        // Container with the vertical line
        <div className="space-y-8 mx-auto py-7">


            <TimelineTogetherItem date={'2018'} text={'Dvě pracovní schůzky, první rande. Naše první polečné foto a od teď už jen společně.'} imgUrl={'selfie.jpg'} />

            <TimelineTogetherItem date={'2020'} text={'Narození Laury 17.1.2020'}  imgUrl={'laura.png'}  />

            <TimelineTogetherItem date={'2022'} text={'Narození Mii 1.2.2022'}  imgUrl={'mia.png'}  />

            <TimelineTogetherItem date={'2024'} text={'Narození Ameli 12.8.2024.'}  imgUrl={'ameli.png'}  />

            <TimelineTogetherItem date={'2024'} text={'Zásnuby.'}  imgUrl={'zasnuby.png'}  />

            <TimelineTogetherItem date={'2024'} text={'A svatbou naše dobrodružství teprve začíná !'} imgUrl={'rodina.png'}   />


        </div>



    )
}
