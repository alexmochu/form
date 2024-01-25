import Image from "next/image";
import { Inter } from "next/font/google";
import { useHubspotForm } from 'next-hubspot';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '45014421',
    formId: '099fd2a9-1892-47a7-b774-0f711751e3c8',
    target: '#hubspot-form-wrapper'
  });
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <div id="hubspot-form-wrapper" />

    </main>
  );
}
