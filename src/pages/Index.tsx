import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [applications, setApplications] = useState([
    { id: 1, name: "Иванова Мария", phone: "+7 (999) 123-45-67", date: "15.10.2024", status: "Новая" },
    { id: 2, name: "Петрова Анна", phone: "+7 (999) 234-56-78", date: "14.10.2024", status: "Обработана" },
    { id: 3, name: "Сидорова Елена", phone: "+7 (999) 345-67-89", date: "14.10.2024", status: "Новая" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newApp = {
      id: applications.length + 1,
      name: formData.name,
      phone: formData.phone,
      date: new Date().toLocaleDateString('ru-RU'),
      status: "Новая"
    };
    
    setApplications([newApp, ...applications]);
    
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const schedule = [
    { day: "Понедельник", time: "18:00 - 19:30", group: "Начинающие", level: "Beginner" },
    { day: "Понедельник", time: "19:30 - 21:00", group: "Продвинутые", level: "Advanced" },
    { day: "Среда", time: "18:00 - 19:30", group: "Начинающие", level: "Beginner" },
    { day: "Среда", time: "19:30 - 21:00", group: "Продвинутые", level: "Advanced" },
    { day: "Пятница", time: "18:00 - 19:30", group: "Средний уровень", level: "Intermediate" },
    { day: "Суббота", time: "12:00 - 13:30", group: "Начинающие", level: "Beginner" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 overflow-x-hidden">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 shadow-lg border-b-2 border-primary/20 kpop-glow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/f4d986e4-8ffe-4745-bd23-95ccf4253271.png" 
              alt="AYA Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold gradient-text kpop-text-shadow">K-POP GIRLS DANCE</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Расписание</a>
            <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">Преподаватели</a>
            <a href="#achievements" className="text-sm font-medium hover:text-primary transition-colors">Достижения</a>
            <a href="#price" className="text-sm font-medium hover:text-primary transition-colors">Стоимость</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block gradient-pink-purple text-white border-0 kpop-glow hover:scale-105 transition-transform">
            Записаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/f4d986e4-8ffe-4745-bd23-95ccf4253271.png" 
                  alt="AYA Logo" 
                  className="w-32 h-32 object-contain animate-float"
                />
              </div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="gradient-text kpop-text-shadow">K-POP GIRLS</span>
                <br />
                <span className="text-gray-900 kpop-text-shadow">DANCE</span>
              </h1>
              <p className="text-2xl font-bold text-primary">
                Зажги сцену в стиле K-Pop!
              </p>
              <p className="text-xl text-gray-700 font-medium">
                Ритм сердца, страсть танца, стиль K-Pop!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-pink-purple text-white text-lg px-8 py-6 border-0 kpop-glow animate-pulse-glow hover:scale-105 transition-transform">
                  Пробное занятие
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10 hover:scale-105 transition-all">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-black gradient-text">2+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-black gradient-text">30+</div>
                  <div className="text-sm text-gray-600">Учениц</div>
                </div>
                <div>
                  <div className="text-4xl font-black gradient-text">10+</div>
                  <div className="text-sm text-gray-600">Постановок</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 gradient-pink-purple opacity-30 blur-3xl rounded-full animate-pulse-glow"></div>
              <img 
                src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/a94be268-9cd4-484e-a433-5fd7d6bd93f0.jpg"
                alt="K-Pop Dance Group"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 shimmer pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-black gradient-text kpop-text-shadow">Почему K-POP танцы?</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-bold text-primary">K-POP</span> — это не просто танцы, это целая культура, которая захватила весь мир! 
                Миллионы поклонников следят за каждым движением <span className="font-bold">BLACKPINK</span>, <span className="font-bold">BTS</span>, <span className="font-bold">AESPA</span> и других легендарных групп.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Сегодня K-POP танцы — один из самых популярных стилей в мире! Каждый день миллионы видео с хореографией собирают миллиарды просмотров. 
                Это синхронность, энергия, харизма и невероятная пластика.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Мировой тренд</h3>
                    <p className="text-gray-600">K-POP покорил TikTok, Instagram и YouTube. Будь в центре трендов!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Энергия и стиль</h3>
                    <p className="text-gray-600">Яркая хореография, которая сочетает мощь, грацию и харизму айдолов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-gray-900" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Глобальное сообщество</h3>
                    <p className="text-gray-600">Присоединяйся к миллионам фанатов по всему миру!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-pink-purple opacity-20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/96d08840-0ddc-4878-b641-fffa41e3ae77.jpg"
                alt="K-Pop Idols Performance"
                className="relative rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <p className="text-4xl font-black gradient-text mb-2">1B+</p>
                <p className="text-sm text-gray-600">просмотров K-POP контента ежемесячно</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 gradient-text kpop-text-shadow">Dance Practice на наших занятиях</h2>
            <p className="text-xl text-gray-600">Изучай хореографию легендарных K-POP групп</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-2xl hover:-translate-y-2 neon-border kpop-glow">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-pink-purple flex items-center justify-center kpop-glow animate-pulse-glow">
                  <Icon name="Music" className="text-white" size={40} />
                </div>
                <CardTitle className="text-3xl gradient-text mb-2">BLACKPINK</CardTitle>
                <CardDescription className="text-base">Хиты: DDU-DU DDU-DU, How You Like That, Pink Venom</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span>Мощная энергетика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span>Женственные движения</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span>Iconic хореография</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                  <Icon name="Flame" className="text-white" size={40} />
                </div>
                <CardTitle className="text-3xl gradient-text mb-2">BTS</CardTitle>
                <CardDescription className="text-base">Хиты: Dynamite, Butter, ON</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={18} />
                    <span>Синхронность движений</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={18} />
                    <span>Сложная хореография</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={18} />
                    <span>Эмоциональность</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={40} />
                </div>
                <CardTitle className="text-3xl gradient-text mb-2">AESPA</CardTitle>
                <CardDescription className="text-base">Хиты: Next Level, Savage, Spicy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-cyan-500" size={18} />
                    <span>Футуристичный стиль</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-cyan-500" size={18} />
                    <span>Резкие движения</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-cyan-500" size={18} />
                    <span>Современная хореография</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary">
              <CardContent className="pt-8 pb-8">
                <Icon name="Trophy" className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">На занятиях ты научишься:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <Icon name="Star" className="text-primary mt-1" size={20} />
                    <span>Повторять движения твоих любимых айдолов</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Star" className="text-primary mt-1" size={20} />
                    <span>Танцевать синхронно в группе</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Star" className="text-primary mt-1" size={20} />
                    <span>Создавать собственные dance covers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Star" className="text-primary mt-1" size={20} />
                    <span>Выступать на сцене с командой</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 gradient-text">Расписание занятий</h2>
            <p className="text-xl text-gray-600">Выбери удобное время для тренировок</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{item.day}</CardTitle>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      item.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {item.level}
                    </div>
                  </div>
                  <CardDescription className="text-lg font-semibold text-primary">
                    <Icon name="Clock" size={16} className="inline mr-1" />
                    {item.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{item.group}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 gradient-text font-black kpop-text-shadow">Наши преподаватели</h2>
            <p className="text-xl text-gray-600">Профессионалы своего дела</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 neon-border">
              <div className="relative h-80">
                <img 
                  src="https://cdn.poehali.dev/files/e8ad7870-200a-45f3-a872-643e2c4a858c.jpeg"
                  alt="Михайлова Айалена Айааловна"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Михайлова Айалена Айааловна</CardTitle>
                <CardDescription className="text-base">Руководитель и главный хореограф</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-primary" size={20} />
                  <span className="text-sm">Мастер по K-POP танцам</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Music" className="text-primary" size={20} />
                  <span className="text-sm">K-Pop хореография</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-primary" size={20} />
                  <span className="text-sm">Более 30 выпускниц</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 neon-border">
              <div className="relative h-80">
                <img 
                  src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/af4470d4-8a17-4b57-a861-9ac07c79f532.jpg"
                  alt="Сон Наын"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Сон Наын</CardTitle>
                <CardDescription className="text-base">Хореограф K-POP направления</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Star" className="text-secondary" size={20} />
                  <span className="text-sm">5 лет опыта в K-POP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Music" className="text-secondary" size={20} />
                  <span className="text-sm">BLACKPINK, TWICE cover</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Trophy" className="text-secondary" size={20} />
                  <span className="text-sm">Победитель dance battle</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 neon-border">
              <div className="relative h-80">
                <img 
                  src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/ac538ca1-0a13-45d7-abcd-d17708b9081a.jpg"
                  alt="Сириус"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Сириус</CardTitle>
                <CardDescription className="text-base">Хореограф-постановщик</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Sparkles" className="text-accent" size={20} />
                  <span className="text-sm">Эксперт по girl crush</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Music" className="text-accent" size={20} />
                  <span className="text-sm">AESPA, IVE, NewJeans</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Heart" className="text-accent" size={20} />
                  <span className="text-sm">200+ учениц</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 shimmer pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Icon name="Trophy" className="text-yellow-500 animate-bounce" size={64} />
            </div>
            <h2 className="text-6xl font-black mb-4 gradient-text kpop-text-shadow">Наши достижения и победы!</h2>
            <p className="text-2xl text-gray-700 font-bold">Мы гордимся успехами наших учениц! 🏆</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-4 border-yellow-400 bg-gradient-to-br from-yellow-100 to-orange-100 hover:shadow-2xl transition-all hover:-translate-y-2 kpop-glow">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center animate-pulse-glow">
                  <Icon name="Trophy" className="text-white" size={40} />
                </div>
                <div className="text-5xl font-black gradient-text mb-2">15+</div>
                <p className="text-lg font-semibold text-gray-700">Побед в конкурсах</p>
              </CardContent>
            </Card>

            <Card className="border-4 border-pink-400 bg-gradient-to-br from-pink-100 to-purple-100 hover:shadow-2xl transition-all hover:-translate-y-2 kpop-glow">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center animate-pulse-glow">
                  <Icon name="Award" className="text-white" size={40} />
                </div>
                <div className="text-5xl font-black gradient-text mb-2">30+</div>
                <p className="text-lg font-semibold text-gray-700">Дипломов и наград</p>
              </CardContent>
            </Card>

            <Card className="border-4 border-blue-400 bg-gradient-to-br from-blue-100 to-cyan-100 hover:shadow-2xl transition-all hover:-translate-y-2 kpop-glow">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center animate-pulse-glow">
                  <Icon name="Star" className="text-white" size={40} />
                </div>
                <div className="text-5xl font-black gradient-text mb-2">50+</div>
                <p className="text-lg font-semibold text-gray-700">Выступлений на сцене</p>
              </CardContent>
            </Card>

            <Card className="border-4 border-green-400 bg-gradient-to-br from-green-100 to-emerald-100 hover:shadow-2xl transition-all hover:-translate-y-2 kpop-glow">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center animate-pulse-glow">
                  <Icon name="Users" className="text-white" size={40} />
                </div>
                <div className="text-5xl font-black gradient-text mb-2">200+</div>
                <p className="text-lg font-semibold text-gray-700">Счастливых выпускниц</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-4 border-primary neon-border overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/af5d4e8d-6980-49a3-a283-ece138179435.jpg"
                  alt="Награды"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white mb-2">🏆 Кубки и медали</h3>
                  <p className="text-white/90">Победы в крупнейших турнирах</p>
                </div>
              </div>
            </Card>

            <Card className="border-4 border-secondary neon-border overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/936caadd-40a8-4df0-a436-04607ed6613d.jpg"
                  alt="Выступления"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white mb-2">✨ Большие сцены</h3>
                  <p className="text-white/90">Выступления перед тысячами зрителей</p>
                </div>
              </div>
            </Card>

            <Card className="border-4 border-accent neon-border overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/424519f4-738d-4aca-80ee-a4afe6c01ea7.jpg"
                  alt="Дипломы"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white mb-2">📜 Дипломы</h3>
                  <p className="text-white/90">Сертификаты престижных конкурсов</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-primary/30">
            <h3 className="text-3xl font-black gradient-text text-center mb-8">🌟 Наши главные победы 2024</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                <Icon name="Medal" className="text-yellow-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-1">🥇 1 место - "K-POP Battle Yakutsk 2024"</h4>
                  <p className="text-gray-600">Лучшая групповая хореография BLACKPINK - "Pink Venom"</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                <Icon name="Medal" className="text-pink-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-1">🥇 1 место - "Dance Star Russia"</h4>
                  <p className="text-gray-600">Гран-при в номинации K-POP Dance Cover</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <Icon name="Medal" className="text-blue-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-1">🥈 2 место - "Asia Dance Championship"</h4>
                  <p className="text-gray-600">Международный конкурс в Южной Корее</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <Icon name="Trophy" className="text-green-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-1">🏆 Специальный приз - "Best Synchronization"</h4>
                  <p className="text-gray-600">За лучшую синхронность на "Moscow K-POP Festival"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-pink-purple text-white text-xl px-12 py-8 border-0 kpop-glow">
              Стать частью побед! 🚀
              <Icon name="Sparkles" size={24} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 gradient-text">Стоимость обучения</h2>
            <p className="text-xl text-gray-600">Доступные цены для всех</p>
          </div>
          <div className="max-w-lg mx-auto">
            <Card className="border-4 border-primary shadow-2xl">
              <CardHeader className="text-center gradient-pink-purple text-white py-8">
                <CardTitle className="text-4xl mb-2">Абонемент</CardTitle>
                <CardDescription className="text-white/90 text-lg">8 занятий в месяц</CardDescription>
              </CardHeader>
              <CardContent className="pt-8 pb-8">
                <div className="text-center mb-8">
                  <div className="text-6xl font-black gradient-text mb-2">10 000 ₽</div>
                  <div className="text-gray-600">в месяц</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>2 занятия в неделю по 1.5 часа</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Профессиональное оборудование</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Участие в отчетных концертах</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Индивидуальный подход</span>
                  </li>
                </ul>
                <Button className="w-full gradient-pink-purple text-white text-lg py-6 border-0">
                  Записаться на пробное
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 gradient-text">Фото и видео с занятий</h2>
            <p className="text-xl text-gray-600">Атмосфера наших тренировок</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/2a53ba5f-9a10-4338-88c3-e8b84ffc3765.jpg"
                alt="Dance Class"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Icon name="Play" className="text-white" size={64} />
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/678ae7a6-472a-4ba3-9226-573f0cb4aff1.jpg"
                alt="Dance Group"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/d6a8fccd-cc56-4444-8699-3c1431f64312.jpg"
                alt="Teacher"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 gradient-text">Запись на пробное занятие</h2>
            <p className="text-xl text-gray-600">Заполни форму и мы свяжемся с тобой</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="text-lg py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="text-lg py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение (необязательно)</Label>
                    <Textarea 
                      id="message"
                      placeholder="Расскажите о себе..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-pink-purple text-white text-lg py-6 border-0">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>

                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-2xl font-bold text-center mb-6 gradient-text">Полученные заявки</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-primary/20">
                          <th className="text-left py-3 px-4 font-bold">Имя</th>
                          <th className="text-left py-3 px-4 font-bold">Телефон</th>
                          <th className="text-left py-3 px-4 font-bold">Дата</th>
                          <th className="text-left py-3 px-4 font-bold">Статус</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app) => (
                          <tr key={app.id} className="border-b hover:bg-primary/5 transition-colors">
                            <td className="py-3 px-4">{app.name}</td>
                            <td className="py-3 px-4">{app.phone}</td>
                            <td className="py-3 px-4">{app.date}</td>
                            <td className="py-3 px-4">
                              <span className={`px-3 py-1 rounded-full text-sm ${
                                app.status === 'Новая' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-gray-100 text-gray-700'
                              }`}>
                                {app.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t space-y-4">
                  <h3 className="text-2xl font-bold text-center mb-6">Контакты</h3>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <span className="text-lg">г. Якутск</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <a href="tel:89644277557" className="text-lg hover:text-primary transition-colors">
                      +7 (964) 427-75-57
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="User" className="text-primary" size={24} />
                    <span className="text-lg">Михайлова Айалена Айааловна</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-black gradient-text mb-2">K-POP GIRLS DANCE</h3>
            <p className="text-gray-400">Зажги сцену в стиле K-Pop!</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={32} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={32} />
            </a>
            <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" className="hover:text-primary transition-colors">
              <Icon name="Send" size={32} />
            </a>
          </div>
          <p className="text-gray-500">© 2024 K-Pop Girls Dance. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;