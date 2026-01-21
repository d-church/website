export interface TeamMember {
  id: number;
  fullName: string;
  position: string;
  photo: string;
  order: number;
}

export const churchTeamData: TeamMember[] = [
  {
    id: 120,
    fullName: "Володимир та Ірина Білик",
    position: "Старші пастори",
    photo: "/static/team/bilyk-volodymyr-iryna.jpeg",
    order: 1,
  },
  {
    id: 92,
    fullName: "Горошко Юрій Євгенович",
    position: "Диякон. Молитовне служіння",
    photo: "/static/team/horoshko-yuriy.webp",
    order: 2,
  },
  {
    id: 63,
    fullName: "Сергій Денисюк",
    position: "Пресвітер. Альфа-курс, спільнота D.Seniors",
    photo: "/static/team/denysiuk-serhiy.webp",
    order: 3,
  },
  {
    id: 56,
    fullName: "Олександр та Василина Моткалюк",
    position: "Диякони. Сімейне служіння",
    photo: "/static/team/motkalyuk-oleksandr-vasylyna.webp",
    order: 4,
  },
  {
    id: 54,
    fullName: "Олег Когут",
    position: "Диякон. Прославлення",
    photo: "/static/team/kohut-oleh.webp",
    order: 5,
  },
  {
    id: 53,
    fullName: "Роберт Петриляк",
    position: "Місіонер. Міжкультурна місія.",
    photo: "/static/team/petrylyak-robert.webp",
    order: 6,
  },
  {
    id: 52,
    fullName: "Юрій Васильків",
    position: "Керівник ревізійної комісії, нові ініціативи",
    photo: "/static/team/vasylkiv-yuriy.webp",
    order: 7,
  },
  {
    id: 50,
    fullName: "Світлана Тузяк",
    position: "Диякониса. Недільна школа",
    photo: "/static/team/tuzyak-svitlana.webp",
    order: 8,
  },
  {
    id: 49,
    fullName: "Сергій Гаврищишин",
    position: "Диякон. Служіння милосердя",
    photo: "/static/team/havryshchyshyn-serhiy.webp",
    order: 9,
  },
  {
    id: 123,
    fullName: "Рончковський Андрій",
    position: "Диякон. Адміністрування",
    photo: "/static/team/ronchkovskyi-andriy.jpeg",
    order: 10,
  },
  {
    id: 122,
    fullName: "Новосельцев Ігор",
    position: "Пастор. Молодіжне служіння",
    photo: "/static/team/novoseltsev-ihor.jpeg",
    order: 11,
  },
  {
    id: 51,
    fullName: "Юрій Кузьо",
    position: "Менеджер недільного служіння",
    photo: "/static/team/kuzo-yuriy.webp",
    order: 12,
  },
];

export function getMainPastor(): TeamMember | undefined {
  return churchTeamData.find((member) =>
    member.position.toLowerCase().includes("старш")
  );
}

export function getTeamMembers(): TeamMember[] {
  return churchTeamData
    .filter((member) => !member.position.toLowerCase().includes("старш"))
    .sort((a, b) => a.order - b.order);
}
