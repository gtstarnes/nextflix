import Link from "next/link";
import { footerLinks } from "./footerLinks";

const Footer = () => {
  return (
    <div>
        <p>Questions? Call 1-234-567-8910</p>
        <ul>
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