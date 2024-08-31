import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'







const IMBPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'




});

export const metadata: Metadata = {
  title: "ImAI",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance = {{
      variables: {colorPrimary: '#12de82'}
    }}>
      

    
      <html lang="en">



        <body className={cn("font-IBMPlex antialiased", IMBPlex.variable)}>
          <header>
          <SignedOut>
              <SignInButton />
          </SignedOut>
          <SignedIn>
              <UserButton />
          </SignedIn>
          </header>



          {children}
        </body>
      </html>
    </ClerkProvider>
      
      
    
    
    ); 
  }
 