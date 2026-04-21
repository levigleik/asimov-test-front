import logo from "@/assets/images/Logo.png";

export const Navbar = () => {
  return (
    <nav className="flex mt-15 w-full justify-between items-center">
      <img src={logo.src} alt="Logo" className="h-10" />
      <div className="flex gap-10 text-xl items-center">
        <a href="#about-us">About Us</a>
        <a href="#service">Service</a>
        <a href="#use-cases">Use Cases</a>
        <a href="pricing">Pricing</a>
        <a href="blog">Blog</a>
        <button
          className="py-5 px-8.75 border rounded-[14px] leading-7"
          type="button"
        >
          Request a quote
        </button>
      </div>
    </nav>
  );
};
