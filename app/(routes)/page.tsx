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
      <div className="w-3/4 p-4">
        <h1 className="text-center">PUBLICAÇÕES</h1>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="rounded-t-lg"
              src="/recisao-indireta.jpg"
              alt=""
              width={400}
              height={400}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rescisão indireta: o que é e quando pode ser aplicada
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A rescisão indireta é caracterizada pela solicitação da demissão por parte do colaborador e se difere do pedido de demissão, pois, é realizada quando o empregador não cumpre a lei ou o acordo firmado no momento da contratação.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Continue Lendo
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
