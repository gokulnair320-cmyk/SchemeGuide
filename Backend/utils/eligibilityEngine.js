const isEligible = (user, scheme) => {
  if (scheme.minIncome && user.income > scheme.minIncome) return false;
  if (scheme.category && scheme.category !== user.category) return false;
  if (scheme.minAge && user.age < scheme.minAge) return false;
  if (scheme.maxAge && user.age > scheme.maxAge) return false;

  return true;
};

const filterEligibleSchemes = (user, schemes) => {
  return schemes.filter(scheme => isEligible(user, scheme));
};

module.exports = { filterEligibleSchemes };
