import BannerSlider from "../components/BannerSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import FeatureHighlight from "../components/FeatureHighlight";

export default function Home() {
  return (
    <>
<Hero />
<div className="my-4" />
<BannerSlider/>
<div className="my-4" />
<ProductGrid />
<div className="my-4" />
<FeatureHighlight />
<div className="my-4" />
<FeaturedProducts />
</>
  );
}