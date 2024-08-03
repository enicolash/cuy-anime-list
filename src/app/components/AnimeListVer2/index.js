import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"




const AnimeListVer2 = ({ title, images, id }) => {
    return (
        <Card>
            <CardHeader>
            </CardHeader>
            <CardContent>
                <Link href={`/${id}`} className="cursor-pointer">
                <Image src={images} width={600}
                    height={400} />
                </Link>
            </CardContent>
            <CardFooter>
                <CardTitle>{title}</CardTitle>
            </CardFooter>
        </Card>

    )
}

export default AnimeListVer2;