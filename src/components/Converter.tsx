"use client";

import { Button, Textarea, FileInput, Label, Select } from "flowbite-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { recognize } from "tesseract.js";

interface IFormInput {
  dropzoneFile: FileList | null;
  language: "deu" | "eng";
}

export default function Converter() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      dropzoneFile: null,
      language: "deu",
    },
  });

  // --- Minimal OCR-Status ---
  const [isRunning, setIsRunning] = useState(false);
  const [resultText, setResultText] = useState("");
  const [progressMsg, setProgressMsg] = useState("");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const file = data.dropzoneFile?.[0];
    if (!file) return;

    setIsRunning(true);
    setResultText("");
    setProgressMsg("Loading ...");

    try {
      const {
        data: { text },
      } = await recognize(file, data.language, {
        logger: (m) => {
          if (m?.status) setProgressMsg(m.status);
        },
      });

      setResultText(text || "");
      setProgressMsg("Done!");
    } catch (err: any) {
      setProgressMsg("OCR error");
      setResultText(err?.message ?? String(err));
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <>
      <div className="relative flex w-full flex-col items-center">
        <h2 className="relative text-center text-xl text-gray-600 dark:text-gray-400">
          Image to text converter
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <form
          className="flex flex-col gap-4"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full items-center justify-center">
            <Label
              htmlFor="dropzone-file"
              className={`${
                errors.dropzoneFile
                  ? "bg-red-200 hover:bg-red-300"
                  : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
              } flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 dark:hover:border-gray-500`}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  WEBP, PNG, JPG or GIF (MAX. 800x400px)
                </p>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {errors.dropzoneFile && errors.dropzoneFile.message}
                </p>
              </div>

              <Controller
                name="dropzoneFile"
                control={control}
                rules={{
                  validate: (files) =>
                    (files && files.length > 0) || "Please select an image",
                }}
                render={({ field }) => (
                  <FileInput
                    id="dropzone-file"
                    className="sr-only"
                    accept="image/*"
                    multiple={false}
                    name={field.name}
                    ref={field.ref}
                    onBlur={field.onBlur}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e.target.files);
                    }}
                  />
                )}
              />
            </Label>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="language">Select your language</Label>
            </div>
            <Controller
              name="language"
              control={control}
              rules={{ required: "Please set your language" }}
              render={({ field }) => (
                <Select id="language" {...field} required>
                  <option value="deu">German</option>
                  <option value="eng">English</option>
                </Select>
              )}
            />
          </div>

          <Button type="submit" disabled={isRunning}>
            {isRunning ? "Running ..." : "Start"}
          </Button>
        </form>

        <div>
          <div className="mb-2 block md:mb-0">
            <Label className={"md:sr-only"} htmlFor="output">
              Your converted text
            </Label>
          </div>
          <Textarea
            className={"md:h-full"}
            id="output"
            placeholder="Expect your result here ..."
            required
            rows={4}
            value={resultText}
            readOnly={true}
          />
        </div>
      </div>
      {isRunning && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {progressMsg}
        </p>
      )}
    </>
  );
}
