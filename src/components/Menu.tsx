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

// Novas imagens de doces
import bolos from '@/assets/bolos.jpg';
import fatias from '@/assets/fatias.jpg';
import quindins from '@/assets/quindins.jpg';
import suicos from '@/assets/suicos.jpg';
import panelinha from '@/assets/panelinha.jpg';
import paozinhogoiaba from '@/assets/paozinhogoiaba.jpg';
import milfolhas from '@/assets/milfolhas.jpg';
import tartelete from '@/assets/tartelete.jpg';
import bolochocolate from '@/assets/bolochocolate.jpg';
import brownies from '@/assets/brownies.jpg';
import cucas from '@/assets/cucas.jpg';
import boloninho from '@/assets/boloninho.jpg';
import docinhos from '@/assets/docinhos.jpg';
import trufas from '@/assets/trufas.jpg';

// Imagens dos salgados
import sanducroissant from '@/assets/sanducroissant.jpg';
import tortafria from '@/assets/tortafria.jpg';
import doguinhosfolhados from '@/assets/doguinhosfolhados.jpg';

// Novos salgados
import folhados from '@/assets/folhados.jpg';
import canoinha from '@/assets/canoinha.jpg';
import quiches from '@/assets/quiches.jpg';
import pastelizinho from '@/assets/pastelizinho.jpg';
import doguinhochedar from '@/assets/doguinhochedar.jpg';
import enroladinhopicles from '@/assets/enroladinhopicles.jpg';
import paozinhorecheado from '@/assets/paozinhorecheado.jpg';
import hamburguinhos from '@/assets/hamburguinhos.jpg';
import coxinhas from '@/assets/coxinhas.jpg';
import minipizzas from '@/assets/minipizzas.jpg';
import pizzagrande from '@/assets/pizzagrande.jpg';
import empadas from '@/assets/empadas.jpg';
import risoles from '@/assets/risoles.jpg';
import paozinhos from '@/assets/paozinhos.jpg';
import pizza from '@/assets/pizza.jpg';
import alfajorsalgado from '@/assets/alfajorsalgado.jpg';
import paocaseiro from '@/assets/paocaseiro.jpg';
import doguinhos from '@/assets/doguinhos.jpg';

