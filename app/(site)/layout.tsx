import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StickyFooterBody from "@/components/StickyFooterBody";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StickyFooterBody>
      <div className="wrap">
        <Header />
        {children}
        <BackToTop />
        <Footer />
      </div>
    </StickyFooterBody>
  );
}
