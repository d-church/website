import { MinistryTypeBlock } from "./ministry-type-block";

const data = [
  { title: "Недільне\nБогослужіння", text: "", src: "" },
  { title: "D.Worship", text: "", src: "" },
  { title: "D.Cafe", text: "", src: "" },
  { title: "D.Family", text: "", src: "" },
  { title: "D.Moms", text: "", src: "" },
  { title: "D.Kids", text: "", src: "" },
  { title: "D.Youth", text: "", src: "" },
  { title: "D.Young", text: "", src: "" },
  { title: "Fusion", text: "", src: "" },
  { title: "Альфа курс", text: "", src: "" },
  { title: "D.Коледж", text: "", src: "" },
  { title: "Стайгер", text: "", src: "" },
  { title: "D.Girls", text: "", src: "" },
];

export function MinistryTypesBlock() {
  return (
    <div className="container grid grid-cols-1 gap-[30px] whitespace-pre  py-[100px] lg:grid-cols-[repeat(4,minmax(0,383px))]">
      {data.map(({ title, text, src }, i) => {
        return (
          <MinistryTypeBlock
            key={`${title}_${i}`}
            title={title}
            text={text}
            src={src}
          />
        );
      })}
    </div>
  );
}
