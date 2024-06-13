import Link from 'next/link';

export default function Layout({
  children,
  team,
  modal,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
