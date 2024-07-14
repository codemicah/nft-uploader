import GalleryCard from "./GalleryCard";

const mintedNfts = [
  {
    type: "Art",
    image:
      "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Artwork 1",
    listedPrice: "$149",
    currentPrice: "$199",
  },
  {
    type: "Art 2",
    image:
      "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Artwork 1",
    listedPrice: "$149",
    currentPrice: "$199",
  },

  {
    type: "Art3",
    image:
      "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Artwork 3",
    listedPrice: "$149",
    currentPrice: "$199",
  },

  {
    type: "Art4",
    image:
      "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Artwork 4",
    listedPrice: "$149",
    currentPrice: "$199",
  },
  {
    type: "Art5",
    image:
      "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Artwork 5",
    listedPrice: "$149",
    currentPrice: "$199",
  },
  {
    type: "Art6",
    image:
      "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
