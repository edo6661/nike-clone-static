"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { RegisterSchemaType, resolverRegisterSchema } from "@/lib/zod/auth";
import { Form } from "@/components/ui/form";
import { motion } from "framer-motion";
import { registerDefaultValues } from "@/helpers/initial/auth";
import FormInput from "@/components/custom/FormInput";
import { register } from "@/actions/auth";
import FormError from "@/components/custom/FormError";
import FormSuccess from "@/components/custom/FormSuccess";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const RegisterForm = () => {
  const router = useRouter();
  const [response, setResponse] = useState({ error: "", success: "" });
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    defaultValues: {
      ...registerDefaultValues,
    },
    resolver: resolverRegisterSchema,
    mode: "onChange",
  });
  const { handleSubmit, control, formState: error, reset } = form;

  const onRegister = (data: RegisterSchemaType) => {
    setResponse({ error: "", success: "" });
    startTransition(() => {
      register(data).then((res) => {
        if (res.error) {
          return setResponse({ error: res.error, success: "" });
        }
        setResponse({ error: "", success: res.success! });
        reset();
        toast.success(res.success);
        router.push("/auth/login");
      });
    });
  };

  return (
    <Form {...form}>
      <motion.form
        layout
        className="space-y-8"
        onSubmit={handleSubmit(onRegister)}
      >
        <h3 className="text-2xl font-bold">Register</h3>
        <div className=" mx-auto max-w-xl space-y-4">
          <FormInput
            name="name"
            control={control}
            label="name"
            placeholder="name"
            description="This is your name."
            error={error.errors.name}
          />
          <FormInput
            name="email"
            control={control}
            label="Email"
            placeholder="Email"
            description="This is your email."
            error={error.errors.email}
          />
          <FormInput
            name="password"
            control={control}
            label="Password"
            placeholder="********"
            type="password"
            description="This is your password."
            error={error.errors.password}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            control={control}
            label="ConfirmPassword"
            placeholder="********"
            description="This is your Confirm Password."
            error={error.errors.confirmPassword}
          />
          <FormError error={response.error} />
          <FormSuccess success={response.success} />
          <Button disabled={isPending || !form.formState.isValid}>
            Register
          </Button>
        </div>
      </motion.form>
    </Form>
  );
};

export default RegisterForm;
