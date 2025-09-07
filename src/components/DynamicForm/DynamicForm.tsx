import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import Button from "../Button";
import { cn } from "../../utils/cn";

type DynamicFormProps = { className?: string };

const formSchema = z.object({
  email: z.email("Invalid email"),
  name: z.string().max(60, "Name must be max 60 characters"),
  hobbies: z.array(z.string().min(2, "Hobby should be at least 2 characters")),
});

type FormData = z.infer<typeof formSchema>;

const DynamicForm: React.FC<DynamicFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [hobbies, setHobbies] = useState(Array<number>);

  const onSubmit = (data: FormData) => {
    console.log("data");
    console.log("Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-[12px]", props.className)}
    >
      <Input
        {...register("email")}
        label="email"
        error={errors.email?.message}
      />
      <Input {...register("name")} label="name" error={errors.name?.message} />
      {hobbies.map((hobby, index) => (
        <div key={`hobby-${hobby}`} className="flex gap-2 items-center">
          <Input
            {...register(`hobbies.${index}`)}
            label={`hobby ${index + 1}`}
            error={errors.hobbies?.[index]?.message}
          />
          <Button
            type="button"
            onClick={() => setHobbies(hobbies.filter((h) => h !== hobby))}
            className="text-red-500"
          >
            ✕
          </Button>
        </div>
      ))}

      <Button
        type="button"
        onClick={() =>
          setHobbies((prev) => [
            ...prev,
            !prev.length ? 1 : prev.slice(-1)[0] + 1,
          ])
        }
        className="bg-blue px-3 py-1 rounded m-[0_8px_0_0]"
      >
        + Add Hobby
      </Button>

      <Button type="submit" className="bg-green px-4 py-2 rounded">
        Submit
      </Button>
    </form>
  );
};

export default DynamicForm;
