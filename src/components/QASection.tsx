import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const QASection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="rounded-xl bg-card border border-border card-shadow p-8 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-bold text-foreground">
            Entre em Contato
          </h3>
          <p className="text-muted-foreground">
            Envie suas dúvidas ou sugestões diretamente para nossa equipe.
          </p>
        </div>

        <Button asChild size="lg" className="gap-2">
          <a href="mailto:histologiafmbru@gmail.com">
            <Mail className="w-5 h-5" />
            Enviar E-mail
          </a>
        </Button>
        
        <p className="text-sm text-muted-foreground">
          histologiafmbru@gmail.com
        </p>
      </div>
    </div>
  );
};

export default QASection;
