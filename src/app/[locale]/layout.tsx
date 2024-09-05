import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from './components/Header';
import "./globals.css";
import { Footer } from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from 'next';

export const metadata: Metadata = {


  viewport: "width=device-width, initial-scale=1.0",
  title: "ilumer, Construindo relações duradouras.",
  description: "ilumer",
  keywords: 'ilumer',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    url: "https://waveseg.com.br",
    title: "ilumer, Construindo relações duradouras.",
    description: "A Waveseg® se destaca na criação de piscinas de ondas sustentáveis e inovadoras, oferecendo soluções personalizadas e tecnologicamente avançadas para transformar empreendimentos e promover o surf em qualquer local.",
    siteName: "Waveseg®",
    images: [{
      url: "/images/unnamed.jpg",
      alt: "Piscina de Ondas Waveseg®"
    }],
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    site: "@waveseg",
    creator: "@waveseg",
    title: "ilumer, Construindo relações duradouras.",
    description: "ilumer",
    images: [{
      url: "/images/unnamed.jpg",
      alt: "Piscina de Ondas Waveseg®"
    }]
  }
};


export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Carregar as mensagens com base no locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' href="falta" />
        {/*<meta name="google-site-verification" content="0o2UdGHKMas5T31hyhg1W6i_mzoKLRoLRnFM_ZrbHw8" />*/}
      </head>
      <SpeedInsights/>
      <body className='overflow-x-hidden'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
