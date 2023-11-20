import HomeFeatures, { CardsCarousel } from "@/features/home/CardsCarousel";
import { HeaderMegaMenu } from "@/features/home/HeaderMegaMenu";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <div c>
    <Container>
      <HeaderMegaMenu/>
      <CardsCarousel/>
    </Container>
    </div>
  )
}