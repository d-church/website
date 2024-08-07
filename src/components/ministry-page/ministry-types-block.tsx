import { data } from "./client-data";
import getImageCountInDirectory from "./generateImagePaths";
import { MinistryTypeBlock } from "./ministry-type-block";

export function MinistryTypesBlock() {
  return (
    <div className="container grid grid-cols-2 gap-[30px] whitespace-pre py-[100px] max-sm:grid-cols-1 xl:grid-cols-[repeat(3,minmax(0,520px))]">
      {data.map(({ title, text, src, textModal, imgPosition }, i) => {
        const lengthOfImages = getImageCountInDirectory(title);
        return (
          <MinistryTypeBlock
            key={`${title}_${i}`}
            title={title}
            text={text}
            textModal={textModal}
            imgPosition={imgPosition}
            src={src}
            lengthOfImages={lengthOfImages}
          />
        );
      })}
    </div>
  );
}
