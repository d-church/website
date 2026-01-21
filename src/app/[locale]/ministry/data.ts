import type { MinistryCard, MinistryHero } from "./types";

export const ministryHeroData: MinistryHero = {
  title: "Служіння",
  description:
    "<p>Важливість різних служінь у нашій церкві важко переоцінити. Кожен служитель приносить в спільноту свої таланти та призначення, створюючи різноманітне і багатогранне оточення для духовного росту та служіння громаді. Від пасторів і вчителів, які глибоко розкривають Слово Боже, до служби гостей і молитовної команди, яка стежить за духовними потребами, кожен внесок є невід'ємною частиною нашого колективу. В черзі до служіння громаді, виховання нового покоління віруючих чи підтримка потребуючих - усі ці служіння разом складають наше об'єднане покликання спільно служити Богові та людям.</p>",
  image: require("./assets/hero/preview.webp").default.src,
};

export const ministryCardsData: MinistryCard[] = [
  {
    id: 83,
    title: "D.Family",
    subtitle: "<p>Сімейне служіння</p>",
    description:
      '<p>Ми віримо, що міцна сім\'я робить сильними церкву та суспільство. А сімейне служіння допомагає зміцнити стосунки чоловіка та дружини, з їхніми дітьми, через особисті стосунки з Богом. Основою сімейного служіння є групові заняття для сімейних пар — «Домобудівничі», а також тематичні семінари, вечори, пікніки, табори для сімей, і дошлюбні консультації.<br>Шукайте нас в соцмережах:<span style="color: rgb(30, 136, 229); margin: 0px 0px 16px; text-decoration: underline;"><br><br></span><span style="margin: 0px 0px 16px;"></span>Інстаграм: <u><a href="https://www.instagram.com/d.family.ua" target="_blank">@d.family.ua</a></u><br><br>Фейсбук: <u><a href="https://m.facebook.com/Dfamily-104141194743612/" target="_blank" style="margin: 0px 0px 16px; text-decoration: underline;">D.Family</a></u></p>',
    previewImage: require("./assets/d-family/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-family/1.jpg").default.src,
      require("./assets/d-family/2.jpg").default.src,
      require("./assets/d-family/3.jpg").default.src,
      require("./assets/d-family/4.jpg").default.src,
      require("./assets/d-family/5.jpg").default.src,
    ],
    position: 1,
  },
  {
    id: 82,
    title: "D.Moms",
    subtitle: "<p>Служіння для мам</p>",
    description:
      '<p style="text-align: left;">D.MOMS, — це:<br><br>— Зустрічі мам, тематичні семінари та тренінги,<br>— Baby Shower-и, красиві свята для вагітних,<br>— Чат в телеграмі, нові знайомства, спілкування, актуальні рубрики та поради,<br>— «Марафон Звичок», корисні навички в спільності,<br>— «Роби Добро», підтримка для дружин військових, мам діток з ментальними порушеннями, вдів.<br></p><p style="text-align: left;">Наша спільнота це потрібний, корисний, турботливий простір для мам, приєднуйтесь.</p><p style="text-align: left;">Instagram: <a href="https://instagram.com/d.moms.lviv" target="_blank">https://instagram.com/d.moms.lviv </a></p><p style="text-align: left;">Telegram: <a href="https://t.me/+n8QbqghyL_s3MzYy" target="_blank">https://t.me/+n8QbqghyL_s3MzYy</a></p>',
    previewImage: require("./assets/d-moms/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-moms/1.jpg").default.src,
      require("./assets/d-moms/2.jpg").default.src,
      require("./assets/d-moms/3.jpg").default.src,
      require("./assets/d-moms/4.jpg").default.src,
    ],
    position: 2,
  },
  {
    id: 81,
    title: "D.Kids",
    subtitle: "<p>Дитяче служіння<br></p>",
    description:
      '<p>Чудова, активна, жива атмосфера навчання та ігор для твоїх діток. Біблійні історії, що оживають устами вчителів, групи, розділені за віком, для кращого засвоювання матеріалу, життєрадісні малюки, що раді бачити один одного та будувати дружні зв\'язки на все життя. Все це і не тільки радо чекає твоїх діток щонеділі, під час першого та другого потоку богослужіння. <br>Малята до 4-ох років можуть бавитись в кімнаті «матері і дитини», де є і іграшки для наймерших, і місце погодувати чи переодягнути немовля, і екран з прямою трансляцією служіння для мам.<br><br>Підписуйтеся на наш Інстаграм: <u style="margin: 0px 0px 16px;"><a href="https://www.instagram.com/d.kids.lviv" target="_blank">@d.kids.lviv</a></u></p>',
    previewImage: require("./assets/d-kids/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-kids/1.jpg").default.src,
      require("./assets/d-kids/2.jpg").default.src,
      require("./assets/d-kids/3.jpg").default.src,
      require("./assets/d-kids/4.jpg").default.src,
    ],
    position: 3,
  },
  {
    id: 76,
    title: "D.Specials",
    subtitle: "<p>Cлужіння для сімей з дітьми з ментальними порушеннями</p>",
    description:
      '<p>Cлужіння для сімей з дітьми з ментальними порушеннями (аутизм, синдром Дауна). Надаємо емоційну та духовну підтримку через регулярні зустрічі для батьків та дітей.<br><br>Наш <u><a href="https://www.instagram.com/d.specials.lviv/" target="_blank">Інстаграм</a></u></p>',
    previewImage: require("./assets/d-specials/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-specials/1.jpg").default.src,
      require("./assets/d-specials/2.jpg").default.src,
      require("./assets/d-specials/3.jpg").default.src,
    ],
    position: 4,
  },
  {
    id: 74,
    title: "D.Girls",
    subtitle: "<p>Служіння для дівчат</p>",
    description:
      '<p>D.Girls – це дівоче служіння нашої церкви. Його основними цілями є те, щоб кожна дівчинка відчула себе потрібною та прийнятою, виявила своє покликання і навчилася служити іншим!</p><p>Приєднуйся до нас в <u><a href="https://t.me/+LPvzpzbniaExMGMy" target="_blank">Telegram</a></u>.<br>А також слідкуй за нами в <u><a href="https://instagram.com/d.girls.ministry" target="_blank">Instagram</a></u>.</p>',
    previewImage: require("./assets/d-girls/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-girls/1.jpg").default.src,
      require("./assets/d-girls/2.jpg").default.src,
      require("./assets/d-girls/3.jpg").default.src,
    ],
    position: 5,
  },
  {
    id: 70,
    title: "D.Young",
    subtitle: "<p>Підліткове служіння</p>",
    description:
      '<p>D.Young - це служіння, яке спрямоване на підлітків віком 11-13 років. Тут ми знайомимось, багато спілкуємось, розбираємо та досліджуємо цікаві теми на актуальні питання. Хочеш весело провести час в цікавій компанії? - ми чекаємо тебе щонеділі о 10.00 та 12.00 в підлітковому залі.</p><p>Підписуйся на наш <u><a href="https://www.tiktok.com/@d.youth.lviv" target="_blank">TikTok</a></u></p>',
    previewImage: require("./assets/d-young/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-young/1.jpg").default.src,
      require("./assets/d-young/2.jpg").default.src,
      require("./assets/d-young/3.jpg").default.src,
    ],
    position: 6,
  },
  {
    id: 68,
    title: "D.Worship",
    subtitle: "<p>Музичне служіння</p>",
    description:
      '<p>"Благословлятиму Господа повсякчасно, хвала Йому завжди в моїх устах. Душа моя хвалитиметься Господом; нехай почують смиренні й зрадіють. Величайте Господа зі мною; звеличуймо разом ім\'я Його!" Псалом 33:2-4<br><br><a href="https://www.youtube.com/@dworshipmusic" target="_blank">Наш Youtube канал</a><br><br><a href="https://www.instagram.com/dworshipmusic/" target="_blank">Наш Instagram</a><br><br>Ми постійно робимо якісні українські переклади популярних пісень прославлення. Можете ознайомитись з ними в нашому <a href="https://t.me/dworshiplyrics" target="_blank">Телеграм каналі</a></p>',
    previewImage: require("./assets/d-worship/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-worship/1.jpg").default.src,
      require("./assets/d-worship/2.jpg").default.src,
      require("./assets/d-worship/3.jpg").default.src,
    ],
    position: 7,
  },
  {
    id: 72,
    title: "D.Youth",
    subtitle: "<p>Молодіжне служіння<br></p>",
    description:
      '<p>Молодіжне служіння D.Youth - це сучасний підхід до служіння молоді спрямований на створення спільноти віруючих молодих людей.<br><br>Кожної неділі о 15:00 третій потік церкви "Джерело життя" відбувається в молодіжному форматі.<br><br>Наш Інстаграм: <a href="https://www.instagram.com/d.youth.lviv/" target="_blank">@d.youth.lviv</a><br>Ми в Телеграмі: <a href="https://t.me/DYouth_NEWS">https://t.me/DYouth_NEWS</a><br>Наш Youtube: <a href="https://www.youtube.com/@dyouthlviv" target="_blank">Молодіжне служіння DYouth</a></p>',
    previewImage: require("./assets/d-youth/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-youth/1.jpg").default.src,
      require("./assets/d-youth/2.jpg").default.src,
      require("./assets/d-youth/3.jpg").default.src,
    ],
    position: 8,
  },
  {
    id: 131,
    title: "Капеланське служіння",
    subtitle: "<p>Капеланське служіння</p>",
    description:
      "<p>Ми добровольці капелани. Ми не військові, ми не психологи. Ми ті, хто їде туди де болить, щоб бути поруч. Ми їздимо в зону бойових дій, допомагаємо в тилу, підтримуємо військових і їхні родини. Ми несемо не лише допомогу, а й надію.<br><br>Для детальнішої інформації звертайтеся за телефонами:<br>Валентина: <strong>0965548468</strong>, Любов: <strong>0505375964</strong>.</p>",
    previewImage: require("./assets/chaplain/preview.jpg").default.src,
    carouselImages: [
      require("./assets/chaplain/1.jpg").default.src,
      require("./assets/chaplain/2.jpg").default.src,
      require("./assets/chaplain/3.jpg").default.src,
    ],
    position: 9,
  },
  {
    id: 128,
    title: "D.Friends",
    subtitle: "<p>Платформа для друзів<br></p>",
    description:
      '<p>D.Friends - це платформа для спілкування, дозвілля та духовного зростання молодих людей 25-45 років. Бачення нашого служіння можна виразити у 3D:</p><p>- Dружба</p><p>- Dозвілля</p><p>- Dуховність</p><p>Приєднуйся до нас у соцмережах:</p><p>Instagram: <u>@d.friends.lviv</u></p><p>Telegram: <u><a href="https://t.me/+2pEtmDhEofY5NTQy" target="_blank">t.me/+2pEtmDhEofY5NTQy</a></u></p>',
    previewImage: require("./assets/d-friends/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-friends/1.jpg").default.src,
      require("./assets/d-friends/2.jpg").default.src,
      require("./assets/d-friends/3.jpg").default.src,
    ],
    position: 10,
  },
  {
    id: 125,
    title: "D.Nations",
    subtitle: "<p>Місійне служіння</p>",
    description:
      '<p>Частиною бачення нашої церкви є бути місійною церквою. Ми прагнемо, щоб місія була не лише пристрастю кількох її прихильників, але щоб вона охопила все Тіло Христове.</p><p>Детальніше про місію в Непалі: <u><a href="https://t.me/MissionNepal" target="_blank">https://t.me/MissionNepal</a></u></p>',
    previewImage: require("./assets/d-nations/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-nations/1.jpg").default.src,
      require("./assets/d-nations/2.jpg").default.src,
      require("./assets/d-nations/3.jpg").default.src,
    ],
    position: 11,
  },
  {
    id: 80,
    title: "D.Cafe",
    subtitle: "<p>Служіння в кафе</p>",
    description:
      "<p>D.Cafe - це cучасний простір для подій, святкувань та різноманітних заходів. Щонеділі після богослужіння тут можна випити запашної кави, з'їсти чогось смачного та провести час у спілкуванні.</p>",
    previewImage: require("./assets/d-cafe/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-cafe/1.jpg").default.src,
      require("./assets/d-cafe/2.jpg").default.src,
      require("./assets/d-cafe/3.jpg").default.src,
    ],
    position: 12,
  },
  {
    id: 79,
    title: "Альфа курс",
    subtitle: "<p>Курс основ християнства</p>",
    description:
      '<p>Альфа-курс – це серія зустрічей для дослідження глибоких життєвих питань у затишній атмосфері. Ви можете вільно висловлювати свої думки без тиску чи осуду.<br><br>Ми проводимо два сезони на рік – восени та навесні. Це 12 зустрічей, які проходять <strong>щосуботи о 16:00</strong> в кафе на території церкви.<br><br>Інстаграм: <u><a href="http://instagram.com/d.lviv.alpha/" target="_blank">@d.lviv.alpha</a></u><br>Youtube: <u><a href="https://www.youtube.com/@alpha_lviv" target="_blank">Альфа Курс | Львів</a></u></p>',
    previewImage: require("./assets/alpha/preview.jpg").default.src,
    carouselImages: [
      require("./assets/alpha/1.jpg").default.src,
      require("./assets/alpha/2.jpg").default.src,
      require("./assets/alpha/3.jpg").default.src,
    ],
    position: 13,
  },
  {
    id: 78,
    title: "Fusion",
    subtitle: "<p>Музичний проект</p>",
    description:
      '<p>Fusion NRG - це рок/поп/госпел хор, який включає в себе театральні постановки, танці, та інші візуальні-виконавчі-технічні мистецтва. Він націлений на молодь, віком від 13 до 20 років.<br><br>Одна із наших творчих робіт: <u><a href="https://youtu.be/Gma0Nz8U3U8" target="_blank">BILLIE EILISH & KHALID - Lovely (Cover by Fusion NRG)</a></u></p>',
    previewImage: require("./assets/fusion/preview.jpg").default.src,
    carouselImages: [
      require("./assets/fusion/1.jpg").default.src,
      require("./assets/fusion/2.jpg").default.src,
      require("./assets/fusion/3.jpg").default.src,
    ],
    position: 14,
  },
  {
    id: 77,
    title: "D.Seniors",
    subtitle: "<p>Служіння старшим людям</p>",
    description:
      "<p>Спільнота D.Seniors об'єднує старших людей нашої церкви для підтримки та спілкування. Мета – допомогти старшому поколінню брати участь у житті церкви, взаємодіяти з іншими поколіннями та знаходити друзів.<br><br>Як приєднатися? Зателефонуйте за церковним номером: <strong>073 800 37 37</strong></p>",
    previewImage: require("./assets/d-seniors/preview.jpg").default.src,
    carouselImages: [
      require("./assets/d-seniors/1.jpg").default.src,
      require("./assets/d-seniors/2.jpg").default.src,
      require("./assets/d-seniors/3.jpg").default.src,
    ],
    position: 15,
  },
].sort((a, b) => a.position - b.position);
