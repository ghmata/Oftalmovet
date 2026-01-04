import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { blogPosts } from "./Blog";

const blogContent: Record<string, { content: React.ReactNode }> = {
  "problemas-oculares-sazonais": {
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Os animais de estimação são membros valiosos de nossas famílias, e é essencial cuidar de sua saúde ocular. No entanto, assim como os humanos, os animais de estimação também podem sofrer de problemas oculares sazonais. Esses problemas oculares são mais comuns em determinadas épocas do ano e podem afetar a visão e o conforto dos animais de estimação.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Pontos Importantes sobre Problemas Oculares Sazonais
        </h2>
        <ul className="space-y-3 mb-6">
          {[
            "Os problemas oculares sazonais em animais de estimação são mais comuns durante certas estações do ano, como a primavera e o verão",
            "Animais de estimação de todas as raças e idades podem ser afetados por esses problemas oculares",
            "Os sintomas podem variar, incluindo vermelhidão, coceira, lacrimejamento excessivo e irritação ocular",
            "Alguns animais podem desenvolver alergias sazonais que afetam seus olhos",
            "O diagnóstico e o tratamento adequados são essenciais para garantir o bem-estar",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Identificação dos Problemas Oculares Sazonais
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          A identificação precoce dos problemas oculares sazonais em animais de estimação é fundamental para garantir um tratamento adequado. Aqui estão algumas dicas para identificar essas condições:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Observe os sintomas: Fique atento a sinais como vermelhidão nos olhos, coceira excessiva, secreção ocular anormal, lacrimejamento constante e irritação",
            "Examine os olhos: Realize uma inspeção visual cuidadosa dos olhos do seu animal de estimação. Verifique se há vermelhidão, inchaço ou descarga ocular",
            "Consulte um veterinário: Ao notar sintomas, agende uma consulta com um veterinário especializado em oftalmologia animal",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Manejo dos Problemas Oculares Sazonais
        </h2>
        <ul className="space-y-3 mb-6">
          {[
            "Limpeza regular: Use soluções oftálmicas recomendadas pelo veterinário",
            "Evite alérgenos: Minimize a exposição a pólen e ácaros",
            "Uso de colírios: Siga rigorosamente as instruções do veterinário",
            "Proteção contra luz solar: Use óculos de sol para pets ou mantenha-os em áreas com sombra",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Prevenção e Cuidado Contínuo
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Manter um ambiente limpo e higiênico para seu animal de estimação é essencial para prevenir problemas oculares. Uma dieta equilibrada e saudável também desempenha um papel crucial na saúde ocular.
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Vitamina A: Presente em alimentos como cenouras, espinafre e fígado",
            "Ômega-3: Encontrado em peixes como salmão e sardinha",
            "Antioxidantes: Frutas e legumes frescos como mirtilos e brócolis",
            "Consultas veterinárias regulares para exames oculares",
            "Exercício físico adequado para manter boa circulação e saúde dos olhos",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Os problemas oculares sazonais podem ser uma preocupação para os animais de estimação, mas com a identificação precoce e o manejo adequado, é possível proporcionar alívio e melhorar a qualidade de vida desses companheiros de quatro patas. Lembre-se de observar os sintomas, realizar exames visuais regulares e consultar um veterinário especializado em oftalmologia animal. Com cuidado e atenção, podemos garantir a saúde ocular dos nossos amados animais de estimação durante todas as estações do ano.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Benefícios da Prevenção e Cuidado Ocular
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          É crucial estar atento à saúde ocular de seu animal de estimação, independentemente da estação do ano. Além de identificar e manejar os problemas oculares sazonais, a prevenção e o cuidado contínuo são fundamentais para garantir a visão e o conforto de seu amiguinho peludo.
        </p>

        <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
          Mantenha um Ambiente Limpo e Higiênico
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Manter um ambiente limpo e higiênico para seu animal de estimação é essencial para prevenir problemas oculares. Aqui estão algumas dicas:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            Limpe regularmente a área ao redor dos olhos do seu animal de estimação com um pano macio e úmido.
          </li>
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            Evite o acúmulo de sujeira, poeira e outros irritantes ao redor da área dos olhos.
          </li>
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            Certifique-se de que a cama do seu animal de estimação seja limpa e livre de ácaros ou alérgenos.
          </li>
        </ul>

        <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
          Alimentação Saudável para Olhos Saudáveis
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Uma dieta equilibrada e saudável também desempenha um papel crucial na saúde ocular de seu animal de estimação. Certifique-se de fornecer uma alimentação adequada e nutritiva, que inclua os seguintes nutrientes benéficos para os olhos:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <strong>Vitamina A:</strong> Presente em alimentos como cenouras, espinafre e fígado, a vitamina A é essencial para a saúde ocular.
          </li>
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <strong>Ômega-3:</strong> Encontrado em peixes como salmão e sardinha, o ômega-3 ajuda a manter a saúde dos olhos.
          </li>
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <strong>Antioxidantes:</strong> Frutas e legumes frescos, como mirtilos e brócolis, são ricos em antioxidantes que protegem os olhos contra danos causados por radicais livres.
          </li>
        </ul>

        <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
          Continuando o Cuidado Ocular ao Longo do Ano
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Embora os problemas oculares sazonais sejam mais comuns em determinadas épocas do ano, é importante manter o cuidado ocular de seu animal de estimação durante todo o ano. Aqui estão algumas dicas adicionais:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <strong>Realize consultas veterinárias regulares:</strong> Agende visitas periódicas ao veterinário para exames oculares e check-ups gerais. O veterinário poderá detectar qualquer problema ocular em estágio inicial e fornecer orientações específicas para o cuidado ocular contínuo.
          </li>
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <strong>Estimule o exercício físico:</strong> O exercício regular é benéfico para a saúde geral de seu animal de estimação, incluindo a saúde ocular. Brincadeiras ao ar livre e atividades que estimulem o movimento ajudam a manter uma circulação sanguínea adequada e a saúde dos olhos.
          </li>
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <strong>Evite produtos químicos irritantes:</strong> Esteja atento aos produtos químicos presentes em produtos de limpeza doméstica, sprays de ambiente e outros produtos que possam entrar em contato com os olhos de seu animal de estimação. Esses produtos podem causar irritação e danos aos olhos.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Lembre-se de que a saúde ocular de seu animal de estimação é uma responsabilidade contínua. Ao adotar uma abordagem preventiva e seguir as orientações do veterinário, você estará fornecendo o melhor cuidado possível para os olhos de seu amado animal de estimação.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Conclusão
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A saúde ocular dos animais de estimação é uma preocupação importante para seus tutores atenciosos. A identificação e o manejo adequados dos problemas oculares sazonais são essenciais para garantir o bem-estar e a qualidade de vida dos animais de estimação durante diferentes épocas do ano.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Neste artigo, discutimos a identificação e o manejo dos problemas oculares sazonais em animais de estimação. Abordamos a importância da identificação precoce dos sintomas, a busca por atendimento veterinário especializado e a implementação de estratégias de manejo, como limpeza regular, evitando alérgenos e seguindo as orientações do veterinário.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Além disso, destacamos a importância contínua da prevenção e do cuidado ocular em todas as estações do ano. Manter um ambiente limpo, uma alimentação saudável e realizar consultas veterinárias regulares são medidas cruciais para garantir a saúde ocular de seu animal de estimação.
        </p>

        <div className="bg-accent/50 p-6 rounded-xl mt-8">
          <p className="text-foreground font-medium">
            Lembre-se de que, como tutor responsável, você desempenha um papel fundamental no cuidado ocular de seu animal de estimação. Observar atentamente os sintomas, buscar ajuda profissional e adotar medidas preventivas ajudarão a garantir que seus animais de estimação tenham olhos saudáveis e uma vida feliz e confortável. A saúde ocular é um aspecto vital do bem-estar geral dos animais de estimação. Cuide dos olhos de seu companheiro peludo e desfrute de muitos momentos de alegria e companheirismo juntos!
          </p>
        </div>
      </>
    ),
  },
  "desordens-hereditarias": {
    content: (
      <>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Introdução
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          A saúde ocular é fundamental para o bem-estar dos cães, e as desordens hereditárias e genéticas podem ter um impacto significativo nessa área. Neste artigo, exploraremos as desordens mais comuns em raças caninas e como elas afetam os olhos dos animais.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Desordens hereditárias e genéticas comuns em raças caninas
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As seguintes desordens oculares são frequentemente encontradas em raças caninas:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Catarata</h3>
            <p className="text-muted-foreground">
              A catarata é uma opacidade do cristalino do olho, que pode resultar em perda parcial ou total da visão. É uma condição hereditária em algumas raças caninas e pode ser tratada com cirurgia.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Atrofia progressiva da retina</h3>
            <p className="text-muted-foreground">
              A atrofia progressiva da retina é uma condição em que as células da retina degeneram ao longo do tempo, levando à perda progressiva da visão. É uma desordem genética que afeta várias raças caninas e atualmente não tem cura.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Displasia da retina</h3>
            <p className="text-muted-foreground">
              A displasia da retina é caracterizada pelo desenvolvimento anormal da retina, afetando a função visual do cão. É mais comum em certas raças caninas e pode ser diagnosticada por meio de exames oftalmológicos.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Glaucoma</h3>
            <p className="text-muted-foreground">
              O glaucoma é uma doença ocular que resulta em aumento da pressão intraocular. Pode ser hereditário em algumas raças caninas e requer tratamento imediato para evitar danos irreversíveis à visão.
            </p>
          </div>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Diagnóstico de desordens hereditárias e genéticas oculares
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          O diagnóstico precoce e preciso das desordens oculares em raças caninas é essencial. Os seguintes métodos são utilizados:
        </p>

        <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
          Exames oftalmológicos específicos para raças caninas
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Exames oftalmológicos especializados podem identificar sinais precoces de desordens oculares em raças caninas. Veterinários especializados podem realizar exames como o teste do reflexo pupilar, tonometria e avaliação da retina.
        </p>

        <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
          Testes genéticos
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Testes genéticos são uma ferramenta importante para identificar genes associados a desordens hereditárias em cães. Esses testes podem ajudar os criadores a tomar decisões informadas sobre a reprodução e minimizar o risco de transmitir doenças oculares para as próximas gerações.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Manejo e tratamento das desordens oculares em cães
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          O tratamento das desordens oculares em cães depende da condição específica e pode envolver abordagens cirúrgicas ou não cirúrgicas.
        </p>

        <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
          Opções de tratamento para diferentes condições oculares
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          As opções de tratamento podem incluir medicamentos tópicos, colírios, cirurgias corretivas, remoção de catarata e terapias complementares. Um veterinário oftalmologista poderá recomendar a melhor abordagem para cada caso.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Prevenção e medidas preventivas
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A prevenção é crucial para minimizar o impacto das desordens hereditárias e genéticas na saúde ocular das raças caninas.
        </p>

        <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
          Criadores responsáveis e seleção genética
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Criadores responsáveis devem considerar cuidadosamente a saúde ocular ao selecionar cães para reprodução. Evitar acasalamentos entre animais portadores de doenças oculares pode reduzir a incidência de desordens genéticas em futuras gerações.
        </p>

        <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
          Programas de triagem ocular
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Programas de triagem ocular podem ajudar a identificar cães com desordens oculares antes da reprodução. Esses programas geralmente envolvem exames oftalmológicos especializados realizados por veterinários certificados.
        </p>

        <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
          Monitoramento regular da saúde ocular em raças caninas predispostas
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Raças caninas predispostas a desordens oculares devem ser submetidas a monitoramento regular da saúde ocular. Isso pode envolver exames oftalmológicos periódicos para detectar precocemente qualquer sinal de doença.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Compreender as desordens hereditárias e genéticas em raças caninas e sua influência na saúde ocular é essencial para garantir o bem-estar desses animais. Ao tomar medidas preventivas e buscar tratamento adequado, é possível minimizar o impacto dessas condições e promover uma melhor qualidade de vida para os cães. Consulte sempre um veterinário especializado para obter orientação personalizada para o seu cão.
        </p>

        <div className="bg-accent/50 p-6 rounded-xl mt-8">
          <p className="text-foreground font-medium">
            Esperamos que este artigo tenha fornecido informações valiosas sobre o impacto das desordens hereditárias e genéticas na saúde ocular das raças caninas. Cuide dos olhos do seu cão e ajude a manter sua visão em ótimas condições.
          </p>
        </div>
      </>
    ),
  },
  "principais-doencas-oculares": {
    content: (
      <>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Introdução
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Nesta postagem, abordaremos as principais doenças oculares que afetam cães e gatos. As doenças oculares podem causar desconforto e até mesmo comprometer a visão dos animais de estimação. É essencial aprender a reconhecer os sinais e tomar medidas para prevenir e tratar essas condições. Vamos explorar cada uma dessas doenças em detalhes.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          1. Catarata em cães e gatos
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A catarata é uma condição ocular comum em animais de estimação, caracterizada pela opacidade do cristalino. Os sintomas incluem visão turva, olhos nublados e eventualmente perda de visão. O diagnóstico é feito por um veterinário através de exames oculares. Esta é uma das principais doenças oculares que afetam cães e gatos.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          O tratamento pode envolver cirurgia de remoção da catarata. A prevenção é difícil, mas garantir uma dieta equilibrada e evitar fatores de risco pode ajudar a reduzir as chances de desenvolvimento da doença.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          2. Glaucoma em cães e gatos
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          O glaucoma é uma condição ocular séria que resulta em aumento da pressão intraocular. Os sintomas incluem olhos vermelhos, dor, lacrimejamento excessivo e dilatação da pupila. O diagnóstico é realizado pelo veterinário por meio de medição da pressão ocular.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          O tratamento pode envolver colírios para reduzir a pressão ou até mesmo cirurgia. A prevenção é difícil, mas a detecção precoce e o tratamento imediato são essenciais para evitar danos permanentes à visão.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          3. Conjuntivite em cães e gatos
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A conjuntivite é uma inflamação da conjuntiva, uma das principais doenças oculares que afetam cães e gatos, a membrana que cobre a parte branca do olho. Os sintomas incluem vermelhidão, coceira, secreção ocular e sensibilidade à luz.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          O diagnóstico é feito pelo veterinário através de exames oculares e análise da secreção ocular. O tratamento pode envolver colírios antibióticos ou anti-inflamatórios. A prevenção pode ser alcançada mantendo a higiene adequada dos olhos e evitando exposição a agentes irritantes.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          4. Outra doença ocular em cães e gatos: Úlcera corneana
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A úlcera corneana é uma lesão na córnea, a camada externa transparente do olho. Os sintomas incluem olho vermelho, lacrimejamento, piscar excessivo e sensibilidade à luz. O diagnóstico é realizado pelo veterinário através de exames oculares detalhados.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          O tratamento pode envolver colírios antibióticos, analgésicos e proteção ocular. A prevenção pode ser alcançada evitando traumas oculares e irritações.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          5. Ceratoconjuntivite seca em animais
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A ceratoconjuntivite seca é uma condição na qual as glândulas lacrimais não produzem lágrimas suficientes para manter a superfície ocular úmida. Os sintomas incluem olhos vermelhos, secreção mucosa, coceira e irritação.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          O diagnóstico é feito pelo veterinário através de exames oculares e testes de produção lacrimal. O tratamento pode envolver colírios lubrificantes e medicamentos imunossupressores. A prevenção é difícil, mas o manejo adequado pode ajudar a controlar os sintomas.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          6. Detecção precoce de doenças oculares em cães e gatos
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          A detecção precoce de doenças oculares em cães e gatos é crucial para um tratamento eficaz. Fique atento a qualquer mudança nos olhos do seu animal de estimação, como vermelhidão, inchaço, secreção ou alterações na visão. Realize visitas regulares ao veterinário para exames oculares e mantenha uma rotina de cuidados com os olhos, incluindo limpeza e higiene adequada.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          Conclusão
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Manter a saúde ocular dos seus cães e gatos é fundamental para garantir seu bem-estar geral. Ao reconhecer os sinais de doenças oculares e agir rapidamente, você pode ajudar a preservar a visão e proporcionar uma vida mais saudável aos seus animais de estimação. Lembre-se sempre de consultar um veterinário para obter um diagnóstico preciso e recomendações de tratamento adequadas.
        </p>

        <div className="bg-accent/50 p-6 rounded-xl mt-8">
          <p className="text-foreground font-medium">
            Com cuidados preventivos e atenção constante, você pode contribuir para a saúde ocular do seu amado animal de estimação.
          </p>
        </div>
      </>
    ),
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);
  const content = id ? blogContent[id] : null;

  if (!post || !content) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
            Artigo não encontrado
          </h1>
          <Button asChild>
            <Link to="/blog">Voltar ao Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-accent via-background to-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Dr. Leonardo F. Balthazar
              </div>
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
              {post.category}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-elevated"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto prose prose-lg"
          >
            {content.content}

            {/* Share & CTA */}
            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
                Compartilhar artigo
              </button>
              <Button variant="hero" asChild>
                <a
                  href="https://wa.me/5519983989800?text=Olá, vim pelo site! Gostaria de atendimento Oftalmológico para meu PET"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
