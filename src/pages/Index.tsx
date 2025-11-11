import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'history', label: 'История', icon: 'BookOpen' },
    { id: 'traditions', label: 'Традиции', icon: 'Users' },
    { id: 'music', label: 'Музыка Раи', icon: 'Music' },
    { id: 'cuisine', label: 'Кухня', icon: 'UtensilsCrossed' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
  ];

  const musicVideos = [
    { title: 'Cheb Khaled - Aicha', url: 'https://www.youtube.com/embed/RvK19xgAxSU' },
    { title: 'Cheb Hasni - Beraka', url: 'https://www.youtube.com/embed/vVx4F-HcYYo' },
    { title: 'Cheb Bilal - Kayen Wla Makayen', url: 'https://www.youtube.com/embed/QcgqBP9aQe0' },
  ];

  const audioTracks = [
    { title: 'Традиционная музыка Раи', artist: 'Various Artists' },
    { title: 'Классика алжирского фольклора', artist: 'Traditional' },
    { title: 'Современная музыка Раи', artist: 'New Generation' },
  ];

  const galleryImages = [
    { url: 'https://cdn.poehali.dev/projects/d4d3b262-f0e7-4411-8113-2d548bf3827d/files/49973a0f-905f-4fba-a199-9d9f739e513d.jpg', title: 'Традиционные орнаменты' },
    { url: 'https://cdn.poehali.dev/projects/d4d3b262-f0e7-4411-8113-2d548bf3827d/files/e2374a89-b7ef-47d5-876f-1f1478a790c7.jpg', title: 'Музыкальные инструменты' },
    { url: 'https://cdn.poehali.dev/projects/d4d3b262-f0e7-4411-8113-2d548bf3827d/files/3ec6595a-15c7-4387-aecf-27060a731ef6.jpg', title: 'Традиционная кухня' },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6 py-20 pattern-ornament">
              <h1 className="text-6xl md:text-8xl font-bold text-primary">
                Культура Алжира
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Откройте для себя богатое наследие, традиции и искусство алжирского народа
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20 hover:border-primary transition-colors cursor-pointer" onClick={() => setCurrentSection('history')}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="BookOpen" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">История</h3>
                  <p className="text-muted-foreground">Тысячелетнее наследие от берберов до современности</p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary transition-colors cursor-pointer" onClick={() => setCurrentSection('music')}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Music" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold">Музыка Раи</h3>
                  <p className="text-muted-foreground">Легендарный жанр, покоривший весь мир</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent transition-colors cursor-pointer" onClick={() => setCurrentSection('cuisine')}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="UtensilsCrossed" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Кухня</h3>
                  <p className="text-muted-foreground">Ароматы и вкусы средиземноморской традиции</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'history':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-primary">История Алжира</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                От древних берберских королевств до независимого государства
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Landmark" size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Древний период</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Берберские королевства Нумидия и Мавретания были центрами культуры и торговли в Северной Африке. Финикийцы основали Карфаген, оставивший неизгладимый след в истории региона.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name="Crown" size={24} className="text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold">Исламский период</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    С 7 века ислам принес новую культуру, архитектуру и науку. Алжир стал важным центром исламской цивилизации, где процветали искусство и образование.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Ship" size={24} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold">Османский период</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Под османским правлением Алжир был известен как регентство, славившееся своим флотом и морской мощью в Средиземноморье.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Flag" size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Независимость</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    После долгой борьбы за независимость, в 1962 году Алжир стал суверенным государством, сохранив свою уникальную культуру и традиции.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'traditions':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-secondary">Традиции и обычаи</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Живое наследие предков, передающееся из поколения в поколение
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Shirt" size={32} className="text-primary" />
                    Традиционная одежда
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Каракуа, хаик и бурнус - традиционные одежды, украшенные вышивкой и отражающие региональные особенности. Женская одежда часто украшена сложными узорами и драгоценностями.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Heart" size={32} className="text-secondary" />
                    Свадебные обряды
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Алжирская свадьба - это многодневное празднование с церемонией хны, традиционной музыкой и танцами. Невеста меняет несколько роскошных нарядов в течение праздника.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Sparkles" size={32} className="text-accent" />
                    Праздники и фестивали
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Рамадан, Ид аль-Фитр, Ашура и празднование независимости - важные события в алжирском календаре, отмечаемые с размахом и радостью.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Palette" size={32} className="text-primary" />
                    Ремесла и искусство
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ковроткачество, гончарное дело, ювелирное искусство и каллиграфия - традиционные ремесла, передающиеся мастерами из поколения в поколение.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'music':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-secondary">Музыка Раи</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Легендарный жанр, родившийся в Оране и покоривший весь мир
              </p>
            </div>

            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-3xl font-bold">О жанре Раи</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Раи (راي) - это форма алжирской народной музыки, возникшая в 1920-х годах в районе Орана. Слово "раи" означает "мнение" или "взгляд". Музыка раи сочетает традиционные бедуинские мелодии с современными инструментами, создавая уникальное звучание, которое стало голосом молодого поколения.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Легендарные исполнители, такие как Шеб Халед, Шеб Мами и Рашид Таха, вывели раи на международную сцену, смешивая его с поп, рок и электронной музыкой.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-3">
                <Icon name="Video" size={32} className="text-primary" />
                Видео выступлений
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {musicVideos.map((video, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 space-y-3">
                      <div className="aspect-video bg-black rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src={video.url}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="font-semibold">{video.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-3">
                <Icon name="Headphones" size={32} className="text-secondary" />
                Аудио записи
              </h3>
              <div className="grid gap-4">
                {audioTracks.map((track, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Music" size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold">{track.title}</h4>
                          <p className="text-muted-foreground">{track.artist}</p>
                        </div>
                        <Button size="lg" className="rounded-full">
                          <Icon name="Play" size={20} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'cuisine':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-accent">Алжирская кухня</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Богатство вкусов Средиземноморья, Берберских гор и Сахары
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/d4d3b262-f0e7-4411-8113-2d548bf3827d/files/3ec6595a-15c7-4387-aecf-27060a731ef6.jpg" 
                    alt="Алжирская кухня" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-3xl font-bold text-primary">Кускус</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Национальное блюдо Алжира, приготовленное из манной крупы на пару с овощами, нутом и мясом. Каждая семья имеет свой уникальный рецепт этого блюда.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Coffee" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold">Тажин</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Медленно тушеное блюдо из мяса или рыбы с овощами и специями, приготовленное в специальной глиняной посуде. Тажин с черносливом и миндалем особенно популярен.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name="Soup" size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold">Чорба</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Традиционный суп с томатами, нутом, вермишелью и мясом, приправленный специями. Особенно популярен во время Рамадана для разговения.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Cake" size={32} className="text-accent" />
                    </div>
                    <h3 className="text-3xl font-bold">Макруд</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Традиционная сладость из манной крупы с начинкой из фиников, обжаренная и пропитанная медом. Подается с мятным чаем.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="Leaf" size={32} className="text-primary" />
                  Специи и приправы
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Алжирская кухня славится своими специями: кумин, кориандр, корица, шафран, паприка и рас-эль-ханут - смесь более 20 специй. Свежая кинза, петрушка и мята добавляют яркий аромат блюдам.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-primary">Галерея</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Визуальное путешествие по алжирской культуре
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <p className="text-white text-xl font-bold p-6">{image.title}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="pattern-ornament">
                <CardContent className="p-12 text-center space-y-4">
                  <Icon name="Camera" size={48} className="text-primary mx-auto" />
                  <h3 className="text-3xl font-bold">Архитектура</h3>
                  <p className="text-lg text-muted-foreground">
                    От Касбы Алжира до современных зданий
                  </p>
                </CardContent>
              </Card>

              <Card className="pattern-ornament">
                <CardContent className="p-12 text-center space-y-4">
                  <Icon name="Mountain" size={48} className="text-secondary mx-auto" />
                  <h3 className="text-3xl font-bold">Пейзажи</h3>
                  <p className="text-lg text-muted-foreground">
                    От средиземноморского побережья до Сахары
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold hidden sm:block">Культура Алжира</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={currentSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setCurrentSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon} size={18} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {renderSection()}
      </main>

      <footer className="bg-card border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
                <Icon name="Info" size={20} />
                О проекте
              </h3>
              <p className="text-muted-foreground">
                Сайт посвящен богатой культуре и традициям Алжира
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
                <Icon name="Mail" size={20} />
                Контакты
              </h3>
              <p className="text-muted-foreground">
                info@algerian-culture.com
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
                <Icon name="Share2" size={20} />
                Социальные сети
              </h3>
              <div className="flex gap-3 justify-center md:justify-start">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>© 2024 Культура Алжира. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;