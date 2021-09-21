import * as yup from "yup";

export const TaskSchema = yup.object({
  title: yup.string().required("Required"),
  url: yup.string().url().required("Required"),
  project: yup.string().required("Required"),
  dev: yup.string().required("Required"),
  instruction: yup.string().max(500, "Too Long!").required("Required"),
  due: yup.date().min(new Date(), "Can't be past").required("required"),
});
