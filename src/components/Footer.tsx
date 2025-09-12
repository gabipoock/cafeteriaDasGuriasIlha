import { Heart, MapPin, Phone, Clock, Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo-cafeteria.png';

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoImage} 
                alt="Cafeteria das Gurias Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-brand text-foreground">Cafeteria das Gurias</h3>
                <p className="text-sm text-primary">Com fé e café, sonhos se realizam!</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Onde cada xícara de café é preparada com amor e cada momento se torna especial. 
              Venha fazer parte da nossa família e descobrir o verdadeiro sabor da felicidade.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-brand text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>(51) 99955-8529</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@cafeteriadasgurias.com</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>Rua Cap. Coelho, 56<br />Ilha da Pintada<br />Arquipélago - Porto Alegre</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-brand text-foreground mb-4">Funcionamento</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Terça a Domingo</p>
                  <p className="text-sm">15:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          {/* WhatsApp Button */}
          <div className="flex justify-center mb-6">
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white shadow-button transition-all hover-lift font-semibold px-8 py-4 text-lg flex items-center gap-3"
              onClick={() => window.open('https://wa.me/5551999558529?text=Olá! Tudo bem? Gostaria de fazer um pedido na Cafeteria das Gurias', '_blank')}
            >
              <MessageCircle className="w-6 h-6" />
              Fazer Pedido no WhatsApp
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Cafeteria das Gurias. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>para você</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;