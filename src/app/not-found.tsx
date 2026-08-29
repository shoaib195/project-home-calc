import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LinkButton } from "@/components/ui/Button";
import { SearchBox } from "@/components/site/SearchBox";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-[560px] px-4 py-20 text-center sm:px-6">
          <p className="font-mono text-[13px] font-bold uppercase tracking-[0.06em] text-text-3">404</p>
          <h1 className="mt-2 text-[28px] font-extrabold tracking-[-0.015em] text-text">We couldn&apos;t find that page</h1>
          <p className="mt-2 text-[15px] text-text-2">
            It may have moved, or the link might be out of date. Try searching for the calculator you were looking for.
          </p>
          <div className="mt-6">
            <SearchBox size="md" />
          </div>
          <div className="mt-6">
            <LinkButton href="/calculators" variant="secondary">
              Browse all calculators
            </LinkButton>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
