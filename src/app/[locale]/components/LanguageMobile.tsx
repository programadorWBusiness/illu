"use client";

import { Link } from '@/navigation';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageMobile() {
    const pathName = usePathname();
    const router = useRouter();

    // Extract the current locale from the pathname
    const currentLocale = pathName.split('/')[1];

    return (
        <div className='justify-center mt-4 space-x-4 flex md:hidden'>
            <Link href="/" locale='pt'>
                <Image
                    alt="pt"
                    src={"/images/pt.webp"}
                    width={28}
                    height={28}
                    className={`rounded-md ${currentLocale === 'pt' ? 'border border-white' : ''} hover:border border-white`}
                />
            </Link>
            <Link href="/" locale='en'>
                <Image
                    alt="en"
                    src={"/images/en.webp"}
                    width={28}
                    height={28}
                    className={`rounded-md ${currentLocale === 'en' ? 'border border-white' : ''} hover:border border-white`}
                />
            </Link>
            <Link href="/" locale='es'>
                <Image
                    alt="es"
                    src={"/images/es.webp"}
                    width={28}
                    height={28}
                    className={`rounded-md ${currentLocale === 'es' ? 'border border-white' : ''} hover:border border-white`}
                />
            </Link>
        </div>
    );
}
