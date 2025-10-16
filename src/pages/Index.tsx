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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/f4d986e4-8ffe-4745-bd23-95ccf4253271.png" 
              alt="AYA Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold gradient-text">K-POP GIRLS DANCE</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Расписание</a>
            <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">Преподаватели</a>
            <a href="#price" className="text-sm font-medium hover:text-primary transition-colors">Стоимость</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block gradient-pink-purple text-white border-0">
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
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="gradient-text">K-POP GIRLS</span>
                <br />
                <span className="text-gray-900">DANCE</span>
              </h1>
              <p className="text-2xl font-bold text-primary">
                Зажги сцену в стиле K-Pop!
              </p>
              <p className="text-xl text-gray-700 font-medium">
                Ритм сердца, страсть танца, стиль K-Pop!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-pink-purple text-white text-lg px-8 py-6 border-0">
                  Пробное занятие
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary">
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
                  <div className="text-4xl font-black gradient-text">20+</div>
                  <div className="text-sm text-gray-600">Постановок</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 gradient-pink-purple opacity-20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/aab632e0-66c9-4955-af02-08a9825d4a9c.jpg"
                alt="K-Pop Dance Group"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
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
            <h2 className="text-5xl mb-4 gradient-text font-black">Наши преподаватели</h2>
            <p className="text-xl text-gray-600">Профессионалы своего дела</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary overflow-hidden">
              <div className="relative h-80">
                <img 
                  src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/32aea2dd-e13d-4f3a-bc1b-c4853a70e4df.jpg"
                  alt="Михайлова Айалена Айааловна"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-3xl gradient-text">Михайлова Айалена Айааловна</CardTitle>
                <CardDescription className="text-lg">Руководитель и главный хореограф</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span>Мастер спорта по современным танцам</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Music" className="text-primary" size={24} />
                  <span>Специализация: K-Pop хореография</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-primary" size={24} />
                  <span>Более 100 выпускниц</span>
                </div>
              </CardContent>
            </Card>
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
                  <div className="text-6xl font-black gradient-text mb-2">20 000 ₽</div>
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
                src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/47e7d04e-3603-4c9b-be93-f04895697441.jpg"
                alt="Dance Class"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Icon name="Play" className="text-white" size={64} />
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/0550b66a-bf6a-4886-bfe7-56c53fe0412e.jpg"
                alt="Dance Group"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/5c52f61f-dde1-4751-a9fb-6c60b1f9bb35/files/32aea2dd-e13d-4f3a-bc1b-c4853a70e4df.jpg"
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