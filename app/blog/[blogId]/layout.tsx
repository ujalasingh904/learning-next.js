export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
function getRandomInt(val: number) {
  return Math.floor(Math.random() * val);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const num = getRandomInt(2);
  if (num == 0) {
    throw new Error("We caught an error");
  }
  return (
    <main>
      {children}
      <div>"hello"</div>
    </main>
  );
}
