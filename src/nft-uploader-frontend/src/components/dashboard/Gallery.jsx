import GalleryCard from "./GalleryCard";

const mintedNfts = [
  {
    type: "Art",
    image: "/avif/photo-1646753522408-077ef9839300.avif",
    name: "Artwork 1",
    listedPrice: "$149",
    currentPrice: "$199",
  },
  {
    type: "Art 2",
    image: "/avif/photo-1651950519238-15835722f8bb.avif",
    name: "Artwork 1",
    listedPrice: "$149",
    currentPrice: "$199",
  },

  {
    type: "Art3",
    image: "/avif/photo-1651950537598-373e4358d320.avif",
    name: "Artwork 3",
    listedPrice: "$149",
    currentPrice: "$199",
  },

  {
    type: "Art4",
    image: "/avif/photo-1651950540805-b7c71869e689.avif",
    name: "Artwork 4",
    listedPrice: "$149",
    currentPrice: "$199",
  },
  {
    type: "Art5",
    image: "/avif/photo-1649261191624-ca9f79ca3fc6.avif",
    name: "Artwork 5",
    listedPrice: "$149",
    currentPrice: "$199",
  },
  {
    type: "Art6",
    image: "/avif/photo-1649261191606-cb2496e97eee.avif",
    name: "Artwork 6",
    listedPrice: "$149",
    currentPrice: "$199",
  },
];
const Gallery = () => {
  return (
    <div className=" p-2">
      <div className="text-center p-10">
        <h1 className="text-3xl">Minted NFT</h1>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {mintedNfts.map((nft) => (
          <GalleryCard
            type={nft.type}
            name={nft.name}
            image={nft.image}
            listedPrice={nft.listedPrice}
            currentPrice={nft.currentPrice}
          />
        ))}
      </section>
    </div>
  );
};

export default Gallery;
