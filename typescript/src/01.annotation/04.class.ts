class Identifier<T> {
  static staticField: Type = value; // member

  static get staticProperty(): Type { // member
    return value
  }

  static set staticProperty(value: Type) {} // member

  static staticMethod <T, U>(param: Type, param: Type): Type {} // member

  [indexSignature: Type]: Type; // member

  [computedProp]: Type = value // member

  field: Type = value; // member

  get property(): Type { // member
    return value
  }

  set property(value: Type) {} // member

  constructor(param0: Type, param1: Type) {}

  method <T, U>(param: Type, param: Type) {} // member
}
