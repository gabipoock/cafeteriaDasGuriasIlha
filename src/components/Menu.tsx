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
import brownie from '@/assets/brownie.jpg';
import strawberryTart from '@/assets/strawberry-tart.jpg';
import sanducroissant from '@/assets/sanducroissant.jpg';
import naturalSandwich from '@/assets/natural-sandwich.jpg';
import quicheLorraine from '@/assets/quiche-lorraine.jpg';

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
      price: "Sobremesa",
      image: narizentupido,
    },
    {
      id: 2,
      name: "Brownie da Casa",
      description: "Brownie artesanal com chocolate belga, nozes e calda especial. Servido quente com sorvete de baunilha.",
      price: "R$ 12,50",
      image: brownie,
    },
    {
      id: 3,
      name: "Torta de Morango",
      description: "Fatia generosa de torta com massa amanteigada, creme e morangos frescos. O doce perfeito para momentos especiais.",
      price: "R$ 15,90",
      image: strawberryTart,
    },
  ];

  const salgados = [
    {
      id: 1,
      name: "Croissant Francês",
      description: "Croissant artesanal recheado com presunto parma e queijo brie, finalizado com tomate cereja. Crocante por fora, macio por dentro.",
      price: "R$ 9,90",
      image: sanducroissant,
    },
    {
      id: 2,
      name: "Sanduíche Natural",
      description: "Pão integral com peito de peru, queijo branco, alface, tomate e maionese caseira. Leve e nutritivo.",
      price: "R$ 11,50",
      image: naturalSandwich,
    },
    {
      id: 3,
      name: "Quiche Lorraine",
      description: "Quiche tradicional francesa com bacon, queijo gruyère e creme de leite. Servida quente com salada verde.",
      price: "R$ 14,90",
      image: quicheLorraine,
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