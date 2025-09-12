import { Coffee, Cake, Sandwich } from 'lucide-react';
import MenuCarousel from './MenuCarousel';

// Import das imagens
import espresso from '@/assets/espresso.jpg';
import cappuccino from '@/assets/cappuccino.jpg';
import cha from '@/assets/cha.jpg';
import mocca from '@/assets/mocaccino.jpg';
import cafecomleite from '@/assets/cafecomleite.jpg';
import chocolatequente from '@/assets/chocolate quente.jpg';
import fruitJuices from '@/assets/fruit-juices.png';
import narizentupido from '@/assets/narizentupido.jpg';
import bolofit from '@/assets/bolofit.jpg';
import donuts from '@/assets/donuts.jpg';
import sanducroissant from '@/assets/sanducroissant.jpg';
import tortafria from '@/assets/tortafria.jpg';
import doguinhos from '@/assets/doguinhos.jpg';

const Menu = () => {
  const bebidas = [
    {
      id: 1,
      name: "Espresso Tradicional",
      description: "Café puro, quentinho e encorpado. A escolha perfeita para quem aprecia o verdadeiro sabor do café.",
      price: "Bebida Quente",
      image: espresso,
    },
    {
      id: 2,
      name: "Cappuccino Cremoso",
      description: "Espresso cremoso com leite vaporizado e espuma, finalizado com canela. Uma experiência única em cada gole.",
      price: "Bebida Quente",
      image: cappuccino,
    },
    {
      id: 3,
      name: "Chás",
      description: "Uma bebida leve e reconfortante para qualquer momento do dia.",
      price: "Bebida Quente ou Gelada",
      image: cha,
    },
    {
      id: 4,
      name: "Mochaccino",
      description: "A combinação perfeita de café espresso e chocolate aveludado, coroada com espuma cremosa. Uma explosão de sabor que aquece e alegra o paladar.",
      price: "Bebida Quente",
      image: mocca,
    },
    {
      id: 5,
      name: "Café com Leite",
      description: "Café fresco e aromático suavizado com leite cremoso, criando uma bebida equilibrada e acolhedora, perfeita para começar o dia ou fazer uma pausa.",
      price: "Bebida Quente",
      image: cafecomleite,
    },
    {
      id: 6,
      name: "Chocolate Quente",
      description: "Chocolate cremoso, aquecido na medida certa e com textura deliciosa, oferecendo conforto em cada gole.",
      price: "Bebida Quente",
      image: chocolatequente,
    },
    {
      id: 7,
      name: "Sucos Naturais",
      description: "Sucos frescos e naturais de frutas deliciosas. Refrescantes e nutritivos para qualquer hora do dia.",
      price: "Bebida Refrescante",
      image: fruitJuices,
    },
  ];

  const doces = [
    {
      id: 1,
      name: "Cone Doce Recheado",
      description: "O famoso doce Nariz Entupido! Uma explosão de sabores que derrete na boca.",
      price: "Doce",
      image: narizentupido,
    },
    {
      id: 2,
      name: "Bolo Fit",
      description: "Uma fatia de puro prazer sem culpa! Nosso bolo é feito com ingredientes selecionados, garantindo um sabor incrível para quem busca uma alimentação mais equilibrada.",
      price: "Zero Açúcar",
      image: bolofit,
    },
    {
      id: 3,
      name: "Mini Donuts",
      description: "Fofinhos, irresistíveis e do tamanho perfeito da felicidade! Nossos mini donuts são uma explosão de sabor em miniatura. ",
      price: "Doce",
      image: donuts,
    },
  ];

  const salgados = [
    {
      id: 1,
      name: "Sanduíche de Croissant",
      description: "Croissant artesanal recheado com presunto e queijo, finalizado com tomate cereja. Crocante por fora, macio por dentro.",
      price: "Salgado",
      image: sanducroissant,
    },
    {
      id: 2,
      name: "Torta Fria",
      description: "O clássico que nunca sai de moda! Camadas perfeitas de pão de forma, frango desfiado temperado (ou atum), maionese e muito queijo.",
      price: "Torta",
      image: tortafria,
    },
    {
      id: 3,
      name: "Doguinhos",
      description: "Crocante por fora e surpreendentemente macio por dentro. Nossa massa folhada envolve uma salsicha de primeira qualidade, criando o equilíbrio perfeito de sabor e textura em cada mordida.",
      price: "Salgado",
      image: doguinhos,
    },
  ];

  return (
    <section id="cardapio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-script text-foreground mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sabores únicos preparados especialmente para você
          </p>
          <div className="w-32 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-20">
          <MenuCarousel 
            title="Bebidas" 
            items={bebidas} 
            icon={<Coffee className="w-8 h-8" />}
          />
          
          <MenuCarousel 
            title="Doces" 
            items={doces} 
            icon={<Cake className="w-8 h-8" />}
          />
          
          <MenuCarousel 
            title="Salgados" 
            items={salgados} 
            icon={<Sandwich className="w-8 h-8" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;