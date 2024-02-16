import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="grid place-items-center p-4">
      <div className="w-3/4 p-4">
        <h1 className="text-center">QUEM SOMOS</h1>
        <p>
          Fundado em xxxx pelo Dr. Antônio Marcos Ribeiro, o Ribeiro & Ribeiro Jurídico se consolidou como referência em advocacia especializada nas áreas trabalhista, previdenciária e consumerista. Ao longo de mais de uma década, acumulamos uma vasta experiência e um histórico de sucesso em defesa dos direitos dos nossos clientes.
        </p>
      </div>
      <div className="w-3/4 p-4">
        <h1 className="text-center">NOSSA EQUIPE MULTIDISCIPLINAR</h1>
        <p>
          Nossa equipe é composta por oito advogados altamente qualificados e experientes, além de dois estagiários em constante aprendizado. Acreditamos na atuação conjunta e estratégica para oferecer um atendimento personalizado e eficaz, sempre buscando as melhores soluções para cada caso.
        </p>
      </div>
      <div className="w-3/4 p-4">
        <Accordion type="single" collapsible className="grid grid-cols-2 gap-4">
          <div>
            <AccordionItem value="item-1">
              <AccordionTrigger>Dr. Gabriel Jabour</AccordionTrigger>
              <AccordionContent>
                Cara fera
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Dr. Harvey Specter</AccordionTrigger>
              <AccordionContent>
                Melhor advogado de Manhatann
              </AccordionContent>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem value="item-3">
              <AccordionTrigger>Dr. Pablo Jabour</AccordionTrigger>
              <AccordionContent>
                Outro Cara fera
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Dr. Mike Ross</AccordionTrigger>
              <AccordionContent>
                Provavelmente sem diploma
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    </main>
  );
}
