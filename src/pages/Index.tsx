import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: 80, label: "Загрязнённых рек в мире", suffix: "%" },
    { value: 2, label: "Млн тонн пластика попадает в реки", suffix: "М" },
    { value: 40, label: "Снижение рыбных популяций", suffix: "%" },
  ];

  const solutions = [
    {
      icon: "Droplets",
      title: "Очистка водоёмов",
      description: "Регулярные акции по очистке берегов и водных путей от мусора и загрязнений",
    },
    {
      icon: "Recycle",
      title: "Переработка отходов",
      description: "Внедрение систем раздельного сбора и переработки пластика и промышленных отходов",
    },
    {
      icon: "Leaf",
      title: "Экологическое просвещение",
      description: "Обучение населения правильному обращению с отходами и сохранению водных ресурсов",
    },
    {
      icon: "Shield",
      title: "Законодательная защита",
      description: "Ужесточение норм сброса промышленных отходов и контроль экологических стандартов",
    },
  ];

  const facts = [
    {
      title: "Пластик в океанах",
      text: "Анна собирает доказательства загрязнения и обращается в местные органы власти.",
      impact: "критический",
    },
    {
      title: "Промышленные отходы",
      text: "70% неочищенных промышленных стоков сбрасывается непосредственно в реки",
      impact: "высокий",
    },
    {
      title: "Угроза питьевой воде",
      text: "Более 2 миллиардов людей не имеют доступа к чистой питьевой воде",
      impact: "критический",
    },
    {
      title: "Гибель экосистем",
      text: "40% рыбных популяций в пресноводных водоёмах сократились за последние 50 лет",
      impact: "высокий",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7)), url('https://cdn.poehali.dev/projects/132a2202-6e77-4f23-a46e-280b8ee18e41/files/c97589c6-b53d-4e4d-bfd4-913af69708a5.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Кризис наших рек
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
            Документальное исследование о загрязнении водных ресурсов и путях решения экологической катастрофы
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-white" />
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Масштаб проблемы
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Промышленные выбросы, пластиковые отходы и сельскохозяйственные химикаты превращают источники жизни в зоны экологического бедствия
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl font-bold text-primary mb-4">
                  {animateStats ? stat.value : 0}
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground text-lg">{stat.label}</p>
                <Progress
                  value={animateStats ? stat.value : 0}
                  className="mt-4 h-2"
                />
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/files/8893e596-72cd-47e6-a2d8-5edd4aacbc12.jpeg"
                alt="Эколог исследует воду"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold text-foreground">
                Обнаружение проблемы
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <Icon name="AlertTriangle" className="text-destructive" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Эпизод 1: «Загрязнение реки»</h4>
                    <p className="text-muted-foreground">
                      Молодая эколог Анна обнаруживает, что местная река, которая является источником воды для деревни, загрязнена химическими отходами. Она находит следы утечки с ближайшего завода.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <Icon name="Users" className="text-destructive" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Персонажи</h4>
                    <p className="text-muted-foreground">
                      • Анна — эколог, решительная и целеустремленная.<br/>
                      • Михаил — директор завода, который отрицает свою вину.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Эпизод 2: «Борьба за правду»
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Документально подтверждённые данные о состоянии мировых водных ресурсов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-l-4"
                style={{
                  borderLeftColor: fact.impact === "критический" ? "#F97316" : "#0EA5E9",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {fact.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      fact.impact === "критический"
                        ? "bg-secondary/20 text-secondary"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {fact.impact}
                  </span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {fact.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Пути решения
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Конкретные действия, которые помогут восстановить чистоту рек и сохранить водные ресурсы для будущих поколений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon name={solution.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="h-[500px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.3), rgba(14, 165, 233, 0.3)), url('https://cdn.poehali.dev/projects/132a2202-6e77-4f23-a46e-280b8ee18e41/files/575be459-10c3-4ffa-af5f-1d3754db25ec.jpg')`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-sm p-12 rounded-2xl max-w-2xl text-center shadow-xl">
                <Icon name="Heart" className="text-primary mx-auto mb-6" size={48} />
                <h3 className="text-4xl font-bold mb-4 text-foreground">
                  Будущее в наших руках
                </h3>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Каждое действие имеет значение. Вместе мы можем остановить загрязнение рек и восстановить чистоту водных ресурсов планеты.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
                    Присоединиться к акции
                  </button>
                  <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors">
                    Узнать больше
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Icon name="Waves" className="mx-auto text-primary" size={48} />
          </div>
          <p className="text-lg text-gray-300 mb-4">
            Документальный проект о сохранении водных ресурсов
          </p>
          <p className="text-sm text-gray-400">
            © 2025 Чистые Реки. Вместе за экологию планеты.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;