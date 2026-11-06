export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <h2 className="">user Layout Nav item</h2>
      {children}
    </>
  );
}
