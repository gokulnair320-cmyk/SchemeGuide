// const isEligible = (user, scheme) => {
//   if (scheme.minIncome && user.income > scheme.minIncome) return false;
//   if (scheme.category && scheme.category !== user.category) return false;
//   if (scheme.minAge && user.age < scheme.minAge) return false;
//   if (scheme.maxAge && user.age > scheme.maxAge) return false;

//   return true;
// };

// const filterEligibleSchemes = (user, schemes) => {
//   return schemes.filter(scheme => isEligible(user, scheme));
// };

const matchesRule = (user, rule) => {
  if (rule.minIncome && user.income < rule.minIncome) return false;
  if (rule.category && rule.category !== user.category) return false;
  if (rule.minAge && user.age < rule.minAge) return false;
  if (rule.maxAge && user.age > rule.maxAge) return false;
  if (rule.isDisabled && !user.isDisabled) return false;
  return true;
};

const isEligible = (user, scheme) => {
  return scheme.rules.some(rule => matchesRule(user, rule));
};

const filterEligibleSchemes = (user, schemes) => {
  return schemes.filter(scheme => isEligible(user, scheme));
};

module.exports = { filterEligibleSchemes };
