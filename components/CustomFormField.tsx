'use client'
import React from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, ControllerRenderProps, FieldValues, Path } from 'react-hook-form'
import { FormFieldType } from './Form/PatientForm'
import Image from 'next/image'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import type { E164Number } from 'react-phone-number-input'

interface CustomProps<T extends FieldValues = FieldValues>{
    control: Control<T>,
    fieldType : FormFieldType,
    name : Path<T>,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: ControllerRenderProps<T>) => React.ReactNode,
}


const RenderField = <T extends FieldValues>({ field, props }: { field: ControllerRenderProps<T>, props: CustomProps<T> }) => {
  const { fieldType, iconSrc, iconAlt, placeholder, disabled } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2 my-auto"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              disabled={disabled}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <textarea
            placeholder={placeholder}
            disabled={disabled}
            {...field}
            className="shad-input"
          />
        </FormControl>
      );

    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              disabled={disabled}
              {...field}
              className="checkbox"
            />
            {props.children}
          </div>
        </FormControl>
      );

      case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="TN"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );


    default:
      return null;
  }
};


const CustomFormField = <T extends FieldValues>(props: CustomProps<T>) => {
  const { control, fieldType, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props}/>
          <FormMessage className="shade-error" />
        </FormItem>
      )}
    />
  );
};


export default CustomFormField
