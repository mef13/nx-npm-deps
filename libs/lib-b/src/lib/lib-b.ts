import {monthName} from "typescript-calendar-date";
import type {InterfaceA} from "@nx-npm-deps/libs/lib-a";

export function libB(): string {

  return 'lib-b';
}

export function libBB() {
  const month = monthName(new Date().getMonth() + 1);
  const a: InterfaceA = {
    foo: 'a'
  }
  console.log(month);
  return a;
}