const Menu = () => {
  const bebidas = [
    {
      id: 1,
      name: "Espresso Tradicional",
      description: "Café puro e quentinho, perfeito para quem gosta do sabor forte do café.",
      price: "Bebida Quente",
      image: espresso,
    },
    {
      id: 2,
      name: "Cappuccino Cremoso",
      description: "Café com leite vaporizado e espuma leve, finalizado com um toque de canela.",
      price: "Bebida Quente",
      image: cappuccino,
    },
    {
      id: 3,
      name: "Chás",
      description: "Opções variadas de chás quentes ou gelados, ideais para relaxar a qualquer hora.",
      price: "Bebida Quente ou Gelada",
      image: cha,
    },
    {
      id: 4,
      name: "Mochaccino",
      description: "Mistura de café espresso e chocolate, com sabor doce e marcante.",
      price: "Bebida Quente",
      image: mocca,
    },
    {
      id: 5,
      name: "Café com Leite",
      description: "Café fresquinho com leite quente e cremoso, simples e delicioso.",
      price: "Bebida Quente",
      image: cafecomleite,
    },
    {
      id: 6,
      name: "Chocolate Quente",
      description: "Chocolate cremoso e quentinho, perfeito para dias frios.",
      price: "Bebida Quente",
      image: chocolatequente,
    },
    {
      id: 7,
      name: "Sucos Naturais",
      description: "Sucos frescos de frutas variadas, leves e refrescantes.",
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
      description: "Bolo leve e saboroso, feito com ingredientes simples e sem açúcar.",
      price: "Zero Açúcar",
      image: bolofit,
    },
    {
      id: 3,
      name: "Mini Donuts",
      description: "Fofinhos e doces, perfeitos para acompanhar o café da tarde.",
      price: "Doce",
      image: donuts,
    },
    {
      id: 4,
      name: "Bolos Variados",
      description: "Vários sabores de bolos simples e gostosos, feitos com carinho.",
      price: "Doce",
      image: bolos,
    },
    {
      id: 5,
      name: "Fatias de Bolos",
      description: "Fatias generosas dos nossos bolos caseiros mais pedidos.",
      price: "Doce",
      image: fatias,
    },
    {
      id: 6,
      name: "Quindins",
      description: "Docinho de coco e gema, macio e com brilho dourado.",
      price: "Doce",
      image: quindins,
    },
    {
      id: 7,
      name: "Suíços",
      description: "Massa folhada com recheio doce e leve, ideal para acompanhar o café.",
      price: "Doce",
      image: suicos,
    },
    {
      id: 8,
      name: "Panelinha Folhada de Coco",
      description: "Massa folhada crocante recheada com creme de coco.",
      price: "Doce",
      image: panelinha,
    },
    {
      id: 9,
      name: "Pãozinho Recheado de Goiaba",
      description: "Massa leve com recheio doce de goiabada cremosa.",
      price: "Doce",
      image: paozinhogoiaba,
    },
    {
      id: 10,
      name: "Mil Folhas",
      description: "Camadas finas e crocantes com recheio doce e suave.",
      price: "Doce",
      image: milfolhas,
    },
    {
      id: 11,
      name: "Tartelete",
      description: "Base crocante com recheio de creme e frutas.",
      price: "Doce",
      image: tartelete,
    },
    {
      id: 12,
      name: "Bolo de Chocolate",
      description: "Clássico bolo de chocolate fofinho e saboroso.",
      price: "Doce",
      image: bolochocolate,
    },
    {
      id: 13,
      name: "Brownies",
      description: "Quadradinhos de chocolate úmidos e cheios de sabor.",
      price: "Doce",
      image: brownies,
    },
    {
      id: 14,
      name: "Cucas",
      description: "Bolo com farofa crocante por cima, ideal para o lanche.",
      price: "Doce",
      image: cucas,
    },
    {
      id: 15,
      name: "Bolo Leite Ninho",
      description: "Bolo macio com recheio e cobertura de leite ninho.",
      price: "Doce",
      image: boloninho,
    },
    {
      id: 16,
      name: "Docinhos",
      description: "Os tradicionais docinhos de festa em vários sabores.",
      price: "Doce",
      image: docinhos,
    },
    {
      id: 17,
      name: "Trufas",
      description: "Trufas recheadas com chocolate cremoso e irresistível.",
      price: "Doce",
      image: trufas,
    },
  ];

  const salgados = [
    {
      id: 1,
      name: "Sanduíche de Croissant",
      description: "Croissant recheado com presunto e queijo, leve e saboroso.",
      price: "Salgado",
      image: sanducroissant,
    },
    {
      id: 2,
      name: "Torta Fria",
      description: "Camadas de pão de forma com frango, saladas, maionese e queijo. Linda e saborosa.",
      price: "Torta",
      image: tortafria,
    },
    {
      id: 3,
      name: "Doguinhos Folhados",
      description: "Massa leve recheada com salsicha, crocante por fora e macia por dentro.",
      price: "Salgado",
      image: doguinhosfolhados,
    },
    {
      id: 4,
      name: "Folhados Grandes",
      description: "Massa folhada recheada com sabores variados, leve e crocante.",
      price: "Salgado",
      image: folhados,
    },
    {
      id: 5,
      name: "Canoinha Folhada de Fios de Ovos",
      description: "Massa folhada com recheio doce de fios de ovos e creme leve.",
      price: "Salgado",
      image: canoinha,
    },
    {
      id: 6,
      name: "Quiches",
      description: "Tortinha salgada com recheios variados e saborosa.",
      price: "Salgado",
      image: quiches,
    },
    {
      id: 7,
      name: "Pastelizinho de Nata",
      description: "Massa leve com recheio cremoso e sabor suave.",
      price: "Salgado",
      image: pastelizinho,
    },
    {
      id: 8,
      name: "Doguinhos com Cheddar",
      description: "Salsicha enrolada na massa com recheio de cheddar derretido.",
      price: "Salgado",
      image: doguinhochedar,
    },
    {
      id: 9,
      name: "Enroladinhos de Picles",
      description: "Massa macia recheada com picles e queijo, diferente e gostosa.",
      price: "Salgado",
      image: enroladinhopicles,
    },
    {
      id: 10,
      name: "Pãozinho Recheado",
      description: "Pão macio recheado com presunto e queijo.",
      price: "Salgado",
      image: paozinhorecheado,
    },
    {
      id: 11,
      name: "Hamburguinhos",
      description: "Mini sanduíches com hambúrguer e queijo, perfeitos para lanche.",
      price: "Salgado",
      image: hamburguinhos,
    },
    {
      id: 12,
      name: "Coxinhas de Frango",
      description: "Clássicas coxinhas com recheio cremoso de frango.",
      price: "Salgado",
      image: coxinhas,
    },
    {
      id: 13,
      name: "Mini Pizzas",
      description: "Mini pizzas com queijo, molho e recheios variados.",
      price: "Salgado",
      image: minipizzas,
    },
    {
      id: 14,
      name: "Pizza Grande",
      description: "Pizza de tamanho tradicional com sabores variados.",
      price: "Salgado",
      image: pizzagrande,
    },
    {
      id: 15,
      name: "Empadas",
      description: "Massa leve e amanteigada com recheio de frango ou palmito.",
      price: "Salgado",
      image: empadas,
    },
    {
      id: 16,
      name: "Risoles",
      description: "Massa frita e crocante recheada com presunto e queijo.",
      price: "Salgado",
      image: risoles,
    },
    {
      id: 17,
      name: "Pãezinhos Recheados",
      description: "Pãezinhos assados com recheio salgado, ideais para o lanche.",
      price: "Salgado",
      image: paozinhos,
    },
    {
      id: 18,
      name: "Mini Pizzas Calabresa",
      description: "Fatia de pizza simples e saborosa, feita na hora.",
      price: "Salgado",
      image: pizza,
    },
    {
      id: 19,
      name: "Alfajor Salgado",
      description: "Versão salgada do clássico, com recheio leve e sabor único.",
      price: "Salgado",
      image: alfajorsalgado,
    },
    {
      id: 20,
      name: "Pão Caseiro",
      description: "Pão macio e fresquinho, feito de forma simples e saborosa.",
      price: "Salgado",
      image: paocaseiro,
    },
    {
      id: 20,
      name: "Doguinhos",
      description: "Doguinhos clássicos, com recheio leve e sabor único.",
      price: "Salgado",
      image: doguinhos,
    },
  ];

  return (
    <section id="cardapio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-script text-foreground mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sabores únicos preparados especialmente para você
          </p>
          <div className="w-32 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

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
