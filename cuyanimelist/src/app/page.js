import Image from "next/image";
import AnimeList from "./components/AnimeList";
import AnimeListVer2 from "./components/AnimeListVer2";

const Home = async () => {
  const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}top/anime`)
  const anime = await respone.json();
  return (
    <div>
      <h1>Paling Populer</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 p-4">
        {anime.data.map((data,index) => {
          return (
            <div key={data.mal_id} >
              <AnimeListVer2 title={data.title} images={data.images.jpg.image_url} id={data.mal_id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
