export const hidePhoneNumber = (phone) => {
  if (phone.length >= 10) {
    const digitsToHide = 6;
    const start = phone.substring(0, 5);
    const end = phone.substring(phone.length - 2);
    const hidden = "*".repeat(digitsToHide);
    return `${start.substring(0, 2)} (${start.slice(2)}) ${hidden}-${end}`;
  }

  return phone;
};
