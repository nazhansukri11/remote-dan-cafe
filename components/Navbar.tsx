
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
    return (
        <header className="border-b">
            <div className="container px-4 sm:px-6 lg:px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Image
                            src="/cafe-icon.png"
                            alt="Cafe Icon"
                            width={30}
                            height={30}
                            className="mr-1"
                        />
                        <Link href="/" className="text-2xl font-bold">
                            RemoteDanCafe
                        </Link>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <div className="flex items-center">
                                            <span>Home</span>
                                        </div>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/cafe" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <div className="flex items-center">
                                            <span>Cafe</span>
                                        </div>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            {/* Add more NavigationMenuItems as needed */}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex items-center">
                        <ModeToggle />
                        <Button variant="outline" className="ml-4">
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar