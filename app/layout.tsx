import '@/app/ui/global.css';
import { inter } from './ui/font';
import Link from 'next/link';

export default function RootLayout({
  children,
  team,
  modal,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <div style={{ display: 'flex', flex: 1 }} className="flex min-h-screen">
          <aside
            style={{
              background: 'aqua',
              flexDirection: 'column',
            }}
          >
            <div>hi12312321312</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
          </aside>
          <div style={{ flex: 1 }}>
            <nav style={{ background: 'teal', flex: 1 }}>
              <Link href={'/'}>to back</Link>
              <Link href={'/user'}>to user</Link>
            </nav>
            {children}
          </div>
        </div> */}
        {children}
        {/* {team}
        {modal} */}
      </body>
    </html>
  );
}
