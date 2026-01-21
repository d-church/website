import type { MinistryCard, MinistryHero } from "./types";

export const ministryHeroData: MinistryHero = {
  title: {
    uk: "Служіння",
    en: "Ministry"
  },
  description: {
    uk: "<p>Важливість різних служінь у нашій церкві важко переоцінити. Кожен служитель приносить в спільноту свої таланти та призначення, створюючи різноманітне і багатогранне оточення для духовного росту та служіння громаді. Від пасторів і вчителів, які глибоко розкривають Слово Боже, до служби гостей і молитовної команди, яка стежить за духовними потребами, кожен внесок є невід'ємною частиною нашого колективу. В черзі до служіння громаді, виховання нового покоління віруючих чи підтримка потребуючих - усі ці служіння разом складають наше об'єднане покликання спільно служити Богові та людям.</p>",
    en: "<p>The importance of different ministries in our church cannot be overestimated. Each minister brings their talents and calling to the community, creating a diverse and multifaceted environment for spiritual growth and service to the congregation. From pastors and teachers who deeply reveal God's Word, to the hospitality team and prayer ministry that cares for spiritual needs, each contribution is an integral part of our collective. In serving the congregation, raising the next generation of believers, or supporting those in need - all these ministries together make up our united calling to serve God and people.</p>"
  },
  image: require("./assets/hero/preview.webp").default.src,
};

