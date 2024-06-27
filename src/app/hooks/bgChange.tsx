import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const BgChange = () => {

    const pathname = usePathname();

    const bgcolor = pathname === "/" ? "hotpink" : "lightblue";

    useEffect(() => {
        document.body.style.backgroundColor = bgcolor
        return () => {
            document.body.style.backgroundColor = "";
        }
    }, [bgcolor]);
}