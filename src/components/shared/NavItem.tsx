import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  route: string;
  icon: string;
  label: string;
}


export const NavItem = ({ route, icon, label }: NavItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === route

  return (
    <li
      key={route}
      className={cn(
        "sidebar-nav_element group",
        isActive ? "bg-purple-gradient text-white" : "text-gray-700"
      )}
    >
      <Link className="sidebar-link" href={route}>
        <Image
          src={icon}
          alt="logo"
          width={24}
          height={24}
          className={`${isActive && 'brightness-200'}`}
        />
        {label}
      </Link>
    </li>
  )
}