export const ministryCardsData: MinistryCard[] = [
  {
    title: "D.Family",
    subtitle: {
      uk: "<p>Сімейне служіння</p>",
      en: "<p>Family Ministry</p>"
    },
    description: {
      uk: '<p>Ми віримо, що міцна сім\'я робить сильними церкву та суспільство. А сімейне служіння допомагає зміцнити стосунки чоловіка та дружини, з їхніми дітьми, через особисті стосунки з Богом. Основою сімейного служіння є групові заняття для сімейних пар — «Домобудівничі», а також тематичні семінари, вечори, пікніки, табори для сімей, і дошлюбні консультації.<br>Шукайте нас в соцмережах:<span style="color: rgb(30, 136, 229); margin: 0px 0px 16px; text-decoration: underline;"><br><br></span><span style="margin: 0px 0px 16px;"></span>Інстаграм: <u><a href="https://www.instagram.com/d.family.ua" target="_blank">@d.family.ua</a></u><br><br>Фейсбук: <u><a href="https://m.facebook.com/Dfamily-104141194743612/" target="_blank" style="margin: 0px 0px 16px; text-decoration: underline;">D.Family</a></u></p>',
      en: '<p>We believe that a strong family makes the church and society strong. And family ministry helps strengthen the relationship between husband and wife, with their children, through personal relationship with God. The foundation of family ministry is group classes for married couples - "Home Builders", as well as thematic seminars, evenings, picnics, family camps, and premarital counseling.<br>Find us on social media:<span style="color: rgb(30, 136, 229); margin: 0px 0px 16px; text-decoration: underline;"><br><br></span><span style="margin: 0px 0px 16px;"></span>Instagram: <u><a href="https://www.instagram.com/d.family.ua" target="_blank">@d.family.ua</a></u><br><br>Facebook: <u><a href="https://m.facebook.com/Dfamily-104141194743612/" target="_blank" style="margin: 0px 0px 16px; text-decoration: underline;">D.Family</a></u></p>'
    },
    previewImage: require("./assets/d-family/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-family/1.jpg").default.src,
      require("./assets/d-family/2.jpg").default.src,
      require("./assets/d-family/3.jpg").default.src,
      require("./assets/d-family/4.jpg").default.src,
      require("./assets/d-family/5.jpg").default.src,
    ],
  },
  {
    title: "D.Moms",
    subtitle: {
      uk: "<p>Служіння для мам</p>",
      en: "<p>Ministry for Moms</p>"
    },
    description: {
      uk: '<p style="text-align: left;">D.MOMS, — це:<br><br>— Зустрічі мам, тематичні семінари та тренінги,<br>— Baby Shower-и, красиві свята для вагітних,<br>— Чат в телеграмі, нові знайомства, спілкування, актуальні рубрики та поради,<br>— «Марафон Звичок», корисні навички в спільності,<br>— «Роби Добро», підтримка для дружин військових, мам діток з ментальними порушеннями, вдів.<br></p><p style="text-align: left;">Наша спільнота це потрібний, корисний, турботливий простір для мам, приєднуйтесь.</p><p style="text-align: left;">Instagram: <a href="https://instagram.com/d.moms.lviv" target="_blank">https://instagram.com/d.moms.lviv </a></p><p style="text-align: left;">Telegram: <a href="https://t.me/+n8QbqghyL_s3MzYy" target="_blank">https://t.me/+n8QbqghyL_s3MzYy</a></p>',
      en: '<p style="text-align: left;">D.MOMS is:<br><br>— Meetings for moms, thematic seminars and trainings,<br>— Baby Showers, beautiful celebrations for pregnant women,<br>— Telegram chat, new acquaintances, communication, current topics and advice,<br>— "Habit Marathon", useful skills in community,<br>— "Do Good", support for military wives, moms of children with mental disorders, widows.<br></p><p style="text-align: left;">Our community is a needed, useful, caring space for moms, join us.</p><p style="text-align: left;">Instagram: <a href="https://instagram.com/d.moms.lviv" target="_blank">https://instagram.com/d.moms.lviv </a></p><p style="text-align: left;">Telegram: <a href="https://t.me/+n8QbqghyL_s3MzYy" target="_blank">https://t.me/+n8QbqghyL_s3MzYy</a></p>'
    },
    previewImage: require("./assets/d-moms/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-moms/1.jpg").default.src,
      require("./assets/d-moms/2.jpg").default.src,
      require("./assets/d-moms/3.jpg").default.src,
      require("./assets/d-moms/4.jpg").default.src,
    ],
  },
  {
    title: "D.Kids",
    subtitle: {
      uk: "<p>Дитяче служіння<br></p>",
      en: "<p>Children's Ministry</p>"
    },
    description: {
      uk: '<p>Чудова, активна, жива атмосфера навчання та ігор для твоїх діток. Біблійні історії, що оживають устами вчителів, групи, розділені за віком, для кращого засвоювання матеріалу, життєрадісні малюки, що раді бачити один одного та будувати дружні зв\'язки на все життя. Все це і не тільки радо чекає твоїх діток щонеділі, під час першого та другого потоку богослужіння. <br>Малята до 4-ох років можуть бавитись в кімнаті «матері і дитини», де є і іграшки для наймерших, і місце погодувати чи переодягнути немовля, і екран з прямою трансляцією служіння для мам.<br><br>Підписуйтеся на наш Інстаграм: <u style="margin: 0px 0px 16px;"><a href="https://www.instagram.com/d.kids.lviv" target="_blank">@d.kids.lviv</a></u></p>',
      en: '<p>Wonderful, active, lively atmosphere of learning and games for your children. Bible stories that come to life through teachers\' mouths, age-divided groups for better material assimilation, cheerful kids who are glad to see each other and build lifelong friendships. All this and more awaits your children every Sunday during the first and second service streams. <br>Children under 4 years old can play in the "mother and child" room, where there are toys for the youngest, a place to feed or change a baby, and a screen with live broadcast of the service for moms.<br><br>Follow us on Instagram: <u style="margin: 0px 0px 16px;"><a href="https://www.instagram.com/d.kids.lviv" target="_blank">@d.kids.lviv</a></u></p>'
    },
    previewImage: require("./assets/d-kids/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-kids/1.jpg").default.src,
      require("./assets/d-kids/2.jpg").default.src,
      require("./assets/d-kids/3.jpg").default.src,
      require("./assets/d-kids/4.jpg").default.src,
    ],
  },
  {
    title: "D.Specials",
    subtitle: {
      uk: "<p>Cлужіння для сімей з дітьми з ментальними порушеннями</p>",
      en: "<p>Ministry for families with children with mental disabilities</p>"
    },
    description: {
      uk: '<p>Cлужіння для сімей з дітьми з ментальними порушеннями (аутизм, синдром Дауна). Надаємо емоційну та духовну підтримку через регулярні зустрічі для батьків та дітей.<br><br>Наш <u><a href="https://www.instagram.com/d.specials.lviv/" target="_blank">Інстаграм</a></u></p>',
      en: '<p>Ministry for families with children with mental disabilities (autism, Down syndrome). We provide emotional and spiritual support through regular meetings for parents and children.<br><br>Our <u><a href="https://www.instagram.com/d.specials.lviv/" target="_blank">Instagram</a></u></p>'
    },
    previewImage: require("./assets/d-specials/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-specials/1.jpg").default.src,
      require("./assets/d-specials/2.jpg").default.src,
      require("./assets/d-specials/3.jpg").default.src,
    ],
  },
  {
    title: "D.Girls",
    subtitle: {
      uk: "<p>Служіння для дівчат</p>",
      en: "<p>Ministry for Girls</p>"
    },
    description: {
      uk: '<p>D.Girls – це дівоче служіння нашої церкви. Його основними цілями є те, щоб кожна дівчинка відчула себе потрібною та прийнятою, виявила своє покликання і навчилася служити іншим!</p><p>Приєднуйся до нас в <u><a href="https://t.me/+LPvzpzbniaExMGMy" target="_blank">Telegram</a></u>.<br>А також слідкуй за нами в <u><a href="https://instagram.com/d.girls.ministry" target="_blank">Instagram</a></u>.</p>',
      en: '<p>D.Girls is the girls\' ministry of our church. Its main goals are for every girl to feel needed and accepted, to discover her calling and learn to serve others!</p><p>Join us on <u><a href="https://t.me/+LPvzpzbniaExMGMy" target="_blank">Telegram</a></u>.<br>And also follow us on <u><a href="https://instagram.com/d.girls.ministry" target="_blank">Instagram</a></u>.</p>'
    },
    previewImage: require("./assets/d-girls/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-girls/1.jpg").default.src,
      require("./assets/d-girls/2.jpg").default.src,
      require("./assets/d-girls/3.jpg").default.src,
    ],
  },
  {
    title: "D.Young",
    subtitle: {
      uk: "<p>Підліткове служіння</p>",
      en: "<p>Teen Ministry</p>"
    },
    description: {
      uk: '<p>D.Young - це служіння, яке спрямоване на підлітків віком 11-13 років. Тут ми знайомимось, багато спілкуємось, розбираємо та досліджуємо цікаві теми на актуальні питання. Хочеш весело провести час в цікавій компанії? - ми чекаємо тебе щонеділі о 10.00 та 12.00 в підлітковому залі.</p><p>Підписуйся на наш <u><a href="https://www.tiktok.com/@d.youth.lviv" target="_blank">TikTok</a></u></p>',
      en: '<p>D.Young is a ministry aimed at teenagers aged 11-13. Here we get to know each other, communicate a lot, discuss and explore interesting topics on current issues. Want to have fun in an interesting company? - We are waiting for you every Sunday at 10.00 and 12.00 in the teen hall.</p><p>Follow us on <u><a href="https://www.tiktok.com/@d.youth.lviv" target="_blank">TikTok</a></u></p>'
    },
    previewImage: require("./assets/d-young/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-young/1.jpg").default.src,
      require("./assets/d-young/2.jpg").default.src,
      require("./assets/d-young/3.jpg").default.src,
    ],
  },
  {
    title: "D.Worship",
    subtitle: {
      uk: "<p>Музичне служіння</p>",
      en: "<p>Worship Ministry</p>"
    },
    description: {
      uk: '<p>"Благословлятиму Господа повсякчасно, хвала Йому завжди в моїх устах. Душа моя хвалитиметься Господом; нехай почують смиренні й зрадіють. Величайте Господа зі мною; звеличуймо разом ім\'я Його!" Псалом 33:2-4<br><br><a href="https://www.youtube.com/@dworshipmusic" target="_blank">Наш Youtube канал</a><br><br><a href="https://www.instagram.com/dworshipmusic/" target="_blank">Наш Instagram</a><br><br>Ми постійно робимо якісні українські переклади популярних пісень прославлення. Можете ознайомитись з ними в нашому <a href="https://t.me/dworshiplyrics" target="_blank">Телеграм каналі</a></p>',
      en: '<p>"I will bless the Lord at all times, his praise shall continually be in my mouth. My soul shall make her boast in the Lord; the humble shall hear thereof, and be glad. O magnify the Lord with me, and let us exalt his name together!" Psalm 33:2-4<br><br><a href="https://www.youtube.com/@dworshipmusic" target="_blank">Our Youtube channel</a><br><br><a href="https://www.instagram.com/dworshipmusic/" target="_blank">Our Instagram</a><br><br>We constantly make quality Ukrainian translations of popular worship songs. You can get acquainted with them in our <a href="https://t.me/dworshiplyrics" target="_blank">Telegram channel</a></p>'
    },
    previewImage: require("./assets/d-worship/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-worship/1.jpg").default.src,
      require("./assets/d-worship/2.jpg").default.src,
      require("./assets/d-worship/3.jpg").default.src,
    ],
  },
  {
    title: "D.Youth",
    subtitle: {
      uk: "<p>Молодіжне служіння<br></p>",
      en: "<p>Youth Ministry</p>"
    },
    description: {
      uk: '<p>Молодіжне служіння D.Youth - це сучасний підхід до служіння молоді спрямований на створення спільноти віруючих молодих людей.<br><br>Кожної неділі о 15:00 третій потік церкви "Джерело життя" відбувається в молодіжному форматі.<br><br>Наш Інстаграм: <a href="https://www.instagram.com/d.youth.lviv/" target="_blank">@d.youth.lviv</a><br>Ми в Телеграмі: <a href="https://t.me/DYouth_NEWS">https://t.me/DYouth_NEWS</a><br>Наш Youtube: <a href="https://www.youtube.com/@dyouthlviv" target="_blank">Молодіжне служіння DYouth</a></p>',
      en: '<p>The D.Youth youth ministry is a modern approach to youth ministry aimed at creating a community of believing young people.<br><br>Every Sunday at 15:00, the third stream of the "Source of Life" church takes place in youth format.<br><br>Our Instagram: <a href="https://www.instagram.com/d.youth.lviv/" target="_blank">@d.youth.lviv</a><br>We\'re on Telegram: <a href="https://t.me/DYouth_NEWS">https://t.me/DYouth_NEWS</a><br>Our Youtube: <a href="https://www.youtube.com/@dyouthlviv" target="_blank">DYouth Youth Ministry</a></p>'
    },
    previewImage: require("./assets/d-youth/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-youth/1.jpg").default.src,
      require("./assets/d-youth/2.jpg").default.src,
      require("./assets/d-youth/3.jpg").default.src,
    ],
  },
  {
    title: "Капеланське служіння",
    subtitle: {
      uk: "<p>Капеланське служіння</p>",
      en: "<p>Chaplain Ministry</p>"
    },
    description: {
      uk: "<p>Ми добровольці капелани. Ми не військові, ми не психологи. Ми ті, хто їде туди де болить, щоб бути поруч. Ми їздимо в зону бойових дій, допомагаємо в тилу, підтримуємо військових і їхні родини. Ми несемо не лише допомогу, а й надію.<br><br>Для детальнішої інформації звертайтеся за телефонами:<br>Валентина: <strong>0965548468</strong>, Любов: <strong>0505375964</strong>.</p>",
      en: "<p>We are volunteer chaplains. We are not military, we are not psychologists. We are the ones who go where it hurts to be there. We go to the combat zone, help at the rear, support military personnel and their families. We bring not only help, but also hope.<br><br>For more information, contact us by phone:<br>Valentina: <strong>0965548468</strong>, Lyubov: <strong>0505375964</strong>.</p>"
    },
    previewImage: require("./assets/chaplain/preview.jpg").default.src,
    carouselImages: [
      require("./assets/chaplain/1.jpg").default.src,
      require("./assets/chaplain/2.jpg").default.src,
      require("./assets/chaplain/3.jpg").default.src,
    ],
  },
  {
    title: "D.Friends",
    subtitle: {
      uk: "<p>Платформа для друзів<br></p>",
      en: "<p>Friends Platform</p>"
    },
    description: {
      uk: '<p>D.Friends - це платформа для спілкування, дозвілля та духовного зростання молодих людей 25-45 років. Бачення нашого служіння можна виразити у 3D:</p><p>- Dружба</p><p>- Dозвілля</p><p>- Dуховність</p><p>Приєднуйся до нас у соцмережах:</p><p>Instagram: <u>@d.friends.lviv</u></p><p>Telegram: <u><a href="https://t.me/+2pEtmDhEofY5NTQy" target="_blank">t.me/+2pEtmDhEofY5NTQy</a></u></p>',
      en: '<p>D.Friends is a platform for communication, leisure and spiritual growth of young people aged 25-45. The vision of our ministry can be expressed in 3D:</p><p>- Friendship</p><p>- Leisure</p><p>- Spirituality</p><p>Join us on social media:</p><p>Instagram: <u>@d.friends.lviv</u></p><p>Telegram: <u><a href="https://t.me/+2pEtmDhEofY5NTQy" target="_blank">t.me/+2pEtmDhEofY5NTQy</a></u></p>'
    },
    previewImage: require("./assets/d-friends/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-friends/1.jpg").default.src,
      require("./assets/d-friends/2.jpg").default.src,
      require("./assets/d-friends/3.jpg").default.src,
    ],
  },
  {
    title: "D.Nations",
    subtitle: {
      uk: "<p>Місійне служіння</p>",
      en: "<p>Mission Ministry</p>"
    },
    description: {
      uk: '<p>Частиною бачення нашої церкви є бути місійною церквою. Ми прагнемо, щоб місія була не лише пристрастю кількох її прихильників, але щоб вона охопила все Тіло Христове.</p><p>Детальніше про місію в Непалі: <u><a href="https://t.me/MissionNepal" target="_blank">https://t.me/MissionNepal</a></u></p>',
      en: '<p>Part of our church\'s vision is to be a missionary church. We strive for the mission to be not just the passion of a few followers, but to embrace the entire Body of Christ.</p><p>More about the mission in Nepal: <u><a href="https://t.me/MissionNepal" target="_blank">https://t.me/MissionNepal</a></u></p>'
    },
    previewImage: require("./assets/d-nations/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-nations/1.jpg").default.src,
      require("./assets/d-nations/2.jpg").default.src,
      require("./assets/d-nations/3.jpg").default.src,
    ],
  },
  {
    title: "D.Cafe",
    subtitle: {
      uk: "<p>Служіння в кафе</p>",
      en: "<p>Cafe Ministry</p>"
    },
    description: {
      uk: "<p>D.Cafe - це cучасний простір для подій, святкувань та різноманітних заходів. Щонеділі після богослужіння тут можна випити запашної кави, з'їсти чогось смачного та провести час у спілкуванні.</p>",
      en: "<p>D.Cafe is a modern space for events, celebrations and various activities. Every Sunday after the service, you can drink delicious coffee here, eat something tasty and spend time in conversation.</p>"
    },
    previewImage: require("./assets/d-cafe/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-cafe/1.jpg").default.src,
      require("./assets/d-cafe/2.jpg").default.src,
      require("./assets/d-cafe/3.jpg").default.src,
    ],
  },
  {
    title: "Альфа курс",
    subtitle: {
      uk: "<p>Курс основ християнства</p>",
      en: "<p>Christian Basics Course</p>"
    },
    description: {
      uk: '<p>Альфа-курс – це серія зустрічей для дослідження глибоких життєвих питань у затишній атмосфері. Ви можете вільно висловлювати свої думки без тиску чи осуду.<br><br>Ми проводимо два сезони на рік – восени та навесні. Це 12 зустрічей, які проходять <strong>щосуботи о 16:00</strong> в кафе на території церкви.<br><br>Інстаграм: <u><a href="http://instagram.com/d.lviv.alpha/" target="_blank">@d.lviv.alpha</a></u><br>Youtube: <u><a href="https://www.youtube.com/@alpha_lviv" target="_blank">Альфа Курс | Львів</a></u></p>',
      en: '<p>The Alpha Course is a series of meetings to explore deep life questions in a comfortable atmosphere. You can freely express your thoughts without pressure or judgment.<br><br>We run two seasons a year - in autumn and spring. These are 12 meetings that take place <strong>every Saturday at 16:00</strong> in the cafe on church premises.<br><br>Instagram: <u><a href="http://instagram.com/d.lviv.alpha/" target="_blank">@d.lviv.alpha</a></u><br>Youtube: <u><a href="https://www.youtube.com/@alpha_lviv" target="_blank">Alpha Course | Lviv</a></u></p>'
    },
    previewImage: require("./assets/alpha/preview.jpg").default.src,
    carouselImages: [
      require("./assets/alpha/1.jpg").default.src,
      require("./assets/alpha/2.jpg").default.src,
      require("./assets/alpha/3.jpg").default.src,
    ],
  },
  {
    title: "Fusion",
    subtitle: {
      uk: "<p>Музичний проект</p>",
      en: "<p>Music Project</p>"
    },
    description: {
      uk: '<p>Fusion NRG - це рок/поп/госпел хор, який включає в себе театральні постановки, танці, та інші візуальні-виконавчі-технічні мистецтва. Він націлений на молодь, віком від 13 до 20 років.<br><br>Одна із наших творчих робіт: <u><a href="https://youtu.be/Gma0Nz8U3U8" target="_blank">BILLIE EILISH & KHALID - Lovely (Cover by Fusion NRG)</a></u></p>',
      en: '<p>Fusion NRG is a rock/pop/gospel choir that includes theatrical productions, dance, and other visual-performing-technical arts. It is aimed at youth aged 13-20.<br><br>One of our creative works: <u><a href="https://youtu.be/Gma0Nz8U3U8" target="_blank">BILLIE EILISH & KHALID - Lovely (Cover by Fusion NRG)</a></u></p>'
    },
    previewImage: require("./assets/fusion/preview.jpg").default.src,
    carouselImages: [
      require("./assets/fusion/1.jpg").default.src,
      require("./assets/fusion/2.jpg").default.src,
      require("./assets/fusion/3.jpg").default.src,
    ],
  },
  {
    title: "D.Seniors",
    subtitle: {
      uk: "<p>Служіння старшим людям</p>",
      en: "<p>Ministry for Seniors</p>"
    },
    description: {
      uk: "<p>Спільнота D.Seniors об'єднує старших людей нашої церкви для підтримки та спілкування. Мета – допомогти старшому поколінню брати участь у житті церкви, взаємодіяти з іншими поколіннями та знаходити друзів.<br><br>Як приєднатися? Зателефонуйте за церковним номером: <strong>073 800 37 37</strong></p>",
      en: "<p>The D.Seniors community unites the older people of our church for support and communication. The goal is to help the older generation participate in church life, interact with other generations and find friends.<br><br>How to join? Call the church number: <strong>073 800 37 37</strong></p>"
    },
    previewImage: require("./assets/d-seniors/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-seniors/1.jpg").default.src,
      require("./assets/d-seniors/2.jpg").default.src,
      require("./assets/d-seniors/3.jpg").default.src,
    ],
  },
];
