import { Heart, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import donasImage from '@/assets/donas-cafeteria.jpeg';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Feito com Amor",
      description: "Cada item do nosso cardápio é preparado com carinho e dedicação, usando receitas tradicionais da família."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ambiente Familiar",
      description: "Um espaço acolhedor onde você se sente em casa, perfeito para encontros especiais e momentos únicos."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualidade Premium",
      description: "Ingredientes selecionados e de primeira qualidade, café especial e produtos sempre frescos."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Tradição",
      description: "Anos de experiência e paixão pela gastronomia, mantendo viva a tradição das cafeterias acolhedoras."
    }
  ];

  return (
    <>
      {/* Nossa História Section */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-script text-foreground mb-6">
                Nossa História
              </h2>
              <div className="w-24 h-1 bg-primary mb-8 rounded-full"></div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A <span className="font-semibold text-primary">Cafeteria das Gurias</span> nasceu do sonho de criar um espaço onde o aroma do café se mistura com o carinho de casa. Somos mais que uma cafeteria, somos um pedaço do coração onde cada receita conta uma história.
                </p>
                
                <p>
                  Aqui, acreditamos que <span className="font-semibold text-foreground">"com fé e café, sonhos se realizam"</span>. É com essa filosofia que preparamos cada xícara, cada doce e cada salgado, sempre pensando em proporcionar momentos especiais para nossos clientes.
                </p>
                
                <p>
                  Nosso compromisso é oferecer produtos frescos, ambiente acolhedor e atendimento que faz você se sentir parte da nossa família. Porque aqui, todo mundo é bem-vindo!
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="card-gradient border-border shadow-card hover-lift transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-brand text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* As Donas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
              <img
                src={donasImage}
                alt="As donas da Cafeteria das Gurias"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] 
                          object-contain lg:object-cover object-center
                          rounded-2xl shadow-card hover-lift transition-all duration-300"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
                    As Gurias que fazem a magia acontecer 🌷✨
                  </p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-script text-foreground mb-6">
                Conheça as Donas
              </h2>
              <div className="w-24 h-1 bg-primary mb-8 rounded-full"></div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Somos as <span className="font-semibold text-primary">Gurias</span> por trás de cada sorriso e cada sabor especial que você encontra aqui. Nossa paixão pela gastronomia e pelo atendimento caloroso nos move todos os dias.
                </p>
                
                <p>
                  Com anos de experiência e muito amor pela arte de fazer café e doces, criamos este espaço pensando em cada detalhe para que você se sinta parte da nossa família.
                </p>
                
                <p>
                  Cada receita tem nossa assinatura especial, cada atendimento carrega nosso carinho genuíno. Venha nos conhecer pessoalmente e descobrir por que nossos clientes se tornam amigos!
                </p>
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-primary font-script text-xl text-center">
                  "Nossa missão é espalhar alegria, uma xícara de café por vez" ☕💕
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;