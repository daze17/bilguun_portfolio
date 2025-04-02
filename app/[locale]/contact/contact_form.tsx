"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchemaWithTranslation = (
  translations: ReturnType<typeof useTranslations<"validation">>,
) => {
  return z.object({
    name: z.string().min(2, {
      message: translations("atleast_2_characters"),
    }),
    email: z.string().email({
      message: translations("invalid_email"),
    }),
    message: z.string().min(10, {
      message: translations("message_atleast_10_characters"),
    }),
  });
};

type FormSchema = z.infer<ReturnType<typeof formSchemaWithTranslation>>;

export const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validationTranslations = useTranslations("validation");
  const t = useTranslations("contact_form");
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchemaWithTranslation(validationTranslations)),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormSchema) => {
    setIsLoading(true);
    try {
      await fetch(`/api/send`, {
        method: "POST",
        body: JSON.stringify(values),
      });

      toast({
        title: t("message_sent"),
        description: t("message_sent_description"),
      });
      form.reset();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast({
        title: t("message_send_error"),
        description: t("message_send_error_description"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("name")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("name_placeholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("message_placeholder")}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant={"outline"} disabled={isLoading}>
              {isLoading && (
                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              )}
              {t("send_message")}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
