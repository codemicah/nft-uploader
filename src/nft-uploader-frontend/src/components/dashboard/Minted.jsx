import MintCard from "./MintCard";

const Minted = () => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      <MintCard
        backgroundColor="bg-orange-500"
        category="Indoor"
        title="Peace Lily"
        price="$36.00"
        imageSrc="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
      />
      <MintCard
        backgroundColor="bg-teal-500"
        category="Outdoor"
        title="Monstera"
        price="$45.00"
        imageSrc="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
      />
      <MintCard
        backgroundColor="bg-purple-500"
        category="Outdoor"
        title="Oak Tree"
        price="$68.50"
        imageSrc="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
      />
    </div>
  );
};
export default Minted;
