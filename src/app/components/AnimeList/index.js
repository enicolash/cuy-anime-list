import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const AnimeList = ({title,images}) => {
    return (
        <div className="">
            <Image
                src={images}
                alt="Placeholder Image"
                width={600}
                height={400}
            />
            <h3 className="font-bold text-xl">{title}</h3>
        </div>
    )
}

export default AnimeList