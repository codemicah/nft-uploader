import HLogo from "./HLogo";

const Logo = () => {
  return (
    <span className="inline-flex items-center">
      <span className=" text-xl font-bold tracking-wide text-gray-800 uppercase">
        M
      </span>
      <HLogo />
      <span className=" text-xl font-bold tracking-wide text-gray-800 uppercase">
        K
      </span>
    </span>
  );
};
export default Logo;
