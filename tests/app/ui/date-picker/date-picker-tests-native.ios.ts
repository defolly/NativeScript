﻿import * as datePickerModule from "tns-core-modules/ui/date-picker";

import * as utils from "tns-core-modules/utils/utils";

export function getNativeYear(datePicker: datePickerModule.DatePicker): number {
    return utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(NSCalendarUnit.CalendarUnitYear | NSCalendarUnit.CalendarUnitMonth | NSCalendarUnit.CalendarUnitDay, datePicker.ios.date).year;
}

export function getNativeMonth(datePicker: datePickerModule.DatePicker): number {
    return utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(NSCalendarUnit.CalendarUnitYear | NSCalendarUnit.CalendarUnitMonth | NSCalendarUnit.CalendarUnitDay, datePicker.ios.date).month - 1;
}

export function getNativeDay(datePicker: datePickerModule.DatePicker): number {
    return utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(NSCalendarUnit.CalendarUnitYear | NSCalendarUnit.CalendarUnitMonth | NSCalendarUnit.CalendarUnitDay, datePicker.ios.date).day;
}

export function getNativeMaxDate(datePicker: datePickerModule.DatePicker): Date {
    return new Date(1000* NSDate.dateWithTimeIntervalSinceDate(0, datePicker.ios.maximumDate).timeIntervalSince1970);
}

export function getNativeMinDate(datePicker: datePickerModule.DatePicker): Date {
    return new Date(1000* NSDate.dateWithTimeIntervalSinceDate(0, datePicker.ios.minimumDate).timeIntervalSince1970);
}

export function setNativeYear(datePicker: datePickerModule.DatePicker, value: number): void {
    var comps = utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(NSCalendarUnit.CalendarUnitYear | NSCalendarUnit.CalendarUnitMonth | NSCalendarUnit.CalendarUnitDay, datePicker.ios.date);
    comps.year = value;
    datePicker.ios.setDateAnimated(utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).dateFromComponents(comps), false);
    (<any>datePicker)._changeHandler.valueChanged(datePicker.ios);
}

export function setNativeMonth(datePicker: datePickerModule.DatePicker, value: number): void {
    var comps = utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(NSCalendarUnit.CalendarUnitYear | NSCalendarUnit.CalendarUnitMonth | NSCalendarUnit.CalendarUnitDay, datePicker.ios.date);
    comps.month = value + 1;
    datePicker.ios.setDateAnimated(utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).dateFromComponents(comps), false);
    (<any>datePicker)._changeHandler.valueChanged(datePicker.ios);
}

export function setNativeDay(datePicker: datePickerModule.DatePicker, value: number): void {
    var comps = utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(NSCalendarUnit.CalendarUnitYear | NSCalendarUnit.CalendarUnitMonth | NSCalendarUnit.CalendarUnitDay, datePicker.ios.date);
    comps.day = value;
    datePicker.ios.setDateAnimated(utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).dateFromComponents(comps), false);
    (<any>datePicker)._changeHandler.valueChanged(datePicker.ios);
}

export function setNativeDate(datePicker: datePickerModule.DatePicker, year: number, month: number, day: number): void {
    var comps = utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(NSCalendarUnit.CalendarUnitYear | NSCalendarUnit.CalendarUnitMonth | NSCalendarUnit.CalendarUnitDay, datePicker.ios.date);
    comps.year = year;
    comps.month = month + 1;
    comps.day = day;
    datePicker.ios.setDateAnimated(utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).dateFromComponents(comps), false);
    (<any>datePicker)._changeHandler.valueChanged(datePicker.ios);
}
