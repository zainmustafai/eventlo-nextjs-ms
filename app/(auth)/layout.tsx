
export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main className="flex min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center flex-col items-center justify-center">
        {children}
      </main>
    );
  }
  