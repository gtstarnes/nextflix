import Link from "next/link";
import { footerLinks } from "./footerLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center gap-4 text-sm text-slate-600">
        <p>Questions? Call <a href="tel:+1234567890" className="underline">123-456-7890</a></p>
        <ul className="grid grid-cols-2 gap-4 underline">
            {footerLinks.map((link) => {
                return (
                <li key={link.text}>
                    <Link href={link.href}>{link.text}</Link>
                </li>
                )
            })}
        </ul>
    </footer>
  )
}

export default Footer