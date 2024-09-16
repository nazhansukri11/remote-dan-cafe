// components/Footer.tsx

import React from 'react'
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"

const Footer: React.FC = () => {
    return (
        <footer className="bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">RemoteDancafe</h3>
                        <p className="text-sm text-muted-foreground">Find your perfect remote work location</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
                            <li><Link href="/cafe" className="text-sm text-muted-foreground hover:text-foreground">Cafes</Link></li>
                            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h4 className="text-sm font-semibold mb-4">Connect</h4>
                            <ul className="space-y-2">
                                <li><a href="https://twitter.com/remotedancafe" className="text-sm text-muted-foreground hover:text-foreground">Twitter</a></li>
                                <li><a href="https://facebook.com/remotedancafe" className="text-sm text-muted-foreground hover:text-foreground">Facebook</a></li>
                                <li><a href="https://instagram.com/remotedancafe" className="text-sm text-muted-foreground hover:text-foreground">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="text-sm font-semibold mb-4">xtech </h4>
                </div>
                <Separator className="my-8" />
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">© 2024 RemoteDancafe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer