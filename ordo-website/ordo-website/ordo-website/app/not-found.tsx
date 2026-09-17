import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-cloud">
      <div className="max-w-content mx-auto px-6 text-center py-32">
        <p className="font-mono text-xs text-gold tracking-wide uppercase mb-4">
          404
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-slate leading-snug">
          Page not found.
        </h1>
        <p className="text-slate2 text-base leading-relaxed mt-4 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    </main>
  );
}
