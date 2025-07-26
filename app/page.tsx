"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { DollarSign, Shield, Lock, FileText, Users, Scale, X, Heart, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      icon: <DollarSign className="w-10 h-10 text-white" />,
      title: "Aposentadorias",
      description: "Garantimos que você receba sua aposentadoria com o melhor valor possível.",
      details: {
        title: "Aposentadorias",
        content: `
          <h3 class="text-xl font-bold mb-4 text-[#c5a263]">Tipos de Aposentadoria que atendemos:</h3>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <div>
                <strong>Aposentadoria por Tempo de Contribuição:</strong> Para quem completou 35 anos (homens) ou 30 anos (mulheres) de contribuição.
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <div>
                <strong>Aposentadoria por Idade:</strong> 65 anos (homens) ou 62 anos (mulheres) com pelo menos 15 anos de contribuição.
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <div>
                <strong>Aposentadoria Especial:</strong> Para profissionais expostos a agentes nocivos (15, 20 ou 25 anos).
              </div>
            </li>
          </ul>
          <p class="mb-4">Nossa equipe especializada analisa seu histórico contributivo e identifica a melhor estratégia para maximizar o valor do seu benefício.</p>
          <p class="text-[#c5a263] font-semibold">Agende sua consulta gratuita e descubra seus direitos!</p>
        `,
      },
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: "Auxílio Doença",
      description: "Benefício para quem está temporariamente incapacitado para o trabalho.",
      details: {
        title: "Auxílio Doença",
        content: `
          <h3 class="text-xl font-bold mb-4 text-[#c5a263]">O que é o Auxílio Doença?</h3>
          <p class="mb-4">Benefício pago ao segurado que fica temporariamente incapaz para o trabalho em decorrência de doença ou acidente.</p>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Requisitos:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Qualidade de segurado (estar contribuindo ou em período de graça)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Carência de 12 contribuições (exceto em casos de acidente)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Comprovação da incapacidade através de perícia médica
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Como podemos ajudar:</h4>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Preparação da documentação médica
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Acompanhamento na perícia médica
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Recursos em caso de negativa
            </li>
          </ul>
          
          <p class="text-[#c5a263] font-semibold">Seu benefício foi negado? Entre em contato conosco!</p>
        `,
      },
    },
    {
      icon: <Lock className="w-10 h-10 text-white" />,
      title: "Auxílio Reclusão",
      description: "Benefício para dependentes de segurado em regime fechado.",
      details: {
        title: "Auxílio Reclusão",
        content: `
          <h3 class="text-xl font-bold mb-4 text-[#c5a263]">Auxílio Reclusão - Direito dos Dependentes</h3>
          <p class="mb-4">Benefício pago aos dependentes do segurado que se encontra preso em regime fechado ou semiaberto.</p>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Quem tem direito:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Dependentes de segurado preso em regime fechado ou semiaberto
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Segurado deve ter qualidade de segurado na data da prisão
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Último salário deve estar dentro do limite estabelecido por lei
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Documentos necessários:</h4>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Certidão de nascimento ou casamento dos dependentes
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Declaração de cárcere fornecida pela autoridade competente
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Comprovante de renda do segurado
            </li>
          </ul>
          
          <p class="text-[#c5a263] font-semibold">Precisa de orientação? Fale conosco!</p>
        `,
      },
    },
    {
      icon: <FileText className="w-10 h-10 text-white" />,
      title: "Acréscimo de 25%",
      description: "Adicional para aposentados que necessitam de assistência permanente.",
      details: {
        title: "Acréscimo de 25%",
        content: `
          <h3 class="text-xl font-bold mb-4 text-[#c5a263]">Acréscimo de 25% - Assistência Permanente</h3>
          <p class="mb-4">Adicional de 25% sobre o valor da aposentadoria para segurados que necessitam de assistência permanente de outra pessoa.</p>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Quem tem direito:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Aposentados por invalidez que necessitam de cuidados permanentes
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Beneficiários de auxílio-doença que se enquadrem na situação
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Comprovação através de perícia médica do INSS
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Situações que podem gerar o direito:</h4>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Cegueira total
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Perda de membros
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Paralisia irreversível e incapacitante
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Outras condições que impeçam a vida independente
            </li>
          </ul>
          
          <p class="text-[#c5a263] font-semibold">Avalie se você tem direito a este benefício!</p>
        `,
      },
    },
    {
      icon: <DollarSign className="w-10 h-10 text-white" />,
      title: "Benefícios Assistenciais (LOAS)",
      description: "Benefício para idosos e pessoas com deficiência em situação de vulnerabilidade.",
      details: {
        title: "Benefícios Assistenciais (LOAS)",
        content: `
          <h3 class="text-xl font-bold mb-4 text-[#c5a263]">BPC/LOAS - Lei Orgânica da Assistência Social</h3>
          <p class="mb-4">Benefício assistencial no valor de 1 salário mínimo para pessoas com deficiência e idosos em situação de vulnerabilidade social.</p>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Requisitos para Idosos (65 anos ou mais):</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Idade mínima de 65 anos
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Renda familiar per capita inferior a 1/4 do salário mínimo
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Não receber nenhum benefício previdenciário
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Requisitos para Pessoas com Deficiência:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Deficiência que impeça a vida independente e o trabalho
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Renda familiar per capita inferior a 1/4 do salário mínimo
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Avaliação médica e social
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Como calculamos a renda familiar:</h4>
          <p class="mb-4">Somamos todas as rendas da família e dividimos pelo número de pessoas que moram na casa. Se der menos de R$ 330,00 por pessoa, você pode ter direito ao benefício.</p>
          
          <p class="text-[#c5a263] font-semibold">Quer saber se você tem direito? Faça uma consulta gratuita!</p>
        `,
      },
    },
    {
      icon: <Scale className="w-10 h-10 text-white" />,
      title: "Pensão Por Morte",
      description: "Benefício para dependentes de segurado falecido.",
      details: {
        title: "Pensão Por Morte",
        content: `
          <h3 class="text-xl font-bold mb-4 text-[#c5a263]">Pensão Por Morte - Proteção para a Família</h3>
          <p class="mb-4">Benefício pago aos dependentes do segurado que faleceu, garantindo proteção financeira para a família.</p>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Quem são os dependentes:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>Classe I:</strong> Cônjuge, companheiro(a) e filhos menores de 21 anos ou inválidos
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>Classe II:</strong> Pais (na ausência dos dependentes da Classe I)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>Classe III:</strong> Irmãos menores de 21 anos ou inválidos (na ausência das classes anteriores)
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Requisitos:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Segurado deve ter qualidade de segurado no momento do óbito
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Carência de 18 meses (exceto em casos de acidente)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Comprovação da dependência econômica (quando necessário)
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Documentos necessários:</h4>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Certidão de óbito
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Documentos que comprovem a dependência
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              CPF e documentos pessoais dos dependentes
            </li>
          </ul>
          
          <p class="text-[#c5a263] font-semibold">Perdeu um ente querido? Estamos aqui para ajudar sua família.</p>
        `,
      },
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Salário Maternidade",
      description: "Benefício para mães durante o período de licença maternidade.",
      details: {
        title: "Salário Maternidade",
        content: `
          <h3 class="text-xl font-bold mb-4 text-[#c5a263]">Salário Maternidade - Proteção à Maternidade</h3>
          <p class="mb-4">Benefício pago à segurada durante o afastamento do trabalho por motivo de nascimento de filho, aborto, adoção ou guarda judicial.</p>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Quem tem direito:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Seguradas empregadas, domésticas, contribuintes individuais
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Seguradas especiais (trabalhadoras rurais)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Desempregadas em período de graça
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Homens (em casos específicos de adoção ou morte da mãe)
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Duração do benefício:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>Parto:</strong> 120 dias (4 meses)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>Adoção:</strong> 120 dias
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>Aborto espontâneo:</strong> 14 dias
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Carência necessária:</h4>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Empregadas: sem carência
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Contribuintes individuais: 10 meses
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Seguradas especiais: 10 meses
            </li>
          </ul>
          
          <p class="text-[#c5a263] font-semibold">Está grávida ou adotou uma criança? Conheça seus direitos!</p>
        `,
      },
    },
    {
      icon: <FileText className="w-10 h-10 text-white" />,
      title: "Revisão de Benefícios",
      description: "Revisão para aumentar o valor do seu benefício previdenciário.",
      details: {
        title: "Revisão de Benefícios",
        content: `
          <h3 class="text-xl font-bold mb-4 text-[#c5a263]">Revisão de Benefícios - Maximize sua Aposentadoria</h3>
          <p class="mb-4">Análise técnica do seu benefício para identificar possibilidades de aumento no valor recebido.</p>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Principais tipos de revisão:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>Revisão da Vida Toda:</strong> Inclusão de salários anteriores a 1994
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>Revisão do Buraco Negro:</strong> Para aposentadorias entre 1999-2009
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>Revisão do Teto:</strong> Aplicação correta do teto previdenciário
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>Inclusão de Tempo:</strong> Períodos não computados pelo INSS
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Quando solicitar:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Até 10 anos após o primeiro pagamento do benefício
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Quando houver erro no cálculo do INSS
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Mudança na legislação que favoreça o segurado
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">O que analisamos:</h4>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Histórico contributivo completo
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Cálculo da Renda Mensal Inicial (RMI)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Aplicação correta dos índices de correção
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Verificação de períodos especiais
            </li>
          </ul>
          
          <p class="text-[#c5a263] font-semibold">Seu benefício pode estar com valor menor do que deveria. Faça uma análise gratuita!</p>
        `,
      },
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: "Aposentadoria Especial",
      description: "Para profissionais expostos a agentes nocivos à saúde.",
      details: {
        title: "Aposentadoria Especial",
        content: `
          <h3 class="text-xl font-bold mb-4 text-[#c5a263]">Aposentadoria Especial - Proteção ao Trabalhador</h3>
          <p class="mb-4">Benefício para trabalhadores expostos a agentes nocivos à saúde ou à integridade física de forma habitual e permanente.</p>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Tempo de contribuição necessário:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>15 anos:</strong> Trabalho em minas subterrâneas, frentes de produção com amianto
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>20 anos:</strong> Trabalho com amianto, em minas subterrâneas afastadas das frentes
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <strong>25 anos:</strong> Demais atividades especiais (ruído, calor, frio, produtos químicos, etc.)
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Principais agentes nocivos:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Ruído acima de 85 decibéis
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Calor excessivo (trabalho em fornos, fundições)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Produtos químicos (benzeno, amianto, chumbo)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Radiações ionizantes
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Trabalho em minas e subsolos
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Documentos necessários:</h4>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              PPP (Perfil Profissiográfico Previdenciário)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              LTCAT (Laudo Técnico de Condições Ambientais do Trabalho)
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Carteira de trabalho e documentos pessoais
            </li>
          </ul>
          
          <p class="text-[#c5a263] font-semibold">Trabalhou exposto a agentes nocivos? Você pode ter direito à aposentadoria especial!</p>
        `,
      },
    },
    {
      icon: <Heart className="w-10 h-10 text-white" />,
      title: "Planos de Saúde",
      description: "Defesa dos direitos dos usuários de planos de saúde e seguros.",
      details: {
        title: "Planos de Saúde",
        content: `
          <h3 class="text-xl font-bold mb-4 text-[#c5a263]">Direitos dos Usuários de Planos de Saúde</h3>
          <p class="mb-4">Defendemos seus direitos como usuário de plano de saúde, garantindo o acesso aos tratamentos e procedimentos necessários.</p>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Principais situações que atendemos:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <div>
                <strong>Negativa de cobertura:</strong> Quando o plano se recusa a cobrir exames, consultas ou cirurgias
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <div>
                <strong>Cancelamento unilateral:</strong> Rescisão do contrato sem justa causa
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <div>
                <strong>Reajustes abusivos:</strong> Aumentos de mensalidade acima do permitido
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              <div>
                <strong>Carências abusivas:</strong> Períodos de carência superiores ao legal
              </div>
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Tipos de planos que defendemos:</h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Planos individuais e familiares
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Planos empresariais/coletivos
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Planos odontológicos
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Seguros saúde
            </li>
          </ul>
          
          <h4 class="font-bold mb-3 text-[#c5a263]">Como podemos ajudar:</h4>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Análise do contrato e identificação de cláusulas abusivas
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Negociação extrajudicial com a operadora
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Ações judiciais para garantir cobertura
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Pedidos de urgência e tutelas antecipadas
            </li>
            <li class="flex items-start">
              <span class="text-[#c5a263] mr-2">•</span>
              Indenização por danos morais e materiais
            </li>
          </ul>
          
          <p class="text-[#c5a263] font-semibold">Seu plano de saúde está negando cobertura? Entre em contato conosco!</p>
        `,
      },
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5581999206991?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20falar%20com%20o%20especialista"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
      </div>

      {/* Service Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-[#5c0f1a] to-[#4a0c15] text-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-[#c5a263]">{services[selectedService].details.title}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-white hover:text-[#c5a263] transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div
                className="text-white leading-relaxed"
                dangerouslySetInnerHTML={{ __html: services[selectedService].details.content }}
              />
              <div className="mt-8 text-center">
                <a
                  href="https://wa.me/5581999206991?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20falar%20com%20o%20especialista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#c5a263] to-[#a08850] hover:from-[#a08850] hover:to-[#8b7340] text-black font-bold py-4 px-8 rounded-full inline-flex items-center text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Fale conosco agora pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5c0f1a] to-[#4a0c15] text-white py-12 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Image
              src="/images/santana-silva-logo.png"
              alt="Santana e Silva Advogados"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Advocacia especializada em Direito Previdenciário</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Contamos com uma ampla experiência, atuando de forma ágil e segura, assessorando em todas as etapas do
            processo.
          </p>
          <a
            href="https://wa.me/5581999206991?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20falar%20com%20o%20especialista"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#c5a263] to-[#a08850] hover:from-[#a08850] hover:to-[#8b7340] text-black font-bold py-4 px-8 rounded-full inline-flex items-center text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Fale conosco agora pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Como podemos te ajudar?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#5c0f1a] to-[#4a0c15] text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => setSelectedService(index)}
              >
                <div className="block p-8 text-center">
                  <div className="bg-gradient-to-br from-[#c5a263] to-[#a08850] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                  <div className="mt-4 text-[#c5a263] font-semibold">Clique para saber mais →</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Precisa de um advogado Previdenciário?</h2>
          <p className="text-xl mb-10">Clique no botão abaixo e fale conosco agora pelo WhatsApp</p>
          <a
            href="https://wa.me/5581999206991?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20falar%20com%20o%20especialista"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#c5a263] to-[#a08850] hover:from-[#a08850] hover:to-[#8b7340] text-black font-bold py-4 px-8 rounded-full inline-flex items-center text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Fale conosco agora pelo WhatsApp
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-[#5c0f1a] to-[#4a0c15] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#c5a263] mb-8">Santana e Silva Advogados</h2>
          <p className="text-lg mb-6">OAB/PE 60.675</p>
          <p className="text-xl max-w-3xl mx-auto">
            Escritório especializado em Direito Previdenciário, oferecendo assessoria jurídica completa e personalizada
            para garantir que nossos clientes tenham acesso aos benefícios que lhes são devidos por direito.
          </p>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Como trabalhamos</h2>

          <div className="space-y-16">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#5c0f1a] to-[#4a0c15] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Encontro presencial ou online</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Após enviar sua mensagem e enviar sua situação, responderemos após criteriosa avaliação, quando te
                ouviremos e identificaremos todo os eventuais direitos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#5c0f1a] to-[#4a0c15] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Contratação</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Sendo necessário pedido no INSS ou ação judicial, faremos a contratação o contrato será assinado por
                todas as partes, e após o envio do documentos, será realizado protocolo de forma rápida.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-[#c5a263] group">
                <Image
                  src="/images/advogados-edited.jpg"
                  alt="Equipe Santana e Silva Advogados"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 filter brightness-105 contrast-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Acompanhamento</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                De forma online ou presencial sem nenhuma burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-[#5c0f1a] to-[#4a0c15] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contato</h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Praça+da+Independência,+29,+Santo+Antônio,+Recife-PE,+50010-300"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2847284469!2d-34.87944892404!3d-8.063194791946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a5f0c8b5c7%3A0x4b2b4b4b4b4b4b4b!2sPra%C3%A7a%20da%20Independ%C3%AAncia%2C%20Santo%20Ant%C3%B4nio%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1686580000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
                ></iframe>
              </a>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p>(81) 99920-6991</p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p>(81) 99920-6991</p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-4"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p>santanaesilva.prev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <div>
                  <h3 className="font-semibold">Instagram</h3>
                  <p>@santanaesilva.adv</p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-4"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p>Praça da Independência, 29, EDF Brasilar, Sala 1204, Santo Antônio, Recife-PE, 50010-300</p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://wa.me/5581999206991?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20falar%20com%20o%20especialista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#c5a263] to-[#a08850] hover:from-[#a08850] hover:to-[#8b7340] text-black font-bold py-4 px-8 rounded-full inline-flex items-center text-lg w-full justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Fale conosco agora pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Santana e Silva Advogados © TODOS OS DIREITOS RESERVADOS</p>
          <p className="text-sm mt-2 text-gray-400">Esse site não faz parte do Google LLC nem do Facebook Inc.</p>
        </div>
      </footer>
    </div>
  )
}
