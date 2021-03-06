﻿import * as datePickerModule from "tns-core-modules/ui/date-picker";

export function getNativeYear(datePicker: datePickerModule.DatePicker): number {
    return datePicker.android.getYear();
}

export function getNativeMonth(datePicker: datePickerModule.DatePicker): number {
    return datePicker.android.getMonth();
}

export function getNativeDay(datePicker: datePickerModule.DatePicker): number {
    return datePicker.android.getDayOfMonth();
}

export function getNativeMaxDate(datePicker: datePickerModule.DatePicker): Date {
    return new Date(datePicker.android.getMaxDate());
}

export function getNativeMinDate(datePicker: datePickerModule.DatePicker): Date {
    return new Date(datePicker.android.getMinDate());
}

export function setNativeYear(datePicker: datePickerModule.DatePicker, value: number): void {
    datePicker.android.updateDate(value, datePicker.android.getMonth(), datePicker.android.getDayOfMonth());
}

export function setNativeMonth(datePicker: datePickerModule.DatePicker, value: number): void {
    datePicker.android.updateDate(datePicker.android.getYear(), value, datePicker.android.getDayOfMonth());
}

export function setNativeDay(datePicker: datePickerModule.DatePicker, value: number): void {
    datePicker.android.updateDate(datePicker.android.getYear(), datePicker.android.getMonth(), value);
}

export function setNativeDate(datePicker: datePickerModule.DatePicker, year: number, month: number, day: number): void {
    datePicker.android.updateDate(year, month, day);
}
