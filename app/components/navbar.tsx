import { Link, NavLink } from "@remix-run/react";

interface StyledLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const StyledNavLink: React.FC<StyledLinkProps> = ({
  to,
  children,
  className,
}: StyledLinkProps) => {
  return (
    <NavLink to={to} className={`${className} rounded-3xl whitespace-nowrap`}>
      {children}
    </NavLink>
  );
};

export default function Navbar() {
  return (
    <div className="flex w-screen flex-row items-center">
      <div className="mx-10">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
        </Link>
      </div>
      <div className="hidden lg:flex flex-row grow mr-10 items-center gap-12 justify-end text-sm xl:text-lg">
        <StyledNavLink to="/about" className="font-bold hover:text-gray-500">
          About Us
        </StyledNavLink>
        <StyledNavLink
          to="/toronto-events"
          className="font-bold hover:text-gray-500"
        >
          Toronto Events
        </StyledNavLink>
        <StyledNavLink to="/blogs" className="font-bold hover:text-gray-500">
          Blogs
        </StyledNavLink>
        <StyledNavLink to="/contact" className="font-bold hover:text-gray-500">
          Contact
        </StyledNavLink>
        <StyledNavLink to="/sign-in" className="font-bold hover:text-gray-500">
          Sign In
        </StyledNavLink>
        <StyledNavLink to="/sign-up" className="font-bold hover:text-gray-500">
          <div className=" border-black border-solid border-2 rounded-2xl py-1 px-4 bg-yellowBackground">
            Sign Up
          </div>
        </StyledNavLink>
      </div>
    </div>
  );
}
