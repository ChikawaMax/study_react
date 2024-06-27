import Link from "next/link";

interface ItemArray {
  href: string,
  label: string
}

const NAV_ITEMS: ItemArray[] = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
]

export const Header = () => {
  return (
    <header className="text-center">


      {NAV_ITEMS.map((item: ItemArray, index: number) => {
        return (
          <div key={index}>
            < Link href={item.href} >
              {item.label}
            </Link>
          </div>
        )
      })}
    </header >
  );
}