import { useRef, useState } from "react";

export const useUploadImage = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [readImgFile, setReadImgFile] = useState<string | null>();
  const imgFile = useRef<File>();

  const handleGetUploadImageFile = () => {
    if (!ref.current?.files) return;

    const file = ref.current.files[0];
    imgFile.current = file;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setReadImgFile(reader.result as string | null);
    };
  };

  const handleUploadImageButtonClick = () => {
    if (!ref.current) return;
    ref.current.click();
  };

  return {
    imageRef: ref,
    readImgFile,
    imgFile,
    onChangeImageFile: handleGetUploadImageFile,
    onClickImageButton: handleUploadImageButtonClick,
  };
};
