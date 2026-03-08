import { Instagram, ExternalLink, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <div className="space-y-8">
      {/* Sobre o Projeto */}
      <Card className="border-primary/20">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Sobre o Projeto</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            O <strong className="text-foreground">HistoFMBRU</strong> é um projeto fundado como uma proposta para o{" "}
            <strong className="text-foreground">Programa de Apoio Pedagógico (PAP) — Tutoria</strong> da Universidade de São Paulo, 
            visando aplicar Histologia ao cotidiano dos estudantes, por meio de formas inovadoras e tecnológicas de revisão. 
            Além de aprofundar a relação entre a Clínica Médica e a Histologia prática, o projeto busca promover a{" "}
            <strong className="text-foreground">aprendizagem ativa</strong>, autonomia, senso crítico e capacidade interpretativa 
            no contexto de correlações clínico-histológicas.
          </p>
          <div className="mt-6">
            <a
              href="https://www.instagram.com/histofmbru/igsh=azU3azU0dHlha2U1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Instagram className="w-5 h-5" />
                @histofmbru
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Conheça mais do projeto, das idealizadoras e contribuintes no nosso Instagram.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Liga Acadêmica */}
      <Card className="border-primary/20">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Liga Acadêmica de Morfologia Aplicada</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A <strong className="text-foreground">LIAMA USP</strong> — Liga Acadêmica de Morfologia Aplicada da USP-Bauru — 
            é uma liga dedicada ao estudo e à aplicação prática da morfologia, promovendo atividades acadêmicas, 
            eventos e produção científica na área.
          </p>
          <div className="mt-6">
            <a
              href="https://www.instagram.com/liamausp?igsh=bDU4YXp1Zjh3YmRn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Instagram className="w-5 h-5" />
                @liamausp
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSection;
