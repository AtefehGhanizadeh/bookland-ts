import { Field, ErrorMessage } from "formik";

interface Props {
  validation?: boolean;
  id?: "";
  name: string;
  type: string;
  placeholder?: string;
  touched?: boolean;
  error?: string;
  propClassName?: string;
}

function CustomInput({
  validation,
  id,
  name,
  type,
  placeholder,
  touched,
  error,
  propClassName,
}: Props) {
  const className = `h-[51px] border-[2px] border-primaryBlue rounded-2xl px-[10px] md:px-[20px] py-[16px] focus:outline-none ${propClassName} ${
    error && touched ? "border-red-500" : ""
  }`;

  return (
    <div className="flex flex-col gap-y-[8px]">
      <Field
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
      />
      <p
        className={`text-[12px] font-light ${
          error && touched ? "text-error" : ""
        }`}
      >
        {validation && <ErrorMessage name={name} />}
      </p>
    </div>
  );
}

export default CustomInput;
