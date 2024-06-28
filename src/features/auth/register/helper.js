export const transformParams = (data) => {
  const { firstName, lastName, email, address, password } = data ?? {};
  const formData = new FormData();
  formData.append("FirstName", firstName);
  formData.append("LastName", lastName);
  formData.append("Email", email);
  formData.append("Password", password);
  formData.append("Address", address);
  return formData;
};
