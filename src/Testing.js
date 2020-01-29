function sum(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    throw new Error("invalid imput");
  }
  return a + b;
}
