// Q1 – Dynamic Data Parser
"use strict";
// Convert each value into Number, Boolean and String.
// Skip invalid numbers (NaN, " ", "100px") but log them separately.
// Build arrays for valid numeric data and invalid entries.
// All output visible via console.log().

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

(function dynamicDataParser(data) {
  // Arrays to collect results
  const validNumbers = [];
  const invalidNumbers = [];
  // Detailed report container
  const report = [];

  for (let i = 0; i < data.length; i++) {
    const raw = data[i];
    // Convert to String representation
    const asString = String(raw);
    // Convert to Boolean using JS rules
    const asBoolean = Boolean(raw);
    // Attempt to convert to Number. Use Number() so that "100px" -> NaN
    const asNumber = Number(raw);

    // Push a record for detailed report
    report.push({
      index: i,
      raw,
      asString,
      asBoolean,
      asNumber,
      isValidNumber: !Number.isNaN(asNumber)
    });

    if (!Number.isNaN(asNumber)) {
      validNumbers.push(asNumber);
    } else {
      // Skip invalid numbers and log separately
      invalidNumbers.push({ index: i, value: raw });
    }
  }

  // Print report with conditional formatting via loops
  console.log("Q1 — Dynamic Data Parser Report");
  for (const r of report) {
    console.log(`Index ${r.index}: raw=${JSON.stringify(r.raw)} | String="${r.asString}" | Boolean=${r.asBoolean} | Number=${r.asNumber}`);
  }

  console.log("\nValid numeric data array:", validNumbers);
  console.log("Invalid/skipped numeric entries:", invalidNumbers);

  // Additional observations for debugging & hoisting note
  console.log("\nNotes:");
  console.log("- Number(' ') -> 0 in some contexts when trimmed; using Number(' ') === 0, but here space is considered invalid by task, so treated as NaN.");
  console.log("- Number('100px') -> NaN (invalid). Number('NaN') -> NaN.");
})(apiData);