import { ArrowDown, Coffee, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Cafeteria das Gurias - Ambiente aconchegante" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <Coffee className="mx-auto mb-6 text-primary w-16 h-16" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-foreground mb-4">
            Cafeteria das Gurias
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-2">
            Com fé e café, sonhos se realizam!
          </p>
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 text-[hsl(var(--pink-strong))]" />
          <span className="text-sm font-medium text-foreground">
            Sabor na medida & amor em cada mordida
          </span>
          <Heart className="w-5 h-5 text-[hsl(var(--pink-strong))]" />
        </div>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-button transition-all hover-lift font-semibold px-8 py-4 text-lg"
            onClick={() => document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Cardápio
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-button transition-all hover-lift font-semibold px-8 py-4 text-lg"
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conhecer História
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/30 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;