function identifier(param1: Type, param2: type): ReturnedType {}

function identifier <T, U>(): returnedType {}

function identifier(p1: T1, p2: T2): T3;
function identifier(p1: T4, p2: T5): T6;
function identifier(p1: T, p2: T): T {
  return 'value'
}

class Identifier {
  constructor(p1: T1, p2: T2): T3;
  constructor(p1: T4, p2: T5): T6;
  constructor(p1: T, p2: T): T {}

  identifier(p1: T1, p2: T2): T3;
  identifier(p1: T4, p2: T5): T6;
  identifier(p1: T, p2: T): T {
    return 'value'
  }
}
