import React from "react";

type Props = {
  value: string;
  name: string;
  placeholder: string;
  handleInputChange: (value: File | null) => void;
};

const ImageUpload = ({
  value,
  name,
  placeholder,
  handleInputChange,
}: Props) => {
  const [preview, setPreview] = React.useState<string | undefined>(undefined);
  const handleImagePreview = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
    } else {
      setPreview(undefined);
    }
  };

  console.log(preview);

  return (
    <div className="w-full p-4">
      <label htmlFor="file">
        <div className="text-sm text-bold text-primary mb-2">{placeholder}</div>
        <div className="rounded-md border active:border-secondary_purple_1 w-fit py-4 px-2 text-secondary">
          {preview ? "Change" : "Upload"} image +
        </div>
      </label>
      {preview && (
        <img src={preview} alt="" className="h-[100px] w-[100px] my-2" />
      )}
      <input
        className="hidden"
        type="file"
        name=""
        id="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files && e.target.files[0];
          handleInputChange(file);
          handleImagePreview(file);
        }}
      />
    </div>
  );
};

export default ImageUpload;
