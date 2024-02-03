import Link from "next/link";
import { footerLinks } from "./footerLinks";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center gap-4 text-sm text-slate-600">
        <p>Questions? Call 1-234-567-8910</p>
        <ul className="grid grid-cols-2 gap-4 underline">
            {footerLinks.map((link) => {
                return (
                <li key={link.text}>
                    <Link href={link.href}>{link.text}</Link>
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Footer