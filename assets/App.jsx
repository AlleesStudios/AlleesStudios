import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { CheckCircle, Star, Users, TrendingUp, Brain, Video, Lightbulb, Shield, Clock, Zap } from 'lucide-react';
import guiaVideosVirais from './assets/Guia_Videos_Virais_IA_capa_16_9.png';
import bonusIALocal from './assets/Bonus_IA_No_PC_capa_16_9.png';
import bonusPrompts from './assets/Bonus_150_Prompts_capa_16_9.png';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-lg px-6 py-2">
            🔥 OFERTA LIMITADA
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Desvende o Poder da <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IA</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Crie Vídeos Virais, Tenha Sua IA no PC e Domine 150 Prompts Essenciais!
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Transforme seu Conteúdo, Multiplique seu Engajamento e Tenha o Poder da IA no Seu Próprio Computador, Sem Complicações.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            🚀 GARANTIR MEU PACOTE AGORA!
          </Button>
          <p className="text-sm text-gray-400 mt-4">✅ Acesso Imediato • ✅ Garantia de 7 dias • ✅ Suporte Completo</p>
        </div>
      </header>

      {/* Problema */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Você já se perguntou por que alguns vídeos explodem na internet?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-green-900/30 border-green-500/50">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Conteúdo Magnético</h4>
                  <p className="text-gray-300 text-sm">Criação de vídeos que prendem a atenção do início ao fim</p>
                </CardContent>
              </Card>
              <Card className="bg-green-900/30 border-green-500/50">
                <CardContent className="p-6 text-center">
                  <Brain className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Estratégia Inteligente</h4>
                  <p className="text-gray-300 text-sm">Uso de IA para otimizar a criação e distribuição</p>
                </CardContent>
              </Card>
              <Card className="bg-green-900/30 border-green-500/50">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Prompts Poderosos</h4>
                  <p className="text-gray-300 text-sm">Geração de ideias originais e engajadoras com facilidade</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-xl text-gray-200">
              <strong className="text-yellow-400">O segredo está na combinação perfeita entre criatividade e as ferramentas certas.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              A Solução Completa Está Aqui!
            </h3>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Nosso <strong className="text-cyan-400">Pacote Mestre da IA</strong> é o atalho para o sucesso no mundo digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Produto 1 */}
            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <img src={guiaVideosVirais} alt="Guia de Vídeos Virais com IA" className="w-full rounded-lg mb-4" />
                <CardTitle className="text-white text-xl">Guia de Vídeos Virais com IA</CardTitle>
                <CardDescription className="text-gray-300">
                  Aprenda o passo a passo exato para criar vídeos que viralizam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Ferramentas gratuitas e pagas</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Exemplos de prompts virais</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Estratégias de engajamento</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Otimização para plataformas</li>
                </ul>
              </CardContent>
            </Card>

            {/* Produto 2 */}
            <Card className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border-green-500/50 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <Badge className="bg-orange-500 text-white mb-2 w-fit">BÔNUS EXCLUSIVO</Badge>
                <img src={bonusIALocal} alt="IA Local no PC" className="w-full rounded-lg mb-4" />
                <CardTitle className="text-white text-xl">IA Local no PC</CardTitle>
                <CardDescription className="text-gray-300">
                  Monte sua própria IA no computador, de forma fácil e prática
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> 100% Privacidade garantida</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Funciona offline</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Instalação simplificada</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Economia de custos mensais</li>
                </ul>
              </CardContent>
            </Card>

            {/* Produto 3 */}
            <Card className="bg-gradient-to-br from-orange-900/50 to-red-900/50 border-orange-500/50 hover:border-orange-400 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <Badge className="bg-purple-500 text-white mb-2 w-fit">BÔNUS IMPERDÍVEL</Badge>
                <img src={bonusPrompts} alt="150 Prompts para Vídeos Virais" className="w-full rounded-lg mb-4" />
                <CardTitle className="text-white text-xl">150 Prompts para Vídeos Virais</CardTitle>
                <CardDescription className="text-gray-300">
                  Arsenal completo de prompts testados e aprovados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> 150 prompts categorizados</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> IAs recomendadas para cada um</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Nunca mais fique sem ideias</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Resultados comprovados</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              O Que Você Vai Conseguir
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Vídeos que Viralizam</h4>
              <p className="text-gray-300 text-sm">Crie conteúdo que realmente se destaca e prende a atenção</p>
            </div>
            <div className="text-center">
              <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Economia de Tempo</h4>
              <p className="text-gray-300 text-sm">A IA automatiza tarefas complexas, liberando você para a criatividade</p>
            </div>
            <div className="text-center">
              <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Controle Total</h4>
              <p className="text-gray-300 text-sm">Sua própria IA com privacidade e desempenho inigualáveis</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Mais Engajamento</h4>
              <p className="text-gray-300 text-sm">Multiplique seu alcance e construa sua autoridade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Resultados Comprovados
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4">
                  "Incrível! Meus vídeos começaram a viralizar depois que apliquei as técnicas do guia. O bônus da IA local foi um diferencial!"
                </p>
                <p className="text-cyan-400 font-semibold">- Maria Silva, Criadora de Conteúdo</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4">
                  "Os 150 prompts são uma mina de ouro! Nunca mais fiquei sem ideias para meus vídeos. Recomendo demais!"
                </p>
                <p className="text-cyan-400 font-semibold">- João Santos, Empreendedor Digital</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4">
                  "Economizei centenas de reais por mês com a IA local. O investimento se pagou em poucos dias!"
                </p>
                <p className="text-cyan-400 font-semibold">- Ana Costa, Influenciadora</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgência e Escassez */}
      <section className="py-16 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-red-500 text-white text-lg px-6 py-2">
            ⏰ OFERTA POR TEMPO LIMITADO
          </Badge>
          <h3 className="text-4xl font-bold text-white mb-6">
            Não Perca Esta Oportunidade Única!
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Este pacote completo poderia custar mais de R$ 500,00 se vendido separadamente. 
            Mas por tempo limitado, você tem acesso a tudo por apenas:
          </p>
          
          <div className="mb-8">
            <p className="text-gray-400 text-2xl line-through mb-2">De R$ 497,00</p>
            <p className="text-6xl font-bold text-green-400 mb-2">R$ 97,00</p>
            <p className="text-gray-300">ou 12x de R$ 8,08</p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-2xl px-16 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
          >
            🚀 GARANTIR MEU PACOTE AGORA!
          </Button>
          
          <div className="mt-8 flex justify-center items-center space-x-8 text-gray-300">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
              <span>Suporte Completo</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Como funciona o acesso aos materiais?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Após a confirmação do pagamento, você receberá imediatamente por email os links para download dos 3 PDFs: 
                  Guia de Vídeos Virais com IA, Bônus IA Local no PC e Bônus 150 Prompts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Preciso ter conhecimento técnico?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Não! Todos os materiais foram criados pensando em iniciantes. Explicamos tudo passo a passo, 
                  de forma simples e prática, para que qualquer pessoa possa aplicar.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Há garantia?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, 
                  devolvemos 100% do seu dinheiro, sem perguntas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Os prompts funcionam com qualquer IA?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Os 150 prompts foram testados e otimizados para as principais IAs do mercado. Além disso, 
                  indicamos qual IA usar para cada tipo de prompt, maximizando seus resultados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Transforme Seu Futuro Digital Hoje!
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Não deixe essa oportunidade passar. O futuro da criação de conteúdo está aqui, 
            e você pode ser parte dele hoje mesmo.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-2xl px-16 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            🚀 SIM, EU QUERO DOMINAR A IA!
          </Button>
          
          <p className="text-sm text-gray-400 mt-6">
            ✅ Pagamento 100% Seguro • ✅ Acesso Imediato • ✅ Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400">
          © 2024 Pacote Mestre da IA. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;

