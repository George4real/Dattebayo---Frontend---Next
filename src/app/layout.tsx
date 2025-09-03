import type { Metadata } from "next";
import "./globals.css";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";
import { ThemeProvider } from "@/components/theme-provider"
import ModeToggle from "@/components/theme-switch";

export const metadata: Metadata = {
  title: "DatteBayo",
  description: "Naruto Encyclopedia",
  icons: "2013888.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <div className="flex mt-5 justify-center">
            <NavigationMenu className="uppercase">
              <NavigationMenuList>
                <NavigationMenuItem className="flex flex-row">
                  <NavigationMenuLink asChild>
                    <Link href="/characters?page=1">characters</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/akatsuki">Akatsuki</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/clans">clans</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/tailed-beasts">tailed-beasts</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/teams">teams</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/villages">villages</Link>
                  </NavigationMenuLink>

                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="">
              <ModeToggle/>
            </div>
          </div>
        </ThemeProvider>
        {children}
      </body>
    </html>
  );
}
