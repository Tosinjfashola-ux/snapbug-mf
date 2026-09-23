import { Hero } from '@/components/home/hero'
import { TrustStrip } from '@/components/home/trust-strip'
import { Intro } from '@/components/home/intro'
import { ProcessPreview } from '@/components/home/process-preview'
import { InventoryPreview } from '@/components/home/inventory-preview'
import { ShippingSection } from '@/components/home/shipping-section'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Intro />
      <ProcessPreview />
      <InventoryPreview />
      <ShippingSection />
      <CtaBanner />
    </>
  )
}
