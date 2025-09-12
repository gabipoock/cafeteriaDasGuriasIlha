import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCarouselProps {
  title: string;
  items: MenuItem[];
  icon: React.ReactNode;
}

const MenuCarousel = ({ title, items, icon }: MenuCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mb-16">
      {/* Category Title */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="text-primary">{icon}</div>
          <h3 className="text-3xl md:text-4xl font-script text-foreground">{title}</h3>
        </div>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground shadow-button"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground shadow-button"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Carousel Items */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="w-full flex-shrink-0 px-4">
                <Card className="card-gradient border-border shadow-card hover-lift transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover hover-scale transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8 flex flex-col justify-center">
                        <h4 className="text-2xl md:text-3xl font-brand text-foreground mb-3">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-primary">
                            {item.price}
                          </span>
                          <Button 
                          asChild
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          <a
                            href={`https://wa.me/5551999558529?text=${encodeURIComponent(
                              `Oi, gurias! Tudo bem Gostaria de consultar o valor do item: ${item.name}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Consultar
                          </a>
</Button>

                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Ir para item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCarousel;